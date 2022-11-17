# Reporters

# reportFieldDefs

``` nonum
const dataList = new HHDataList({
  reportFieldDefs: {
    function: (fieldDefs) => { console.log(JSON.stringify(fieldDefs, null, 2)); },
    hasUI: true
  },
});
```

# reportTheme

``` nonum
const dataList = new HHDataList({
  reportTheme: {
    function: (theme) => { 
      const t1 = JSON.stringify(theme, null, 2);
      const t2 = t1.replace(/"([^"]+)":/g, '$1:');
      const t3 = t2.replace(/"/g, "'");      
      console.log(t3);
    },
    hasUI: true
  },
});
```
