---
title: 安装 FRP 进行内网穿透
tags:
    - FRP
    - NAS
    - 内网穿透
---

## 背景

最近入手了一个 QNAP 的 NAS 由于住处的网络是公寓统一的，所以没有路由器权限，不能使用路由器的 DDNS 进行端口转发；只能另做它法，以前为了穿透公司的内网研究了 FRP，而且实验成功了

上次也没有记录怎么处理的，这次有需要顺便记录一下。由于 NAS 有点小瑕疵店家叫发回去换一个，所以客户端那边暂时不写，先在我的 Tencent Cloud 有公网 IP 的 VPS 搭建好 FRP Server

参考：

- [https://github.com/fatedier/frp](https://github.com/fatedier/frp)


## FRP Server 安装笔记

先 SSH 登录自己的云服务器，去 Github 上找到 FRP 项目的 [Release](https://github.com/fatedier/frp/releases) 页面，找到 Latest Release 下载对应系统的版本，例如使用 Ubuntu 18.04 64 位系统就下载 `frp_0.xxx.0_linux_amd64.tar.gz`，例如我下载的时候是 0.33.0 版本

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

修改 FRPS 的配置

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


## FRP Client 安装

> todo
