# recordIdField

<table class="options-table"><tr><th>Required unless the value is "<code>id</code>"</th></tr></table>

The `recordIdField` option specifies (for an API response record) the name of the unique identifier field. In the following response record, for example, the `recordIdField` value is `key`:

``` js nonum
{
  key: '/authors/OL24638A',
  name: 'Charles Dickens',
  birth_date: '7 February 1812',
  death_date: '9 June 1870',
  alternate_names: [
    'Charles John Huffam Dickens',
    '\u30c7\u30a3\u30b1\u30f3\u30ba,\u30c1\u30e3\u30fc\u30eb\u30ba',
    'Charles Dickens, Jr.',
    'Charles Culliford Boz Dickens',
    '(ying) Digengsi',
    '(ying) Di, geng si'
  ],
  wikipedia: 'http://en.wikipedia.org/wiki/Charles_Dickens'
}
```

# Examples

## Example 1

This example shows the default value for this option.

``` js nonum
new HHDataList({
  recordIdField: 'id',
});
```

## Example 2

This example shows a developer-specified value for this option.

``` js nonum
new HHDataList({
  recordIdField: 'key',
});
```