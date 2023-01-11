# queryParams

<table class="options-table"><tr><th>Optional, but recommended</th></tr></table>

The `queryParams` option 

>Note to self: Explain how fields works with getRecords and getRecord. 

# Examples

## Example 1

This example shows the default values for this option.

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', default: null },
    filter: { name: 'filter', none: null, default: null, placeholder: '' },
    order: { name: 'order', default: null, placeholder: '' },
    page: { name: 'page' },
    limit: { name: 'limit', choices: [5, 10, 20, 50, 100], default: 5, hasTool: true, showTool: false, toolLabel: 'Limit' }
  },
});
```

* Default for `queryParams.filter.default` is `queryParams.filter.none`.
* Default for `queryParams.offset.value` is `0`.
* Default for `queryParams.limit.default` is `queryParams.limit.choices[0]` 

## Example 2

[Click to generate the following request in another tab.](https://hagenhaus.com:3002/api/baseball/v1/players?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear&filter=namelast%20is%20not%20null&order=birthyear%20desc&page=2&limit=3)

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players
  ?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear
  &filter=namelast%20is%20not%20null
  &order=birthyear%20desc
  &page=2
  &limit=3
```

Response:

``` nonum

{
  "metadata": {
    "numTotalRecords": 19878,
    "numFilteredRecords": 19878,
    "numResponseRecords": 3,
    "page": 2,
    "limit": 3,
    "numTotalPages": 6626,
    "firstItemOnPage": 4
  },
  "records": [
    {
      "playerID": "munozan01",
      "nameFirst": "Andres",
      "nameLast": "Munoz",
      "birthYear": 1999
    },
    {
      "playerID": "tatisfe02",
      "nameFirst": "Fernando",
      "nameLast": "Tatis",
      "birthYear": 1999
    },
    {
      "playerID": "sotoju01",
      "nameFirst": "Juan",
      "nameLast": "Soto",
      "birthYear": 1998
    }
  ]
}
```

## Example 3

[Click to generate the following request in another tab.](https://hagenhaus.com:3002/api/baseball/v1/players/luciael01?fields=nameFirst%2CnameLast%2CbirthDay%2CbirthMonth%2CbirthYear%2CbirthCity%2CbirthState%2CbirthCountry%2Cweight%2Cheight%2Cbats%2Cthrows%2CplayerID)

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players/luciael01?fields=nameFirst%2CnameLast%2CbirthDay%2CbirthMonth%2CbirthYear%2CbirthCity%2CbirthState%2CbirthCountry%2Cweight%2Cheight%2Cbats%2Cthrows%2CplayerID
```

Response:

``` nonum
{
  "nameFirst": "Elvis",
  "nameLast": "Luciano",
  "birthDay": 15,
  "birthMonth": 2,
  "birthYear": 2000,
  "birthCity": "Boca Chica",
  "birthState": "Santo Domingo",
  "birthCountry": "D.R.",
  "weight": 200,
  "height": 75,
  "bats": "R",
  "throws": "R",
  "playerID": "luciael01"
}
```