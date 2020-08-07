---
title: Oracle 通过 DATABASE LINK 查询带 *LOB 字段的表
tags:
    - oracle
    - dblink
    - lob
---


## 背景

想通过 DBLINK 从一个库复制数据到另外一个库进行测试

```sql
-- 建立 DBLINK
CREATE PUBLIC DATABASE LINK "WDM_APP_173"
    CONNECT TO "WDM_APP" IDENTIFIED BY "xxx"
USING '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.1.173)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=ORCL)))';

-- 复制数据
INSERT INTO RAW_EVENT SELECT * FROM RAW_EVENT@WDM_APP_173;
```

报错如下：

```
ORA-65510: Distributed LOB operations are not supported on pre-12.2 databases.
65510. 00000 -  "Distributed LOB operations are not supported on pre-12.2 databases."
*Cause:    An attempt was made to send or receive a LOB locator
           over a database link to a pre-12.2 database.
*Action:   Ensure that the remote database for a distributed LOB operation is
           Oracle Database version 12.2 or higher.
```


## 方案

由于 Oracle 的特殊字段 BLOB、CLOB 导致失败，所以需要转个弯

```sql
-- 创建一个临时的表
CREATE TABLE WDM_APP.TEMP_RAW_EVENT AS SELECT * FROM WDM_APP.RAW_EVENT@WDM_APP_173;
```

再通过本地的这个临时表操作即可


