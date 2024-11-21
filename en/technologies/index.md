---
hasRefreshBtn: true
---

# Technologies

# Mysql

[Server Error Message Reference](https://dev.mysql.com/doc/mysql-errors/5.7/en/server-error-reference.html)

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