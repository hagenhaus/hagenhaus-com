# Terminology

# Record parity

Record parity is a characteristic of a *getRecords* operation. If *recordParity* is *true* for a given *getRecords* operation, then the operation can return all the record properties for all records that the corresponding *getRecord* operation can for a single record. Here, for example, is the response data from a *getRecords* operation possessing record parity:

``` json nonum
{
  "records": [
    { /* any or all record properties */ },
    { /* any or all record properties */ },
    { /* any or all record properties */ },
    { /* any or all record properties */ },
    { /* any or all record properties */ }
  ]
}
```

And, here is the response data from the corresponding *getRecord* operation:

``` json nonum
{ /* any or all record properties */ }
```

HHDataList displays a page of expanded records differently depending on whether the underlying *getRecords* operation possesses record parity. If so, HHDataList, through a single call to *getRecords*, obtains all the data it needs to display a page of expanded records. If not, HHDataList calls *getRecords* to return an array of barebones records, and then it calls *getRecord* for each record in the array to return and display record properties.

# REST API

1. Representational State Transfer (REST)
1. Application Programming Interface (API)
1. A REST usually consists of several REST operations.
1. Not to be confused with a REST Operation

# REST Operation

A REST operation consists of a method (get, post, put, patch, delete) and an endpoint. 