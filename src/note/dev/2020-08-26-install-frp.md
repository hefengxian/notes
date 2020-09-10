---
title: 安装 frp 进行内网穿透
tags:
    - frp
    - NAS
    - 内网穿透
    - QNAP
---

## 背景

最近入手了一个 QNAP 的 NAS 由于住处的网络是公寓统一的，所以没有路由器权限，不能使用路由器的 DDNS 进行端口转发；只能另做它法，以前为了穿透公司的内网研究了 frp，而且实验成功了

上次也没有记录怎么处理的，这次有需要顺便记录一下。由于 NAS 有点小瑕疵店家叫发回去换一个，~~所以客户端那边暂时不写，先在我的 Tencent Cloud 有公网 IP 的 VPS 搭建好 frp Server~~

参考：

- [https://github.com/fatedier/frp](https://github.com/fatedier/frp)

> 有公网 IP 的或者拨号路由器由自己控制的，可以不通过 frp 来实现；直接使用路由器的 DDNS + 花生壳之类的实现就可以了


## frp Server 安装笔记

先 SSH 登录自己的云服务器，去 Github 上找到 frp 项目的 [Release](https://github.com/fatedier/frp/releases) 页面，找到 Latest Release 下载对应系统的版本，例如使用 Ubuntu 18.04 64 位系统就下载 `frp_0.xxx.0_linux_amd64.tar.gz`，例如我下载的时候是 0.33.0 版本

```bash
# 下载
wget https://github.com/fatedier/frp/releases/download/v0.33.0/frp_0.33.0_linux_amd64.tar.gz

# 解压
tar -zxvf frp_0.33.0_linux_amd64.tar.gz
```

这里安装的话分几种形式，比如去改 frps.service 文件的，或者不改文件，复制相关文件到对应目录的；我这里采用不改 service 文件，而是采用复制对应的文件到对应的位置

```bash
# 具体位置是依据 frp_0.33.0_linux_amd64/systemd/frps.service 的配置来决定的
# ExecStart=/usr/bin/frps -c /etc/frp/frps.ini

# 复制可执行文件
cp frps /usr/bin/

# 复制配置文件
mkdir -p /etc/frp/ && cp frps.ini /etc/frp/

# 复制 service 文件
cp systemd/frps.service /ete/systemd/system/
```

修改 frpS 的配置

```ini
[common]
# 各个端口的绑定
bind_port = 7777
kcp_bind_port = 7777
bind_udp_port = 7778

# 管理界面配置
dashboard_port = 7779
dashboard_user = xxx
dashboard_pwd = xxxxx

# 日志配置
log_file = /var/log/frps.log
# trace, debug, info, warn, error
log_level = warn
log_max_days = 7

# 客户端要填对了 Token 才可以使用
token = xxxx
```

> 这里要要确定你的 VPS 的上述端口是开放的

然后执行 `systemctl start frps.service`，正常情况下已经搭建成功了

可以通过 http://yourdomain:dashboard_port 访问控制台，输入对应设置的账号密码即可


## frp Client 安装

客户端其实主要也是配置如何编写

1. 下载 frp，这里选择要进行内网穿透的系统类型，按情况下载
2. 把 frpc 复制到某个目录，修改 frpc.ini 就可以了
3. 看情况要不要设置成开机启动，这里不同的操作系统都不一样，需要的自己搜索如何操作即可

重点讲一下如何在我的 QNAP 上设置 frpc，因为资料比较少，一般推荐使用容器，有点奇怪；既然 QTS 本质是一个 Linux（并不完整，很多功能没有，比如 systemd/init.d 都没有，自启动不能依赖它们），那么我们直接通过 QNAP 的 `autorun.sh` 来让 frpc 开机自动运行

根据 QNAP 官方的 wiki，找到如下的 autorun.sh 的编辑方法

> [Running Your Own Application at Startup](https://wiki.qnap.com/wiki/Running_Your_Own_Application_at_Startup)

1. 首先在设置里开启 ssh 登录
2. 通过 ssh 连接上 NAS

```bash
# SSH 连接 NAS
ssh admin@192.168.x.xxx

# 挂载
mount $(/sbin/hal_app --get_boot_pd port_id=0)6 /tmp/config

# 编辑文件
vim /tmp/config/autorun.sh

# 赋权
chmod a+x /tmp/config/autorun.sh 

# 取消挂载，这里官方标注为 IMPORTANT
umount /tmp/config
```

frp 的文件放在哪里也有讲究，如果直接放在系统安装目录下面重启之后会消失；感觉 QTS 启动那么慢就是因为每次启动都是把系统镜像重新安装了一次

所以要找到你的磁盘，把文件放到那里面，其实这样的话我们可以不用把文件拷贝到系统中了，可以通过共享目录就拷贝进去了；但是这个看个人了 QTS 的磁盘都挂载在 `/share` 下面，而且你建立的共享文件夹它都设置了符号链接，比如，我就将 frp 相关的文件放在了

```
/share/playground/frp/
```

这里重点说一下 autorun.sh 里面命令编写遇到的问题

`frpc` 的命令是阻塞的，不结束就会阻塞后面的操作；因为这个原因导致 NAS 重启之后优先级低一点的应用程序总是启动不了，导致 NAS 各种功能没法用；因为这个原因导致我还重置 NAS，浪费了大量的时间。

所以我们要将命令写成如下这样

```bash
# for frp
/share/playground/frp/frpc -c /share/playground/frp/frpc.ini &
```

后面加个 `&` ，这样处理之后就可以正常启动其他的程序了。

`frpc.ini` 文件示例：

```ini
[common]
server_addr = xxxxxxx
server_port = xxxx
token = xxxxxxxxx

; NAS 管理窗口 HTTP 映射
[nas_http]
type = tcp
local_ip = 127.0.0.1
local_port = 5000
remote_port = xxxx

; SSH 端口映射
[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = xxxx
```

这样你就可以通过你的域名 + 端口号来愉快的访问你的 NAS 了


