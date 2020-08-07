---
title: Ubuntu 彻底移除 snap
tags:
    - Ubuntu
    - snap
    - snapd
---


## 背景

给公司的服务器新安装的 Ubuntu Server 2004，`htop` 发现有一个 `snapd.service` 在吃资源（内存、磁盘），所以要移除；之前我的处理办法是直接停用服务

```bash
systemctl stop snapd.service
```

但是会提示你这个服务还会启动，如果使用 `disable` 重启之后会起另外的服务，更占资源，所以搜索了一下这个 Snap 是什么、能不能彻底卸载；其实可以完全卸载的，特么是在服务器版本上这个东西基本上没有用。


## 步骤

> 这里直接复制别人总结好的步骤，因为我自己也在多台服务器设置过了；如果已经有 root 登录则不需要加 sudo 了

```bash
sudo apt purge snapd
rm -vrf ~/snap

# following may not be required as apt purge already removes them
sudo rm -vrf /snap /var/snap /var/lib/snapd /var/cache/snapd /usr/lib/snapd

# trying to install some package like chromium-browser will bring back snapd
# make sure snapd is not installed as a dependency anymore
# downside is that some package installation might fail because of dependecy on snapd
sudo apt-mark hold snapd
```
