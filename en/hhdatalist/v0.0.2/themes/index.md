# Themes

User perspective:

1. If I instantiate only one instance in my entire website, then defining the theme inside the constructor is easy and efficient.
1. If I instantiate multiple instances, and the themes are all different, then inside each constructor is easy and efficient.
1. If I instantiate multiple instances, and some or all themes are the same, then calling a static addTheme is easy and efficient. This includes setting my own default.

**Remember to make static variables private, and always use getters and setters.**

``` nonum

getDefaultTheme();
setDefaultTheme(themeName);
getThemes();
getTheme(themeName);
addTheme({ /* themeDef */ });

new HHDataList({

  // if none at all, then default.

  // This must be a string. If themeName is specified, then themeDef is ignored.
  themeName: 'dodger blue',

  themeDef: {

    // This must be a string. If not specified, then UTC: My Theme 2022-09-23T02:18:08Z. 
    name: 'My Silverberry',

    // This must be an object. It is optional. These override base/colors.
    properties: { 
      tabButtonColor: 'maroon'
    },

    // This must be a string. If base is specified, then colors are ignored.
    base: 'silverberry',

    // This must be an object. If {} or partial, then supplemented from defaultColors. 
    colors: {
      color1: '#ffffff',
      color2: '#fcf5e8',
      color3: '#f9ebd2',
      color4: '#f6e2bb',
      color5: '#e29d1d',
      color6: '#875e12'
    }

  }

});
```