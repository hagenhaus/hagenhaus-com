# Options

The HHDataList constructor requires an argument of type object. This object is referred to as `options`. Each of its properties is an option consisting of a name and a value. Each value type is boolean, string, number, object, array, or function. Here is an example:
``` js nonum
new HHDataList({
  expand: { value: true, showTool: true },
  id: 'my-data-list',
  url: 'https://hagenhaus.com:3002/api/famous/v1/trees',
});
```

In the example above, the `options` argument consists of three properties: `expand`, `id`, and `url`. The types of the property values are object, string, and string respectively.

To get started with options, see the [Tutorial](/en/hhdatalist/v0.0.2/tutorial/). To learn about a specific option, click on the relevant link in the bookbar. 
