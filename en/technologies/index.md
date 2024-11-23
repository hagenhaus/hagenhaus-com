---
hasRefreshBtn: true
---

# Technologies

# Express.js

``` nonum js
const express = require('express');
const app = express();
 
// Use express.json middleware
app.use(express.json());
 
// Your routes and other middleware...
 
// Custom error handler middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    // Handle JSON parsing errors
    return res.status(400).json({
      success: false,
      error: 'Invalid JSON payload'
    });
  }
 
  // Handle other errors
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error'
  });
});
 
app.listen(3000);
```

[Using middleware](https://expressjs.com/en/guide/using-middleware.html)

# Mysql

[Server Error Message Reference](https://dev.mysql.com/doc/mysql-errors/5.7/en/server-error-reference.html)

Upgrading from MySQL <8.4 to MySQL >9.0 requires running MySQL 8.4 first:

 - brew services stop mysql
 - brew install mysql@8.4
 - brew services start mysql@8.4
 - brew services stop mysql@8.4
 - brew services start mysql

We've installed your MySQL database without a root password. To secure it run:

``` nonum
mysql_secure_installation
```

MySQL is configured to only allow connections from localhost by default

To connect run:

``` nonum
mysql -u root
```

To start mysql now and restart at login:

``` nonum
brew services start mysql
```

Or, if you don't want/need a background service you can just run:

``` nonum
/usr/local/opt/mysql/bin/mysqld_safe --datadir\=/usr/local/var/mysql
```

# Web components

[Encapsulating Style and Structure with Shadow DOM](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/)