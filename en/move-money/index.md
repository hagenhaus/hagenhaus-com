# Move Money

# Account operations

## getAccountFields

``` nonum
const account = getAccountFields();
```

``` nonum
GET /account-fields
```

## createAccount

``` nonum
const account = createAccount();
```

``` nonum
POST /accounts
```

## getAccount

``` nonum
const account = getAccount(accountId);
```

``` nonum
GET /accounts/:accountId
```

## getAccounts

``` nonum
const accounts = getAccounts();
```

``` nonum
GET /accounts
```

## updateAccount

``` nonum
const account = updateAccount(accountId);
```

``` nonum
PATCH /accounts/:accountId
```

## deleteAccount

``` nonum
const account = deleteAccount(accountId);
```

``` nonum
DELETE /accounts/:accountId
```

# Transfer operations

## transfer

``` nonum
const transfer = transfer(amount, srcAccountId, dstAccountId);
```

``` nonum
POST /transfers
```

``` nonum
Request:
{
  "amount": "1200.00",
  "srcAccountId": "00000000-0000-0000-0000-000000000000",
  "dstAccountId": "00000000-0000-0000-0000-000000000000"
}
```

``` nonum
Response:
{
  "transferId": "00000000-0000-0000-0000-000000000000",
  "status": "intiated"
}
```

## getTransfer

``` nonum
const transfer = getTransfer(transferId);
```

## getTransfers

``` nonum
const transfer = getTransfers(search);
```

