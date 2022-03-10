# Okta Hosted Login

Click https://hagenhaus.com:3001.

# Local Dot Env

``` nonum
appId=baby-registry.webapp.node.okta-hosted-login
appName=Baby Registry
appPort=8084
appVersion=001
certificate=/none
dbConnectionLimit=10
dbDatabase=baby_registry_okta
dbHost=localhost
dbPassword=password
dbUser=native
https=false
logLevel=info
oktaAppBaseUrl=http://localhost:8084
oktaApptoken=00z4Twir1EUD3ROsQeAv0cpZeRQ_GaMq-TKWAhoxJp
oktaClientId=0oa3zbb6z6kHYVY5u5d7
oktaClientSecret=jOX-8ehJY5iD4WbqQMOL4YUP4nAWFuPd7ATe6-zB
oktaDomainName=dev-70160090.okta.com
oktaIssuer=https://dev-70160090.okta.com/oauth2/default
oktaScope=openid profile email address
privateKey=/none
srvName=baby-registry
```

# Public Dot Env

``` nonum
appId=baby-registry.webapp.node.okta-hosted-login
appName=Baby Registry
appPort=3001
appVersion=001
certificate=/opt/bitnami/letsencrypt/certificates/hagenhaus.com.crt
dbConnectionLimit=10
dbDatabase=baby_registry_okta
dbHost=localhost
dbPassword=password
dbUser=sample
https=true
logLevel=info
oktaAppBaseUrl=https://hagenhaus.com:3001
oktaApptoken=00z4Twir1EUD3ROsQeAv0cpZeRQ_GaMq-TKWAhoxJp
oktaClientId=0oa4029snhXdbvSZp5d7
oktaClientSecret=RWfTI9nUkn3X8IBhg3j7B6z6uc4oFO1Q5ZgwoQ-6
oktaDomainName=dev-70160090.okta.com
oktaEventPwd=PeaceOnEarth4All
oktaIssuer=https://dev-70160090.okta.com/oauth2/default
oktaScope=openid profile email address
privateKey=/opt/bitnami/letsencrypt/certificates/hagenhaus.com.key
srvName=baby-registry
```

# Database Setup

1. Create a mysql database:

    ``` nonum
    drop database if exists baby_registry_okta;
    create database baby_registry_okta;
    use baby_registry_okta;
    ```

1. Create a native user if necessary:

    ``` nonum
    create user 'native'@'localhost' identified with mysql_native_password by 'password';
    grant all privileges on baby_registry_okta.* to 'native'@'localhost';
    ```

1. Add database tables.

1. Add database procedures.

1. If the db has existing data, run `call truncateTables;`.

1. Run `call insertProducts();`.

1. Run the *Create Users* operation in the *Runner* in the Postman collection.

# Database Tables

Here is the schema.

<p><img src="database-schema.png" class="img-fluid mx-auto" width=700 loading="lazy"></p>

## &#35; gifts

``` nonum
drop table if exists gifts;
create table gifts (
  id int auto_increment primary key,
  registryId int not null,
  productId int not null
) character set = utf8;
```

## &#35; ownerships

``` nonum
drop table if exists ownerships;
create table ownerships (
  id int auto_increment primary key,
  userId varchar(128) not null,
  registryId int not null
) character set = utf8;
```

## &#35; products

``` nonum
drop table if exists products;
create table products (
  id int auto_increment primary key,
  name varchar(128) not null,
  description text not null,
  price decimal(8, 2) not null
) character set = utf8;
```

## &#35; purchases

``` nonum
drop table if exists purchases;
create table purchases (
  id int auto_increment primary key,
  userId varchar(128) not null,
  userName varchar(128) not null,
  giftId int not null unique,
  date timestamp not null default current_timestamp
) character set = utf8;
```

## &#35; registries

``` nonum
drop table if exists registries;
create table registries (
  id int auto_increment primary key,
  name varchar(128) not null,
  dueDate date not null,
  state enum ("active","inactive") not null
) character set = utf8;
```

# Database Procedures

## &#35; deleteRegistry

``` nonum
drop procedure if exists deleteRegistry;
delimiter //
create procedure deleteRegistry(in id int)
begin

  declare errno int;
  declare exit handler for sqlexception
  begin
  get current diagnostics condition 1 errno = mysql_errno;
  select errno as mysql_error;
  rollback;
  end;

  start transaction;
  delete from registries where registries.id = id;
  delete from ownerships where ownerships.registryId = id;
  delete purchases from purchases inner join gifts on purchases.giftId=gifts.id where gifts.registryId = id;
  delete from gifts where gifts.registryId = id;
  commit;

end //
delimiter ;
```

## &#35; insertGift

``` nonum
drop procedure if exists insertGift;
delimiter //
create procedure insertGift(
  in registryId int, 
  in productId int
)
begin
  insert into gifts (registryId, productId) values (registryId, productId);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create gift.';
  else
    select LAST_INSERT_ID() as giftId;
  end if;
end //
delimiter ;
```

## &#35; insertProduct

``` nonum
drop procedure if exists insertProduct;
delimiter //
create procedure insertProduct(
  in name varchar(128), 
  in description text,
  in price decimal(8, 2)
)
begin
  insert into products (name, description, price) 
  values (name, description, price);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create product.';
  else
    call selectProduct(LAST_INSERT_ID());
  end if;
end //
delimiter ;
```

## &#35; insertProducts

``` nonum
drop procedure if exists insertProducts;
delimiter //
create procedure insertProducts()
begin

  declare errno int;
  declare exit handler for sqlexception
  begin
  get current diagnostics condition 1 errno = mysql_errno;
  select errno as mysql_error;
  rollback;
  end;

  start transaction;

  call insertProduct("Baby Zip Sleeper", "Crafted in organic cotton, our sleepers are great for keeping baby comfortable, day and night. A handy neck-to-knee zipper makes changing easy, and it won't lose it's remarkably soft feel or bright colors after washing.", 19.99);
  call insertProduct("Dream Blanket", "With four layers of cotton muslin, this snuggly baby blanket is nothing less than dreamy. Our softest baby blanket yet, the aden + anais dream blanket makes a comfy surface for tummy time, story time, and much more.", 49.99);
  call insertProduct("Floor Seat", "Give your baby the best seat in the house with the Baby Base 2-in-1 Seat. Use it on the floor for supported play or strap it to a chair for dining. Remove the soft insert as your child grows.", 39.99);
  call insertProduct("Baby Bassinet Bedside Sleeper", "A bedside bassinet gives you the closeness and convenience of co-sleeping, while allowing baby his or her own protected space. The side wall lowers to allow you to tend to baby without leaving your bed.", 159.99);
  call insertProduct("Jogging Stroller", "Having a baby doesn’t have to mean giving up your active lifestyle. With this jogging stroller, you can get out, get some exercise, and ensure your baby is never left out of the fun.", 269.99);
  call insertProduct("Table Chair", "Baby chairs that attach directly to the edge of the table are great because they put your little one right in the middle of the action instead of being slightly separated in a high chair.", 67.59);
  call insertProduct("Baby Carrier", "Carrier slips on like a T-shirt and adjusts by pulling fabric through the rings in the back. Your baby sits in a double layer of fabric, and there’s a safety sash to tie to ensure that they’re secure.", 54.99);
  call insertProduct("White Onesies", "Ideal as a cozy underlayer beneath a shirt and pants, these bodysuits are the foundation of any baby's wardrobe.", 11.94);
  call insertProduct("Baby Playpen", "Bassinet is designed for babies up to 15 lbs. Reach-through bassinet folds with your Playard for quick set-up and easy travel with less parts to carry.", 84.99);
  call insertProduct("Teething Bibs", "Waterproof protection for drools and spit ups. Waterproof inner layer keeps baby dry and comfortable.", 17.89);

  commit;

end //
delimiter ;
```

## &#35; insertPurchase

``` nonum
drop procedure if exists insertPurchase;
delimiter //
create procedure insertPurchase(
  in userId varchar(128),
  in userName varchar(128),
  in giftId int
)
begin
  insert into purchases (userId, userName, giftId) values (userId, userName, giftId);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create purchase.';
  else
    select LAST_INSERT_ID() as purchaseId;
  end if;
end //
delimiter ;
```

## &#35; insertRegistry

``` nonum
drop procedure if exists insertRegistry;
delimiter //
create procedure insertRegistry(
  in name varchar(128), 
  in dueDate date, 
  in userId varchar(128)
)
begin

  declare errno int;
  declare exit handler for sqlexception
  begin
  get current diagnostics condition 1 errno = mysql_errno;
  select errno as mysql_error;
  rollback;
  end;

  start transaction;
  insert into registries (name, dueDate) values (name, dueDate);
  set @registryId = LAST_INSERT_ID();
  insert into ownerships (userId, registryId) values (userId, @registryId);
  select @registryId as registryId;
  commit;

end //
delimiter ;
```

## &#35; selectGifts

``` nonum
drop procedure if exists selectGifts;
delimiter //
create procedure selectGifts(in registryId int)
begin
  select g.id as giftId, p.id as productId, p.name as productName, p.description as productDescription, p.price as productPrice, b.userId as buyerId, b.userName as buyerName
  from registries as r
  join gifts as g on r.id=g.registryId
  join products as p on g.productId=p.id
  left join purchases as b on b.giftId=g.id
  where r.id=registryId;
end //
delimiter ;
```

## &#35; selectOwnership

``` nonum
drop procedure if exists selectOwnership;
delimiter //
create procedure selectOwnership(in id int)
begin
  select id, userId, registryId from ownerships where ownerships.id = id;
  if found_rows() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such ownership';
  end if;
end //
delimiter ;
```

## &#35; selectProduct

``` nonum
drop procedure if exists selectProduct;
delimiter //
create procedure selectProduct(in id int)
begin
  select id, name, description, price from products where products.id = id;
  if found_rows() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such product';
  end if;
end //
delimiter ;
```

## &#35; selectRegistries

``` nonum
drop procedure if exists selectRegistries;
delimiter //
create procedure selectRegistries(
  in name varchar(128),
  in `limit` int
)
begin
  set @searchClause = concat(" where registries.name like '%", name, "%' and state='active'");
  set @limitClause = concat(" limit ", `limit`);
  set @query = concat("select id, name, dueDate from registries", @searchClause, @limitClause);
  prepare stmt from @query;
  execute stmt;
  deallocate prepare stmt;
end //
delimiter ;
```

## &#35; selectRegistry

``` nonum
drop procedure if exists selectRegistry;
delimiter //
create procedure selectRegistry(in id int)
begin
  select r.id, r.name, r.dueDate, r.state, o.userId as ownerId, o.userId as ownerName
  from registries as r
  join ownerships as o on r.id=o.registryId 
  where r.id = id;
  if found_rows() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such registry';
  end if;
end //
delimiter ;
```

## &#35; selectRegistryByUserId

``` nonum
drop procedure if exists selectRegistryByUserId;
delimiter //
create procedure selectRegistryByUserId(in userId varchar(128))
begin
  select r.id, r.name, r.dueDate, r.state, o.userId as ownerName
  from registries as r
  join ownerships as o on r.id=o.registryId 
  where o.userId = userId;
end //
delimiter ;
```

## &#35; selectRegistryProducts

``` nonum
drop procedure if exists selectRegistryProducts;
delimiter //
create procedure selectRegistryProducts(in registryId int)
begin
  select p.id, p.name, p.description, p.price from products as p
  join gifts as g on p.id=g.productId 
  where w.registryId=registryId;
end //
delimiter ;
```

## &#35; truncateTables

``` nonum
drop procedure if exists truncateTables;
delimiter //
create procedure truncateTables()
begin

  declare errno int;
  declare exit handler for sqlexception
  begin
  get current diagnostics condition 1 errno = mysql_errno;
  select errno as mysql_error;
  rollback;
  end;

  start transaction;
  truncate table gifts;
  truncate table ownerships;
  truncate table products;
  truncate table purchases;
  truncate table registries;
  commit;

end //
delimiter ;
```

## &#35; updateRegistry

``` nonum
drop procedure if exists updateRegistry;
delimiter //
create procedure updateRegistry(
  in id int, 
  in name varchar(128),
  in dueDate date,
  in state enum("active","inactive")
)
begin
  set @setClause = "";
  set @count = 0;

  if name is not null then set @count = @count + 1;
  end if;
  if dueDate is not null then set @count = @count + 1;
  end if;
  if state is not null then set @count = @count + 1;
  end if;

  if @count > 0 then

    if name is not null then
      set @setClause = concat(@setClause, "name=", quote(name));
      set @count = @count - 1;
      if @count > 0 then
        set @setClause = concat(@setClause, ",");
      end if;
    end if;

    if dueDate is not null then
      set @setClause = concat(@setClause, "dueDate=", quote(dueDate));
      set @count = @count - 1;
      if @count > 0 then
        set @setClause = concat(@setClause, ",");
      end if;
    end if;

    if state is not null then
      set @setClause = concat(@setClause, "state=", quote(state));
    end if;

    set @query = concat("update registries set ", @setClause, " where id=", id);
    prepare stmt from @query;
    execute stmt;
    deallocate prepare stmt;
  end if;

end //
delimiter ;
```

# Old Installation Directions

## Configure Okta

1. Browse to your Okta Org.
1. Click Applications > Applications. 
1. Click Add Application.
1. Click Create New App.
1. For *Platform*, select Web.
1. For *Sign on method*, check OpenId Connect, and click Create.
1. For *Application name*, enter `localhost:8080 webapp`.
1. For *Login redirect URIs*, click Add URI, and enter `http://localhost:8080/authorization-code/callback`.
1. For *Logout redirect URIs*. click Add URI, and enter `http://localhost:8080`.
1. Click Assignments.
1. Click the Assign dropdown, and click Assign to Groups.
1. Click the Assign link next to Everyone, and click Done.
1. Click Security > API.
1. Click Authorization Servers. 
1. If none, click Add Authorization Server, fill in the form, and click Save.
1. Click Tokens.
1. Click Create Token.
1. Enter `Baby Registry` for the token name, and click Create Token.
1. Copy the Token Value, and save it to a temporary file.
1. Click OK, got it.
1. Click Trusted Origins.
1. Click Add Origin.
1. For *Name* and *Origin URL*, enter `http://localhost:8080`.
1. Select CORS and Redirect, and click Save.

## Run the app

1. Change directory:

    ```
    cd webapp/node/okta-hosted-login
    ```

1. Install packages:

    ``` 
    npm install
    ```

1. Create a `.env` file:

    *Example configuration for localhost*

    ``` nonum
    appName=Baby Registry
    appId=okta-baby-registry.webapp.node.okta-hosted-login
    appPort=8080
    appVersion=001
    certificate=/none
    dbConnectionLimit=10
    dbDatabase=baby_registry_okta
    dbHost=localhost
    dbPassword=Mysql3000$
    dbUser=native
    https=false
    logLevel=info
    oktaAppBaseUrl=http://localhost:8080
    oktaApptoken=000qzzUCW34R6zuPmva053J4svjw7OpxwYuVR6xCLl
    oktaClientId=0oaxsu2icfIfkDUdK0h7
    oktaClientSecret=WSOwXxsVt6ib4T1tw-sWN_bo1dzDU86-7NWFvAe1
    oktaDomainName=oietiger429.oktapreview.com
    oktaIssuer=https://oietiger429.oktapreview.com/oauth2/default
    oktaScope=openid profile email address
    privateKey=/none
    srvName=baby-registry
    ```

    *Example configuration for remote host*

    ``` nonum
    appName=Baby Registry
    appId=okta-baby-registry.webapp.node.okta-hosted-login
    appPort=3002
    appVersion=001
    certificate=/opt/bitnami/letsencrypt/certificates/hagenhaus.com.crt
    dbConnectionLimit=10
    dbDatabase=baby_registry_okta
    dbHost=localhost
    dbPassword=k8!0mG%fXw9%v
    dbUser=root
    https=true
    logLevel=info
    oktaAppBaseUrl=https://hagenhaus.com:3002
    oktaApptoken=000qzzUCW34R6zuPmva053J4svjw7OpxwYuVR6xCLl
    oktaClientId=0oax9rzfjnkt2jljp0h7
    oktaClientSecret=eI3PCSiKAq42CrJsvu5socPyYGrWXHf31ChRSxyE
    oktaDomainName=oietiger429.oktapreview.com
    oktaEventPwd=PeaceOnEarth4All
    oktaIssuer=https://oietiger429.oktapreview.com/oauth2/default
    oktaScope=openid profile email address
    privateKey=/opt/bitnami/letsencrypt/certificates/hagenhaus.com.key
    srvName=baby-registry
    ```

1. Start the server:

    ``` nonum
    npm start server
    ```

    These commands are also helpful:

    ``` nonum
    npm start --prefix webapp/node/base-app server
    forever -o output.log -e error.log --minUptime 1000ms --spinSleepTime 1000ms start server.js
    ```

1. Browse to `http://localhost:8080` or `http://hagenhaus.com:3002`.

## Recreate from base

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="row mt-3 mb-4"><div class="col-12 col-md-10 col-lg-8"><img src="widget-app-journey.png"></div></div>

### Duplicate base-app

1. Make a copy of the *base-app* directory. Rename the new directory *my-widget-app*.

1. Modify *package.json*:

    ``` nonum
    "name": "my-widget-app"
    ```

1. Modify *.env*:

    ``` nonum
    appId=baby-registry.webapp.node.my-widget-app
    appVersion=001
    ```

1. Run the app. Verify that the footer contains the new id and version.

    ``` nonum
    npm run server
    ```

### Use Okta sign in

1. Install [express-session](https://www.npmjs.com/package/express-session).

1. Modify *server.js*:

    ``` nonum
    const session = require('express-session')
    app.use(session({ secret: 'myphrase', resave: true, saveUninitialized: false }))
    ```

1. Install [Okta NodeJS OIDC Middleware](https://www.npmjs.com/package/@okta/oidc-middleware).

1. Create *okta.js*:

    ``` nonum
    const { ExpressOIDC } = require('@okta/oidc-middleware')
    exports.oidc = new ExpressOIDC({
      issuer: process.env.oktaIssuer,
      client_id: process.env.oktaClientId,
      client_secret: process.env.oktaClientSecret,
      appBaseUrl: process.env.oktaAppBaseUrl,
      scope: process.env.oktaScope,
      routes: {
        login: {
          path: '/sign-in'
        },
        logout: {
          path: '/sign-out'
        }
      }
    })
    ```

1. Modify *.env*:

    ``` nonum
    oktaAppBaseUrl=http://localhost:8080
    oktaClientId=0020characters000000
    oktaClientSecret=0040characters00000000000000000000000000
    oktaDomainName=dev-1234567.okta.com
    oktaIssuer=https://dev-1234567.okta.com/oauth2/default
    oktaScope=openid profile email
    ```

1. Modify *server.js*:

    ``` nonum
    const okta = require('./okta')

    app.use(okta.oidc.router)

    okta.oidc.on('ready', () => {
      app.listen(process.env.appPort, () => {
        logger.info({ subject: 'server', event: 'start', message: `port ${process.env.appPort}` })
      })
    })

    okta.oidc.on('error', err => {
      logger.error({ subject: 'server', event: 'okta-error', message: err })
    })
    ```

1. Delete the following:

    * `.get(controllers.getSignInPage)` in `routes.js`.
    * `.post(controllers.signIn)` in `routes.js`.
    * `exports.getSignInPage` in `controllers.js`.
    * `renderSignInPage` in `controllers.js`.
    * `exports.signIn` in `controllers.js`.
    * `sign-in.ejs`.

1. Re-run the app. Click *Sign in*. You should be routed to the Okta-hosted sign-in page.

1. Enter Username and Password, and click Sign in. You should be routed to the Baby Registry homepage.

### Use Okta sign out

1. Modify `getHomepage` to check for authentication state using Okta, and click Sign in again.

    ``` nonum
    exports.getHomePage = (req, res) => {
      renderHomePage(res, req.isAuthenticated())
    }
    ```

1. Modify `top.ejs` to handle signout:

    ``` nonum
    <!--<a class="nav-link<%= signedIn ? '' : ' d-none' %>" data-bs-toggle="modal" data-bs-target="#sign-out-modal" href="">Sign out</a>-->
    <form class="nav-link<%= signedIn ? '' : ' d-none' %>" style="padding:0;" method="POST" action="/sign-out">
      <button id="logout-button" class="btn btn-link" style="color:white; text-decoration: none;padding:0 .5rem;">Sign out</button>
    </form>
    ```

1. Delete the `signOut` function from `routes.js` and `controllers.js`.

1. Re-run the app. Then, Sign out. Try signing in and out several times.

### Display Okta profile

1. Replace `getAccountPage` in `controllers.js` with the following:

    ``` nonum
    exports.getAccountPage = (req, res) => {
      if (req.isAuthenticated()) {
        console.log(JSON.stringify(req.userContext, null, 2))
        let user = {}
        renderAccountPage(res, true, user)
      } else { res.redirect('/sign-in') }
    }
    ```

1. Re-run the app.

1. Check the output from the conditional. It should resemble the following:

    ``` nonum
    {
      "userinfo": {
        "sub": "20characters00000000",
        "name": "Sandy Beach",
        "locale": "en-US",
        "email": "sandy@acme.com",
        "preferred_username": "sandy@acme.com",
        "given_name": "Sandy",
        "family_name": "Beach",
        "zoneinfo": "America/Los_Angeles",
        "updated_at": 1611402719,
        "email_verified": true
      },
      "tokens": {
        "token_type": "Bearer",
        "expires_at": 1611413632,
        "access_token": "aBc.123.sTu",
        "scope": "profile email openid",
        "id_token": "aBc.456.xYz"
      }
    }
    ```

    The `userinfo.sub` value uniquely identifies the user *within* the Okta tennant.

1. Modify `getAccountPage` to use Okta profile data:

    ``` nonum
    exports.getAccountPage = (req, res) => {
      if (req.isAuthenticated()) {
        console.log(JSON.stringify(req.userContext, null, 2))
        let user = {
          firstName: req.userContext.userinfo.given_name,
          lastName: req.userContext.userinfo.family_name,
          email: req.userContext.userinfo.email
        }
        renderAccountPage(res, true, user)
      } else { res.redirect('/sign-in') }
    }
    ```
  
1. Re-run the app.

1. Check the Accounts page for Okta-sourced data. You should see `firstName`, `lastName`, and `email`.

1. Modify `.env`:

    ``` nonum
    oktaScope=openid profile email address
    ```

1. Re-run the app. 

1. Check the console.log output, and note the address object:

    ``` nonum
    {
      "userinfo": {
        "sub": "20characters00000000",
        "name": "Sandy Beach",
        "locale": "US",
        "email": "sandy@acme.com",
        "preferred_username": "sandy@acme.com",
        "given_name": "Sandy",
        "family_name": "Beach",
        "zoneinfo": "America/Los_Angeles",
        "updated_at": 1612557068,
        "email_verified": true,
        "address": {
          "street_address": "100 Main Street",
          "locality": "Belfast",
          "region": "Maine",
          "postal_code": "04915",
          "country": "US"
        }
      },
      "tokens": {
        "token_type": "Bearer",
        "expires_at": 1611413632,
        "access_token": "aBc.123.sTu",
        "scope": "profile email openid",
        "id_token": "aBc.456.xYz"
      }
    }
    ```

1. Modify `getAccountPage` to use address data:

    ``` nonum
    exports.getAccountPage = (req, res) => {
      if (req.isAuthenticated()) {
        console.log(JSON.stringify(req.userContext, null, 2))
        let user = {
          firstName: req.userContext.userinfo.given_name,
          lastName: req.userContext.userinfo.family_name,
          email: req.userContext.userinfo.email,
          street: req.userContext.userinfo.address.street_address,
          city: req.userContext.userinfo.address.locality,
          region: req.userContext.userinfo.address.region,
          country: req.userContext.userinfo.address.country,
          postalCode: req.userContext.userinfo.address.postal_code
        }
        renderAccountPage(res, true, user)
      } else { res.redirect('/sign-in') }
    }
    ```

### Update Okta profile

1. In the Okta Developer Console, create a token.

1. Add the token to the `.env` file:

    ``` nonum
    oktaApptoken=0123456789abcdefghijk0123456789abcdefghijk
    ```

1. Install [okta-sdk-nodejs](https://github.com/okta/okta-sdk-nodejs).

1. Add the following to `okta.js`:

    ``` nonum
    const okta = require('@okta/okta-sdk-nodejs')

    exports.client = new okta.Client({
      orgUrl: `https://${process.env.oktaDomainName}`,
      token: process.env.token
    })
    ```

1. Add the following to the top of `controllers.js`:

    ``` nonum
    const okta = require('./okta')
    ```

1. Replace `patchUser` with this:

    ``` nonum
    exports.patchUser = (req, res) => {
      if (req.isAuthenticated()) {
        okta.client.getUser(req.userContext.userinfo.sub)
          .then(oktaUser => {
            console.log(JSON.stringify(oktaUser, null, 2))
            res.status(204).end()
          })
          .catch(error => {
            console.error(error);
            res.status(401).send('Okta SDK Error')
          })
      } else { 
        res.status(401).send('Not signed in') 
      }
    }
    ```

1. Re-run the app, navigate to Accounts, and click the check for Street.

1. The output should resemble the following:

    ``` nonum
    User {
      id: '20characters00000000',
      status: 'ACTIVE',
      created: '2021-01-24T11:48:40.000Z',
      activated: '2021-01-24T11:48:41.000Z',
      statusChanged: '2021-01-24T11:48:41.000Z',
      lastLogin: '2021-02-02T10:48:10.000Z',
      lastUpdated: '2021-02-02T10:44:53.000Z',
      passwordChanged: '2021-01-24T11:48:41.000Z',
      type: UserType { id: 'otygj8guVvLl31Rjc5d5' },
      profile: UserProfile {
        firstName: 'Sandy',
        lastName: 'Beach',
        zipCode: '04915',
        mobilePhone: null,
        streetAddress: '100 Main Street',
        city: 'Belfast',
        countryCode: 'US',
        secondEmail: null,
        state: 'ME',
        login: 'sandy@acme.com',
        email: 'sandy@acme.com'
      },
      credentials: UserCredentials {
        password: PasswordCredential {},
        emails: [ [Object] ],
        provider: AuthenticationProvider { type: 'OKTA', name: 'OKTA' }
      },
      _links: {
        suspend: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000/lifecycle/suspend',
          method: 'POST'
        },
        schema: {
          href: 'https://dev-1234567.okta.com/api/v1/meta/schemas/user/oscgj8guVvLl31Rjc5d5'
        },
        resetPassword: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000/lifecycle/reset_password',
          method: 'POST'
        },
        forgotPassword: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000/credentials/forgot_password',
          method: 'POST'
        },
        expirePassword: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000/lifecycle/expire_password',
          method: 'POST'
        },
        changeRecoveryQuestion: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000/credentials/change_recovery_question',
          method: 'POST'
        },
        self: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000'
        },
        type: {
          href: 'https://dev-1234567.okta.com/api/v1/meta/types/user/otygj8guVvLl31Rjc5d5'
        },
        changePassword: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000/credentials/change_password',
          method: 'POST'
        },
        deactivate: {
          href: 'https://dev-1234567.okta.com/api/v1/users/20characters00000000/lifecycle/deactivate',
          method: 'POST'
        }
      }
    }
    ```

1. Modify the `patchUser` function:

    ``` nonum
    exports.patchUser = (req, res) => {
      if (req.isAuthenticated()) {
        okta.client.getUser(req.userContext.userinfo.sub)
          .then(oktaUser => {
            if ('firstName' in req.body) { oktaUser.profile.firstName = req.body.firstName }
            if ('lastName' in req.body) { oktaUser.profile.lastName = req.body.lastName }
            if ('email' in req.body) { oktaUser.profile.email = req.body.email }
            if ('street' in req.body) { oktaUser.profile.streetAddress = req.body.street }
            if ('city' in req.body) { oktaUser.profile.city = req.body.city }
            if ('region' in req.body) { oktaUser.profile.state = req.body.region }
            if ('country' in req.body) { oktaUser.profile.countryCode = req.body.country }
            if ('postalCode' in req.body) { oktaUser.profile.zipCode = req.body.postalCode }
            oktaUser.update()
            .then(() => res.status(204).end())
          })
          .catch(error => {
            console.error(error);
            res.status(401).send('Okta SDK Error')
          })
      } else { 
        res.status(401).send('Not signed in') 
      }
    }
    ```

1. Re-run the app. Modify Account fields. Verify in the Okta Developer Portal.

    Note that this approach reveals a problem. `getAccountPage` above uses `userContext` which sources user profile information from the cookie which does not change until the user signs out and signs back in. When `patchUser` updates user data via the SDK changing the user data in the Okta cloud. The cookie now has stale user info. One way to fix this is to change `getAccountPage` to use the SDK to get fresh user information rather than using the stale profile data in the cookie:

    ``` nonum
    exports.getAccountPage = (req, res) => {
      if (req.isAuthenticated()) {
        let user = {}
        okta.client.getUser(req.userContext.userinfo.sub)
          .then(oktaUser => {
            user.firstName = oktaUser.profile.firstName
            user.lastName = oktaUser.profile.lastName
            user.email = oktaUser.profile.email
            user.street = oktaUser.profile.streetAddress
            user.city = oktaUser.profile.city
            user.region = oktaUser.profile.state
            user.country = oktaUser.profile.countryCode
            user.postalCode  = oktaUser.profile.zipCode
            renderAccountPage(res, true, user)
          })
          .catch(error => {
            console.error(error);
            renderAccountPage(res, true, user)
          })
      } else { res.redirect('/sign-in') }
    }
    ```

1. Modify the `patchUserPassword` function:

    ``` nonum
    exports.patchUserPassword = (req, res) => {
      if (req.isAuthenticated()) {
        okta.client.getUser(req.userContext.userinfo.sub)
          .then(oktaUser => {
            if ('password' in req.body) { oktaUser.credentials.password = req.body.password }
            oktaUser.update()
            .then(() => res.status(204).end())
          })
          .catch(error => {
            console.error(error);
            res.status(401).send('Okta SDK Error')
          })
      } else { 
        res.status(401).send('Not signed in') 
      }
    }
    ```

### Delete account

1. Replace `deleteUser` in `controllers.js` with the following:

    ``` nonum
    exports.deleteUser = (req, res) => {
      if (req.isAuthenticated()) {
        okta.client.getUser(req.userContext.userinfo.sub)
          .then(oktaUser => {
            oktaUser.deactivate()
              .then(() => console.log('User deactivated'))
              .then(() => oktaUser.delete())
              .then(() => console.log('User deleted'))
              .then(() => req.session.destroy(() => {
                res.status(204).end()
              }))
          })
          .catch(error => {
            console.error(error);
            res.status(401).send('Okta SDK Error')
          })
      } else {
        res.status(401).send('Not signed in')
      }
    }
    ```

    Note that the Okta *deactivate/delete* workflow does not destroy the session cookie. So, even after deleting the user, if I don't explicitly delete the session cookie, then `req.isAuthenticated()` returns `true` even though the userId in the cookie, `sub`, is no longer valid because the user no longer exits. 

1. Re-run the app, navigate to Accounts, and delete the user. You may need to re-create the user a few times via the Okta Developer Dashboard as you experiment. You need to specify only first name, last name, email, and password. You don't need to specify address information each time you re-create the user.

1. Sign out.

### Create account

1. Click Sign in.

1. On the Okta login page, click Sign up.

1. Fill in the form using a real email address and click Register. You will receive the following email:

    <img src="activate-account.png" width=300 class="hh-shadow">

1. Click Activate. You will be redirected to the Baby Registry homepage. 

1. Click Account, and fill out profile fields.

### Modify database schema

This section needs to provide directions for creating a new database, `baby_registry_okta`, which is a copy of `baby_registry` with the following modifications to the schema and stored procedures:

1. Remove the `users` table.
1. Replace `int` with `varchar(128)` for `userId` in the `ownerships` and `purchases` tables. 
1. Removing reference to `users` table in joins in stored procedure `selectRegistry`, `selectRegistryByUserId`, `selectGifts`. 
1. Open `.env`, and change `dbDatabase` to `baby_registry_okta`.

Note that I will now have to get a list of the gifts (with `userId`), and then ask Okta for the name of each user. Also, I don't see an SDK function to which I can pass a list of user IDs and return user names. 

### Modify My registry page

1. In `getMyRegistryPage`, do the following:

    1. Remove `getAuthState`.
    1. Replace `authState.isAuthenticated` with `req.isAuthenticated()`.
    1. Add `let userId = req.userContext.userinfo.sub`.
    1. Add quotes around `userId` in the query.

    ``` nonum
    exports.getMyRegistryPage = (req, res) => {
      if (req.isAuthenticated()) {
        dbPool.getConnection((err, conn) => {
          if (err) {
            logDbConnError(err)
            renderMyRegistryPage(res, true, null, null)
          }
          else {
            const query = util.promisify(conn.query).bind(conn);
            (async () => {
              try {
                let userId = req.userContext.userinfo.sub
                const results = (await query(`call selectRegistryByUserId("${userId}")`))[0]
                if (results.length) {
                  let registry = results[0]
                  registry.link = `${getOrigin(req)}/find-a-registry?id=${registry.id}`
                  registry.gifts = (await query(`call selectGifts(${registry.id})`))[0]

                  for (let gift of registry.gifts) {
                    if (gift.buyerId) {
                      let oktaUser = await getOktaUser(gift.buyerId)
                      gift.buyerName = `${oktaUser.profile.firstName} ${oktaUser.profile.lastName}`
                    }
                  }

                  renderMyRegistryPage(res, true, registry, null)
                } else {
                  let products = (await query(`select * from products`))
                  renderMyRegistryPage(res, true, null, products)
                }
              }
              catch (error) {
                logDbQueryError(error)
                renderMyRegistryPage(res, true, null, null)
              }
              finally { conn.release() }
            })()
          }
        })
      } else {
        renderMyRegistryPage(res, false, null, null)
      }
    }
    ```

1. Re-run the app.

1. In `postRegistry`, do the following:

    1. Remove `getAuthState`.
    1. Replace `authState.isAuthenticated` with `req.isAuthenticated()`.
    1. Add `let userId = req.userContext.userinfo.sub`.
    1. Add quotes around `userId` in the query.

    ``` nonum
    exports.postRegistry = (req, res) => {
      if (req.isAuthenticated()) {
        dbPool.getConnection((err, conn) => {
          if (err) { logAndSendDbConnError(err, res) }
          else {
            const query = util.promisify(conn.query).bind(conn);
            (async () => {
              try {
                let userId = req.userContext.userinfo.sub
                const name = 'name' in req.body ? conn.escape(req.body.name) : null
                const dueDate = 'dueDate' in req.body ? conn.escape(req.body.dueDate) : null
                let results = (await query(`call insertRegistry(${name}, ${dueDate}, "${userId}")`))
                let registryId = results[0][0].registryId
                for (let productId of req.body.productIds) {
                  await query(`call insertGift(${registryId}, ${productId})`)
                }
                let message = JSON.parse(`{"userId":"${userId}","registryId":"${registryId}"}`)
                logger.info({ subject: 'user', event:  'create-registry', message: message})
                res.status(204).end()
              }
              catch (error) { logAndSendDbQueryError(error, res) }
              finally { conn.release() }
            })()
          }
        })
      } else {
        res.status(401).send('Not signed in') 
      }
    }
    ```

1. Re-run the app.

1. In `patchRegistry`, do the following:

    ``` nonum
    exports.patchRegistry = (req, res) => {
      if (req.isAuthenticated()) {
        dbPool.getConnection((err, conn) => {
          if (err) { logAndSendDbConnError(err, res) }
          else {
            const name = 'name' in req.body ? conn.escape(req.body.name) : null
            const dueDate = 'dueDate' in req.body ? conn.escape(req.body.dueDate) : null
            const state = 'state' in req.body ? conn.escape(req.body.state) : null
            const proc = `call updateRegistry(${req.params.id},${name},${dueDate},${state})`
            conn.query(proc, (error, results, fields) => {
              conn.release()
              if (error) { logAndSendDbQueryError(error, res) }
              else { 
                let userId = req.userContext.userinfo.sub
                let message = JSON.parse(`{"userId":"${userId}"}`)
                if (name) { message.name = req.body.name }
                if (dueDate) { message.dueDate = req.body.dueDate }
                if (state) { message.state = req.body.state }
                logger.info({ subject: 'user', event:  'update-registry', message: message })
                res.status(204).end() 
              }
            })
          }
        })
    } else { 
        res.status(401).send('Not signed in') 
      }
    }
    ```

1. Re-run the app.

1. Test by deactivating/activating and modifying registry name and due date.

1. In `deleteRegistry`, do the following:

    ``` nonum
    exports.deleteRegistry = (req, res) => {
      if (req.isAuthenticated()) {
        dbPool.getConnection((err, conn) => {
          if (err) { logAndSendDbConnError(err, res) }
          else {
            const proc = `call deleteRegistry(${req.params.id})`
            conn.query(proc, (error, results, fields) => {
              conn.release()
              if (error) { logAndSendDbQueryError(error, res) }
              else {
                let userId = req.userContext.userinfo.sub
                let message = JSON.parse(`{"userId":"${userId}","registryId":"${req.params.id}"}`)
                logger.info({ subject: 'user', event: 'delete-registry', message: message })
                res.status(204).end()
              }
            })
          }
        })
      } else {
        res.status(401).send('Not signed in')
      }
    }
    ```

### Modify Find a registry page

1. In `getFindARegistryPage`, do the following:

    ``` nonum
    exports.getFindARegistryPage = (req, res) => {
      if (req.isAuthenticated()) {
        const registryId = ('id' in req.query) ? req.query.id : null
        if (registryId) {
          dbPool.getConnection((err, conn) => {
            if (err) {
              logDbConnError(err)
              renderFindARegistryPage(res, true, null)
            }
            else {
              const query = util.promisify(conn.query).bind(conn);
              (async () => {
                try {
                  const results = (await query(`call selectRegistry(${registryId})`))[0]
                  if (results.length) {
                    let registry = results[0]

                    registry.gifts = (await query(`call selectGifts(${registry.id})`))[0]

                    for (let gift of registry.gifts) {
                      if (gift.buyerId) {
                        let oktaUser = await getOktaUser(gift.buyerId)
                        gift.buyerName = `${oktaUser.profile.firstName} ${oktaUser.profile.lastName}`
                      }
                    }

                    okta.client.getUser(registry.ownerId)
                      .then(oktaUser => {
                        registry.ownerName = `${oktaUser.profile.firstName} ${oktaUser.profile.lastName}`
                        renderFindARegistryPage(res, true, registry)
                      })
                      .catch(error => {
                        console.error(error)
                      })

                  } else { renderFindARegistryPage(res, true, null) }
                }
                catch (error) {
                  logDbQueryError(error)
                  renderFindARegistryPage(res, true, null)
                }
                finally { conn.release() }
              })()
            }
          })
        } else { renderFindARegistryPage(res, true, null) }
      } else { renderFindARegistryPage(res, false, null) }
    }
    ```

1. Re-run the app.

1. Test by adding `?id=1` to the url. 

1. In `getRegistries`, do the following:

    ``` nonum
    exports.getRegistries = (req, res) => {
      if (req.isAuthenticated()) {
        dbPool.getConnection((err, conn) => {
          if (err) { logAndSendDbConnError(err, res) }
          else {
            const searchString = 'searchString' in req.query ? conn.escape(req.query.searchString) : ''
            const proc = `call selectRegistries(${searchString}, 5)`
            conn.query(proc, (error, results, fields) => {
              conn.release()
              if (error) { logAndSendDbQueryError(error, res) }
              else { res.status(200).send(results[0]) }
            })
          }
        })
      } else {
        res.status(401).send('Not signed in')
      }
    }
    ```
1. In `postPurchase`, do the following:

    ``` nonum
    exports.postPurchase = (req, res) => {
      if (req.isAuthenticated()) {
        const giftId = 'giftId' in req.body ? req.body.giftId : null
        dbPool.getConnection((err, conn) => {
          if (err) { logAndSendDbConnError(err, res) }
          else {
            const query = util.promisify(conn.query).bind(conn);
            (async () => {
              try {
                let userId = req.userContext.userinfo.sub
                let results = await query(`call insertPurchase("${userId}", ${giftId})`)
                let purchaseId = results[0][0].purchaseId
                let user = {
                  firstName: req.userContext.userinfo.given_name,
                  lastName: req.userContext.userinfo.family_name
                } 
                let message = JSON.parse(`{"purchaseId":"${purchaseId}"}`)
                logger.info({ subject: 'user', event:  'purchase-gift', message: message})
                res.status(201).send(user)
              }
              catch (error) { logAndSendDbQueryError(error, res) }
              finally { conn.release() }
            })()
          }
        })
      } else {
        res.status(401).send('Not signed in') 
      }
    }
    ```

1. Remove `AuthState` and `getAuthState` and associated. 

### Receive and log Okta events

To receive events from the Okta Cloud, your app needs to be able to listen for `GET` and `POST` operations. 

1. See [How to run on HTTPS](00000213#how-to-run-on-https) to re-deploy your app with https/

1. Configure a hook in the Okta Admin Console.

1. Add the following to `routes.js`:

    ``` nonum
    app.route('/api/v1/events')
      .get(controllers.getEventVerification)
      .post(controllers.postEvent)
    ```

1. Add the following to `controllers.js`:

    ``` nonum
    exports.getEventVerification = function(req, res) {
      res.status(200).send({'verification': req.headers['x-okta-verification-challenge']})
    }

    exports.postEvent = function (req, res) {
      const { oktaeventpwd } = req.headers
      if (typeof oktaeventpwd !== 'undefined' && oktaeventpwd === process.env.oktaEventPwd) {
        for (let event of req.body.data.events) {
          let message = JSON.parse(`{"userId":"${event.actor.id}","email":"${event.actor.alternateId}"}`)
          switch (event.eventType) {
            case 'user.session.start':
              logger.info({ subject: 'user', event: 'sign-in', message: message })
              break

            case 'user.session.end':
              logger.info({ subject: 'user', event: 'sign-out', message: message })
              break

            case 'user.lifecycle.create':
              logger.info({ subject: 'user', event: 'create-account', message: message })
              break;

            case 'user.lifecycle.delete.initiated':
              logger.info({ subject: 'user', event: 'delete-account', message: message })
              break

            default:
              console.log(event.eventType)
          }
        }
        res.status(200).end()
      } else {
        console.log('Received Okta event with incorrect password.')
        res.status(422).end()
      }
    }
    ```

1. Check `combined.log`:

    ``` nonum
    {"subject":"user","event":"create-account","message":{"userId":"20characters00000000","email":"sandy@acme.com"},"level":"info","timestamp":"2021-02-11T10:48:00.000Z"}
    {"subject":"user","event":"sign-in","message":{"userId":"20characters00000000","email":"sandy@acme.com"},"level":"info","timestamp":"2021-02-11T10:49:00.000Z"}
    {"subject":"user","event":"sign-out","message":{"userId":"20characters00000000","email":"sandy@acme.com"},"level":"info","timestamp":"2021-02-11T10:50:00.000Z"}
    {"subject":"user","event":"delete-account","message":{"userId":"20characters00000000","email":"sandy@acme.com"},"level":"info","timestamp":"2021-02-11T10:51:00.000Z"}
    ```

Here is a complete event:

``` nonum
{
  "eventType": "com.okta.event_hook",
  "eventTypeVersion": "1.0",
  "cloudEventsVersion": "0.1",
  "source": "https://dev-1879913.okta.com/api/v1/eventHooks/who3opefzT807h0fK5d6",
  "eventId": "70738f0b-17bf-477c-88c6-71bc752fd6f9",
  "data": {
    "events": [
      {
        "uuid": "1774806f-6c4b-11eb-803d-5907b4615b10",
        "published": "2021-02-11T09:25:33.679Z",
        "eventType": "user.session.start",
        "version": "0",
        "displayMessage": "User login to Okta",
        "severity": "INFO",
        "client": {
          "userAgent": {
            "rawUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
            "os": "Mac OS X",
            "browser": "CHROME"
          },
          "zone": "null",
          "device": "Computer",
          "ipAddress": "67.255.234.73",
          "geographicalContext": {
            "city": "Newport",
            "state": "Maine",
            "country": "United States",
            "postalCode": "04953",
            "geolocation": {
              "lat": 44.841,
              "lon": -69.2721
            }
          },
          "ipChain": [
            {
              "ip": "67.255.234.73",
              "geographicalContext": {
                "city": "Newport",
                "state": "Maine",
                "country": "United States",
                "postalCode": "04953",
                "geolocation": {
                  "lat": 44.841,
                  "lon": -69.2721
                }
              },
              "version": "V4"
            }
          ]
        },
        "actor": {
          "id": "00u5d0u5mS1iSQ2sE5d6",
          "type": "User",
          "alternateId": "sandy@acme.com",
          "displayName": "Sandy Beach"
        },
        "outcome": {
          "result": "SUCCESS"
        },
        "transaction": {
          "type": "WEB",
          "id": "YCT4DWh70-gkjXaDJWsJ6gAAAMs",
          "detail": {}
        },
        "debugContext": {
          "debugData": {
            "deviceFingerprint": "92a4b527d0fe1b8747729b8d6126c6e3",
            "requestId": "YCT4DWh70-gkjXaDJWsJ6gAAAMs",
            "origin": "https://dev-1879913.okta.com",
            "threatSuspected": "false",
            "requestUri": "/api/v1/authn/factors/password/verify",
            "targetEventHookIds": "who3opefzT807h0fK5d6",
            "url": "/api/v1/authn/factors/password/verify?rememberDevice=false"
          }
        },
        "legacyEventType": "core.user_auth.login_success",
        "authenticationContext": {
          "authenticationStep": 0,
          "externalSessionId": "102avo4ximjQYSGQmzVr2TI9Q"
        },
        "securityContext": {
          "asNumber": 11351,
          "asOrg": "charter communications inc",
          "isp": "charter communications inc",
          "domain": "rr.com",
          "isProxy": false
        }
      }
    ]
  },
  "eventTime": "2021-02-11T09:25:44.913Z",
  "contentType": "application/json"
}
```