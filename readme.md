# Hagenhaus

# Environments

## Local

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

## Public

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