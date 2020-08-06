---
title: macOS 升级 PHP 编译扩展
tags:
    - macOS
    - PHP
    - OCI
---

## 背景故事

上次由于想要升级一下 `yarn`，然后自动升级 `icu4c` 组件，导致 PHP 无法运行；索性就把所有 brew 安装的组件都升级了一遍。然后就出现了喜闻乐见的 PHP Oracle 驱动找不到了。

> Homebrew 做的真的是挺烂的！


## 具体步骤

首先完全不推荐使用 Pear 或者 Pecl，又老又旧难安装反正一堆的问题。所以这里直接下载 PHP 源码进行编译。这里要注意的事，macOS 预装的 PHP 因为 SIP 的存在是不能改动的；这里只讨论 brew 安装的版本。


### 下载源码

先查看 PHP 版本 `php -v` 例如我使用的是 `7.4.8`（这里也要确保 php 是 brew 安装的版本，具体可以使用 `which php` `type -a php` 来查看用的哪一个）

然后去 php.net 下载匹配版本的源码，如果国内下载不动就挂代理


### 检查工作

brew 默认安装的只把 php 链接到了 `/usr/local/bin/`，如果要编译我们还要准备其他几个可执行文件；建立符号链接到 `/usr/local/bin/` 下，否则如果用到了预装的可执行文件，会导致各种问题

```bash
ln -s /usr/local/opt/php/bin/phpize /usr/local/bin/phpize
ln -s /usr/local/opt/php/bin/php-config /usr/local/bin/php-config
```

执行 `which phpize`、`which php-config` 确认，如果还没有生效执行一下 `hash -r`

确保系统中已经有 Oracle Instantclient，没有就去 Oracle 官网下载。例如我使用的是 12.2 版本的，并且已经放在了目录 `/usr/local/instantclient_12_2`


### 开始编译

解压 PHP 源码到某个目录，例如 `~/Desktop/Temp/php-7.4.8/`

```bash
# OCI8 编译
cd ~/Desktop/Temp/php-7.4.8/ext/oci8/
phpize
./configure --with-oci8=instantclient,/usr/local/instantclient_12_2,12.2
make
make install


# PDO_OCI 编译
cd ~/Desktop/Temp/php-7.4.8/ext/pdo_oci/
phpize
./configure --with-pdo-oci=instantclient,/usr/local/instantclient_12_2,12.2
make
make install
```

### 配置 php.ini

在 php.ini 中加入（php.ini 的位置使用 `php --ini` 查看）

```ini
extension=oci8.so
extension=pdo_oci.so
``` 

配置完成之后可以直接使用 `php -m` 查看启用扩展，重启一下 Apache 查看 `phpinfo()` 


完
