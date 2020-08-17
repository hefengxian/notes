---
title: 如何卸载腾讯云的监控服务
tags:
    - Ubuntu
    - Tencent Cloud
    - 腾讯云
    - 监控服务
---


## 背景

最近买了腾讯云服务器，选择了 Ubuntu 的系统，购买之后先通过控制台连接到服务器修改远程信息

```bash
# 切换到 root 用户
sudo -s

# 修改 root 用户密码
passwd root

# 编辑 ssh 配置
vim /etc/ssh/sshd_config
```

修改如下设置

```bash
# 端口，改成一个不常用的
Port 22xx

# 修改成 yes
PermitRootLogin yes

# 腾讯云默认把密码登录选项给禁用了，推荐的是部署公钥；这里开启密码登录
PasswordAuthentication yes
```

重启一下 `systemctl restart sshd.service` 让修改的设置生效


## 卸载腾讯云监控

通过 `htop` 命令发现有大量的奇怪进程，查了一下都是属于腾讯云的监控服务器，一般用来检测 VPS 的各种运行状态，但是一般会占用更多资源 CPU、内存、硬盘空间等，所以选择将其关闭

直接运行命令删除

```bash
# 执行卸载命令
/usr/local/qcloud/stargate/admin/uninstall.sh
/usr/local/qcloud/YunJing/uninst.sh
/usr/local/qcloud/monitor/barad/admin/uninstall.sh

# 检查，为空表示没有相关服务在运行了（这是是大致匹配，如果已经安装了进程里带 agent 的软件，也可能导致有内容）
ps -A | grep agent

# 删除相关目录，上面的卸载命令并没有删除文件
rm -rf /usr/local/qcloud
```

通过上面的步骤会发现，进程变少了很多（也防止腾讯云偷看你装了什么，比如国内的云服务商就被政府要求不能安装翻墙相关的软件）


