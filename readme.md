# Hagenhaus

# Run the website

## Run on localhost

1. Clone the repository to your local machine.

1. Run *http-server* for the static pages:

    ```
    $ cd hagenhaus-com
    $ pm2 start http-server --name hagenhaus-com-8082 -- -c-1 -p 8082
    ```

1. Browse to http://localhost:8082

1. Install the API Server:

    ```
    $ cd hagenhaus-com/server
    $ npm i
    ```

1. Create a *.env* file:

    ```
    appId=hagenhaus-server
    appName=Hagenhaus Server
    appPort=8086
    appVersion=001
    dbConnectionLimit=10
    dbDatabase=hagenhaus
    dbHost=localhost
    dbPassword=password
    dbUser=native
    https=false
    jwtExpiresIn=86400
    jwtSecret=mysecret
    saltRounds=10
    ```

1. Run server in foreground:

    ``` 
    $ node server 
    ```

1. Run server in background:

    ```
    $ pm2 start server.js --name hagenhaus-server-8086 -- -c-1
    ```

## Run on AWS

1. Clone the repository to your local machine.

1. Copy static files to *htdocs*:

    ```
    $ ./deploy.sh
    ```

1. Browse to https://hagenhaus.com

1. Install the API Server:

    ```
    $ cd hagenhaus-com/server
    $ npm i
    ```

1. Create a *.env* file:

    ```
    appId=hagenhaus-server
    appName=Hagenhaus Server
    appPort=3002
    appVersion=001
    certificate=/opt/bitnami/letsencrypt/certificates/hagenhaus.com.crt
    dbConnectionLimit=10
    dbDatabase=hagenhaus
    dbHost=localhost
    dbPassword=password
    dbUser=native
    https=true
    jwtExpiresIn=86400
    jwtSecret=mysecret
    privateKey=/opt/bitnami/letsencrypt/certificates/hagenhaus.com.key
    saltRounds=10
    ```

1. Run server in foreground:

    ``` 
    $ node server 
    ```

1. Run server in background:

    ```
    $ pm2 start server.js --name hagenhaus-server-3002 -- -c-1
    ```
