---
hasOtp: false
---

# Notes

``` nonum
  static buildThemeFromPalette(palette, newThemeName, overrides) {
    let p = HHDataList002.getGlobalPalette();
    for (let i = 1; i <= 6; i++) {
      if (`color${i}` in palette) {
        p[`color${i}`] = palette[`color${i}`];
      }
    }

    let theme = {};
    if (newThemeName && !HHDataList002.hasTheme(newThemeName)) {
      theme.name = newThemeName;
    } else {
      theme.name = `Theme-${new Date().toISOString()}`;
    }

    overrides = overrides ? overrides : {};
    HHDataList002.mapPaletteToTheme(theme, p, overrides);
    return theme;
  }
```

# Records Are Small

|State|Selector|Element|
|-|-|-|
|x|`div.hh-records-are-expanded-widget div.input-group`|`<div class="input-group input-group-sm">`|
|x|`div.hh-record-limit-per-page-widget div.input-group`|`<div class="input-group input-group-sm">`|
|x|`div.hh-record-content-mode-widget div.input-group`|`<div class="input-group input-group-sm">`|
|x|`div.hh-record-processing-mode-widget div.input-group`|`<div class="input-group input-group-sm">`|
|x|`div.hh-theme-name-widget div.input-group`|`<div class="input-group input-group-sm">`|
|x|`div.hh-controls-are-small-widget div.input-group`|`<div class="input-group input-group-sm">`|
|x|`div.hh-filter-group`|`<div class="input-group hh-filter-group input-group-sm">`|
|x|`div.hh-order-group`|`<div class="input-group hh-order-group input-group-sm">`|
|x|`div.hh-paginator`|`<div class="btn-group hh-paginator btn-group-sm">`|
|x|`div.hh-record-field div.hh-data-row div.hh-col-data input`|`<input type="text" class="form-control record form-control-sm">`|
|x|`div.hh-new-record form.hh-new-record-form input`|`<input type="text" class="form-control record form-control-sm">`|
|x|`div.hh-record-field div.hh-data-row div.hh-col-data a`|`<a class="form-control link form-control-sm">`|
|x|`div.hh-record-field div.hh-data-row div.hh-col-data textarea`|`<textarea class="form-control form-control-sm">`|
|x|`div.hh-record-field div.hh-data-row div.hh-col-data select`|`<select class="form-select form-select-sm">`|
|x|`div.hh-record-field div.hh-data-row div.hh-col-btn button`|`<button class="btn btn-sm">`|
|x|`div.hh-new-record form.hh-new-record-form button`|`<button class="btn btn-sm">`|

|State|Bootstrap Class|HH Class|
|-|-|-|
|x|`input-group-sm`|`hh-input-group-smallable`|
|x|`btn-group-sm`|`hh-btn-group-smallable`|
|x|`form-control-sm`|`hh-form-control-smallable`|
|x|`form-select-sm`|`hh-form-select-smallable`|
|x|`btn-sm`|`hh-btn-smallable`|

``` html nonum
<div class="input-group input-group-sm">
<div class="btn-group btn-group-sm">
<a class="form-control form-control-sm">
<input class="form-control form-control-sm" type="text">
<select class="form-select form-select-sm">
<button class="btn btn-sm">
```

# queryParams option

Deal with ` this.queryParams` and `this.paginator`.

``` js nonum
{
  "fields": {
    "name": "fields",
    "default": "*",
    "value": "*"
  },
  "filter": {
    "name": "filter",
    "none": "",
    "default": "playerid like \"xyz%\"",
    "value": "playerid like \"xyz%\"",
    "placeholder": "birthyear is not null and namefirst like \"John\""
  },
  "order": {
    "name": "order",
    "default": "birthyear desc",
    "value": "birthyear desc",
    "placeholder": "birthyear desc, namefirst asc"
  },
  "page": {
    "name": "page",
    "value": 1
  },
  "limit": {
    "name": "limit",
    "choices": [ 1, 5, 10, 15, 20, 50, 100 ],
    "default": 5,
    "value": 5
  }
}
```

Associate each `queryParams` property with HHDataList subcomponents:

1. fields
    1. No Fields Tab because you cannot pass fields in query.
    1. No New Tab because you don't know which fields to use in a create.
1. filter
1. order
1. page
1. limit

# Authors field

1. The original Authors value looks like this:

    ``` json nonum
    [
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL25931A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL6074641A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL665131A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL22193A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL7923749A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL7115228A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL7462354A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL8044323A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL1541609A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL8100953A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL9756125A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL8348918A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL7295830A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL889713A"
        }
      },
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL7642728A"
        }
      }
    ]
    ```

1. Extract author.key from each item. Put the author.key(s) in another array.

1. Build a url like this: `https://openlibrary.org/authors/OL25931A.json`.

1. Invoke a GET with the url which returns the following:

    ``` json nonum
    {
      "bio": {
        "type": "/type/text",
        "value": "Hans Christian Andersen was born in Odense, Denmark, to a father who claimed to be related to nobility. After school, he worked as a weaver's apprentice and as a tailor's assistant. At 14, he moved to Copenhagen to be an actor, and was accepted into the Royal Danish Theatre. His career ended when his voice changed, and he decided to become a writer. He published his first story, The Ghost at Palnatoke's Grave, in 1822. An acquaintance paid all expenses to send him to grammar school in Slagelse. He also attended school at Elsinore until 1827. He later admitted that his school years were the darkest and bitterest of his life.\r\n\r\nAfter school, Andersen resumed writing. In 1829, he started to see his first successes, publishing a short story, \"A Journey on Foot from Holmen's Canal to the East Point of Amager\", and a collection of poems. In 1833 he received a traveling grant from the King and set out to travel through Europe. He published his first novel, The Improvisatore, in 1835. He also published the first set of Fairy Tales, following up with more stories in 1836 and 1837. Although they were not initially successful, they have become his best-known works. He wrote a well-received poem, Jeg er en Skandinav, which celebrated Scandinavism, in 1839.\r\n\r\nIn 1857, following a visit to Charles Dickens in England, Andersen met Danish actor Lauritz Eckardt and Danish ballet dancer Harald Scharff in Paris. In 1860, he met them again in Bavaria, and the three of them spent a week in Munich together. Anderson fell in love with Scharff, and started corresponding with him when Scharff and Eckardt left Munich. They were united when Andersen returned to Copenhagen in 1862. Their affair lasted for over a year before it was ended by Scharff, and Andersen did not have another serious relationship.\r\n\r\nIn 1872, Andersen was injured in a fall, and he died of his injuries in 1875."
      },
      "location": "Copenhagen",
      "birth_date": "2 April 1805",
      "entity_type": "Person",
      "key": "/authors/OL25931A",
      "type": {
        "key": "/type/author"
      },
      "alternate_names": [
        "Hans Christian ANDERSEN",
        "Hans Christian Andersen",
        "ANDERSEN, H.C. (HANS CHRISTIAN), 1805-1875.",
        "HANS CHRISTIAN ANDERSEN",
        "ILLUS. PAUL HUNT HANS CHRISTIAN ANDERSEN",
        "Hans Christian, Andersen",
        "Hans christian Andersen",
        "Christian Hans Andersen",
        "Hans, Christian Andersen",
        "Hans-Christian Andersen",
        "Hans Andersen Christian",
        "Andersen Hans Christian.",
        "H. C. (Hans Christian) Andersen",
        "Andersen, H. C. (Hans Christian), 1805-1875.",
        "Hans Christian Anderson",
        "Hans Christian Andersen worth",
        "Trans. Erik Christian Haugaard Hans Christian Andersen",
        "The Brothers Grimm/ Hans Christian Andersen",
        "Hans Christain Andersen",
        "H. C. Andersen",
        "H.C Andersen",
        "H. C Andersen",
        "Andersen, H.C. 1805-1875.",
        "Hans C Andersen",
        "Andersen Hans C.",
        "Hans C. Andersen",
        "Andersen Hans C",
        "Andersen-H.C",
        "H.c Andersen",
        "Andersen,Hans Christian \u30a2\u30f3\u30c7\u30eb\u30bb\u30f3,\u30cf\u30f3\u30b9\u30fb\u30af\u30ea\u30b9\u30c1\u30e3\u30f3 (1805-1875)",
        "(dan) An, tu sheng (Andersen, Hans Christian",
        "Andersen, H. C. (Hans Christian), 1805-1875",
        "Hans Christian Andersen (1805-1875)",
        "M. Hans Christian Andersen",
        "andersen hans christian",
        "ANDERSEN HANS,CHRISTIAN",
        "Mr. Hans Christian Andersen",
        "Andersen Hans Christian",
        "(dan) An, Tusheng (Andersen, Hans Christian",
        "Hans Christian Andersen (author)",
        "An tu sheng Andersen, Hans Christian",
        "Hans Christian Andersen (Antony Groves-Raines Drawings)",
        "Hans Christian Andersen e Irmaos Grimm",
        "Hans Christian Andersen e outros",
        "CLAUDE PRUNIER HANS CHRISTIAN ANDERSEN",
        "H C (Hans Christian) 180 Andersen",
        "Andersen, H. C. (Hans Christian), H. C. (Hans Christian)"
      ],
      "wikipedia": "http://en.wikipedia.org/wiki/Hans_Christian_Andersen",
      "death_date": "4 August 1875",
      "photos": [
        6094090,
        5547166
      ],
      "personal_name": "Hans Christian Andersen",
      "links": [
        {
          "url": "http://runeberg.org/authors/andersen.html",
          "type": {
            "key": "/type/link"
          },
          "title": "Project Runeberg"
        }
      ],
      "remote_ids": {
        "viaf": "4925902",
        "wikidata": "Q5673",
        "isni": "0000000121184353"
      },
      "title": "Hans Christian.",
      "name": "Hans Christian Andersen",
      "source_records": [
        "amazon:1503318532",
        "ia:lapetitesireneet0000ande_w9p2",
        "amazon:2081710129",
        "amazon:9870605516",
        "amazon:2815938162",
        "amazon:153965348X",
        "amazon:8520944698",
        "amazon:8567566177",
        "amazon:2278054473",
        "amazon:1605809551",
        "amazon:1015382096",
        "bwb:9798763264562"
      ],
      "latest_revision": 18,
      "revision": 18,
      "created": {
        "type": "/type/datetime",
        "value": "2008-04-01T03:28:50.625462"
      },
      "last_modified": {
        "type": "/type/datetime",
        "value": "2022-09-27T22:28:40.541835"
      }
    }
    ```

1. Extract record.name(s).
1. Put each record.name in an option element.
1. Create a select element.
1. Add the options to the select.

# Functionality

This list shows all functionality. 

1. Tabs Row
    1. Home Tab
        1. Description
    1. Search Tab
        1. Filter
        1. Order
        1. Description
    1. Fields Tab
        1. All Fields checkbox
        1. Fields checkboxes
        1. Description
    1. New Tab
        1. createRecord (Does `POST` return new record fields for display?)
        1. Description
    1. Config Tab
        1. recordsAreNumbered
        1. showTabDescriptions
        1. Description
1. Counters Row
    1. numPages
    1. numResponseRecords
    1. numMatchedRecords
    1. numTotalRecords
1. Navigation Row
    1. Navigator
    1. Limiter
    1. Expander
1. Records Row
    1. Expand/collapse record
    1. Refresh Record
    1. Edit Record (`PUT` or `PATCH`)
    1. Delete Record

The functionality that the user sees is based on the following:

1. API capability.
1. Options describing the API capability which turn on HHDataList features.
1. Options overriding options describing the API capability which turn off HHDataList functionality.

Certain values should stay in options and be used during construction without being saved in the class instance.

# getRecord

``` nonum
createCreatedForm(options)
  findBtn.addEventListener('click', (event) => {
    (async () => {
      const queryString = this.toQueryStr(this.queryParams, 'getRecord');
      let res = await this.getRecord(newId, queryString);
      let recordEl = await this.createRecordElement(this.responseHelper.record(res), 0);
    })();
  });
 
async createRecordElement(record, i)
  this.setFields();
  const queryString = this.toQueryStr(this.queryParams, 'getRecord');
  let res = await this.getRecord(record[this.recordIdField], queryString);
 
updateCreatedRecord
  (async () => {
    this.setFields();
    const queryString = this.toQueryStr(this.queryParams, 'getRecord');
    let res = await this.getRecord(details.id.substring(4), queryString);
  })();
 
getAndDisplayRecord(id)
  this.setFields();
  const queryString = this.toQueryStr(this.queryParams, 'getRecord');
  (async () => {
    this.displayRecord(await this.getRecord(id, queryString), id);
  })();
 
 async getRecord(id, queryString)
   return (await axios({ url: `${this.urls.getRecord(id)}?${queryString}`, method: 'get' }));
   return (await axios({ url: `${this.urls.getRecord(id)}`, method: 'get' }));
```

# displayRecord

