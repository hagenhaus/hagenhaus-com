# Guide

# How to use field.specialty

## type: none

<p><img src="field-specialty-none.png" class="img-fluid d-block" width=1000 loading="lazy"></p>

## type: text

<p><img src="field-specialty-text.png" class="img-fluid d-block" width=1000 loading="lazy"></p>

## type: link

Specifying *field.specialty.type: 'link'* tells HHDataList to build *input* element 

The *link* specialty type requires the data type (returned from the *transform* function) to be an object with a *url* property and a *title* property:

``` nonum
{ 
  url: "https://domain.com/some/path", 
  title: "Some title"
}
```

<p><img src="field-specialty-link.png" class="img-fluid d-block" width=1000 loading="lazy"></p>

## type: key

