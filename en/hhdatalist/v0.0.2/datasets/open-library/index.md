# Open Library

[Open Library](https://openlibrary.org/) is an initiative of the Internet Archive, a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. See the [Developer Center](https://openlibrary.org/developers/api), [Solr Reference Guide](https://solr.apache.org/guide/solr/latest/query-guide/query-syntax-and-parsers.html), and [Gitter](https://gitter.im/theopenlibrary/Lobby). Each section below explores one of the [Open Library APIs](https://openlibrary.org/developers/api).

# Books API

The Books API includes the following:

1. Works API
1. Editions & ISBN APIs both of which return the same response data
1. Books API Generic.

## Works API

GET https://openlibrary.org/works/OL45804W.json

``` nonum
authors
covers
created
description
key
last_modified
latest_revision
location
revision
subject_people
subject_places
subject_times
subjects
title
type
```

``` nonum
{
  "title": "Fantastic Mr Fox",
  "key": "/works/OL45804W",
  "authors": [
    {
      "author": {
        "key": "/authors/OL34184A"
      },
      "type": {
        "key": "/type/author_role"
      }
    }
  ],
  "type": {
    "key": "/type/work"
  },
  "description": "The main character of Fantastic Mr. Fox is an extremely clever anthropomorphized fox named Mr. Fox. He lives with his wife and four little foxes. In order to feed his family, he steals food from the cruel, brutish farmers named Boggis, Bunce, and Bean every night.\r\n\r\nFinally tired of being constantly outwitted by Mr. Fox, the farmers attempt to capture and kill him. The foxes escape in time by burrowing deep into the ground. The farmers decide to wait outside the hole for the foxes to emerge. Unable to leave the hole and steal food, Mr. Fox and his family begin to starve. Mr. Fox devises a plan to steal food from the farmers by tunneling into the ground and borrowing into the farmer's houses.\r\n\r\nAided by a friendly Badger, the animals bring the stolen food back and Mrs. Fox prepares a great celebratory banquet attended by the other starving animals and their families. Mr. Fox invites all the animals to live with him underground and says that he will provide food for them daily thanks to his underground passages. All the animals live happily and safely, while the farmers remain waiting outside in vain for Mr. Fox to show up.",
  "covers": [
    6498519,
    8904777,
    108274,
    233884,
    1119236,
    -1,
    10222599,
    10482837,
    3216657,
    10519563,
    10835922,
    10835924,
    10861366,
    10883671,
    8760472,
    12583098,
    10482548,
    10831929,
    10835926,
    12333895,
    12498647,
    7682784,
    12143357,
    12781739
  ],
  "subject_places": [
    "English countryside"
  ],
  "subjects": [
    "Animals",
    "Hunger",
    "Open Library Staff Picks",
    "Juvenile fiction",
    "Children's stories, English",
    "Foxes",
    "Fiction",
    "Zorros",
    "Ficci\u00f3n juvenil",
    "Tunnels",
    "Interviews",
    "Farmers",
    "Children's stories",
    "Rats",
    "Welsh Authors",
    "English Authors",
    "Thieves",
    "Tricksters",
    "Badgers",
    "Children's fiction",
    "Foxes, fiction",
    "Underground",
    "Renards",
    "Romans, nouvelles, etc. pour la jeunesse",
    "Children's literature",
    "Plays",
    "Children's plays",
    "Children's stories, Welsh",
    "Agriculteurs"
  ],
  "subject_people": [
    "Bean",
    "Boggis",
    "Bunce",
    "Mr Fox"
  ],
  "subject_times": [
    "20th Century"
  ],
  "location": "/works/OL45883W",
  "latest_revision": 7,
  "revision": 7,
  "created": {
    "type": "/type/datetime",
    "value": "2009-10-15T11:34:21.437031"
  },
  "last_modified": {
    "type": "/type/datetime",
    "value": "2022-09-09T18:10:28.009254"
  }
}
```

## Editions API & ISBN API

Both return the same data.

https://openlibrary.org/books/OL7353617M.json

https://openlibrary.org/isbn/9780140328721.json

``` nonum
authors
classifications
contributions
covers
created
first_sentence
identifiers
isbn_10
isbn_13
key
languages
last_modified
latest_revision
local_id
number_of_pages
ocaid
publish_date
publishers
revision
source_records
title
type
works
```

``` nonum
{
  "publishers": [
    "Puffin"
  ],
  "number_of_pages": 96,
  "isbn_10": [
    "0140328726"
  ],
  "covers": [
    8739161
  ],
  "key": "/books/OL7353617M",
  "authors": [
    {
      "key": "/authors/OL34184A"
    }
  ],
  "ocaid": "fantasticmrfoxpu00roal",
  "contributions": [
    "Tony Ross (Illustrator)"
  ],
  "languages": [
    {
      "key": "/languages/eng"
    }
  ],
  "classifications": {},
  "source_records": [
    "ia:fantasticmrfox00dahl_834",
    "marc:marc_openlibraries_sanfranciscopubliclibrary/sfpl_chq_2018_12_24_run02.mrc:85081404:4525"
  ],
  "title": "Fantastic Mr. Fox",
  "identifiers": {
    "goodreads": [
      "1507552"
    ],
    "librarything": [
      "6446"
    ]
  },
  "isbn_13": [
    "9780140328721"
  ],
  "local_id": [
    "urn:sfpl:31223064402481",
    "urn:sfpl:31223117624784",
    "urn:sfpl:31223113969183",
    "urn:sfpl:31223117624800",
    "urn:sfpl:31223113969225",
    "urn:sfpl:31223106484539",
    "urn:sfpl:31223117624792",
    "urn:sfpl:31223117624818",
    "urn:sfpl:31223117624768",
    "urn:sfpl:31223117624743",
    "urn:sfpl:31223113969209",
    "urn:sfpl:31223117624750",
    "urn:sfpl:31223117624727",
    "urn:sfpl:31223117624776",
    "urn:sfpl:31223117624719",
    "urn:sfpl:31223117624735",
    "urn:sfpl:31223113969241"
  ],
  "publish_date": "October 1, 1988",
  "works": [
    {
      "key": "/works/OL45804W"
    }
  ],
  "type": {
    "key": "/type/edition"
  },
  "first_sentence": {
    "type": "/type/text",
    "value": "And these two very old people are the father and mother of Mrs. Bucket."
  },
  "latest_revision": 15,
  "revision": 15,
  "created": {
    "type": "/type/datetime",
    "value": "2008-04-29T13:35:46.876380"
  },
  "last_modified": {
    "type": "/type/datetime",
    "value": "2022-09-09T18:06:59.014619"
  }
}
```

## Books API Generic

https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data

``` nonum
{
  "ISBN:9780140328721": {
    "url": "https://openlibrary.org/books/OL7353617M/Fantastic_Mr._Fox",
    "key": "/books/OL7353617M",
    "title": "Fantastic Mr. Fox",
    "authors": [
      {
        "url": "https://openlibrary.org/authors/OL34184A/Roald_Dahl",
        "name": "Roald Dahl"
      }
    ],
    "number_of_pages": 96,
    "identifiers": {
      "goodreads": [
        "1507552"
      ],
      "librarything": [
        "6446"
      ],
      "isbn_10": [
        "0140328726"
      ],
      "isbn_13": [
        "9780140328721"
      ],
      "openlibrary": [
        "OL7353617M"
      ]
    },
    "publishers": [
      {
        "name": "Puffin"
      }
    ],
    "publish_date": "October 1, 1988",
    "subjects": [
      {
        "name": "Animals",
        "url": "https://openlibrary.org/subjects/animals"
      },
      {
        "name": "Hunger",
        "url": "https://openlibrary.org/subjects/hunger"
      },
      {
        "name": "Open Library Staff Picks",
        "url": "https://openlibrary.org/subjects/open_library_staff_picks"
      },
      {
        "name": "Juvenile fiction",
        "url": "https://openlibrary.org/subjects/juvenile_fiction"
      },
      {
        "name": "Children's stories, English",
        "url": "https://openlibrary.org/subjects/children's_stories,_english"
      },
      {
        "name": "Foxes",
        "url": "https://openlibrary.org/subjects/foxes"
      },
      {
        "name": "Fiction",
        "url": "https://openlibrary.org/subjects/fiction"
      },
      {
        "name": "Zorros",
        "url": "https://openlibrary.org/subjects/zorros"
      },
      {
        "name": "Ficci\u00f3n juvenil",
        "url": "https://openlibrary.org/subjects/ficci\u00f3n_juvenil"
      },
      {
        "name": "Tunnels",
        "url": "https://openlibrary.org/subjects/tunnels"
      },
      {
        "name": "Interviews",
        "url": "https://openlibrary.org/subjects/interviews"
      },
      {
        "name": "Farmers",
        "url": "https://openlibrary.org/subjects/farmers"
      },
      {
        "name": "Children's stories",
        "url": "https://openlibrary.org/subjects/children's_stories"
      },
      {
        "name": "Rats",
        "url": "https://openlibrary.org/subjects/rats"
      },
      {
        "name": "Welsh Authors",
        "url": "https://openlibrary.org/subjects/welsh_authors"
      },
      {
        "name": "English Authors",
        "url": "https://openlibrary.org/subjects/english_authors"
      },
      {
        "name": "Thieves",
        "url": "https://openlibrary.org/subjects/thieves"
      },
      {
        "name": "Tricksters",
        "url": "https://openlibrary.org/subjects/tricksters"
      },
      {
        "name": "Badgers",
        "url": "https://openlibrary.org/subjects/badgers"
      },
      {
        "name": "Children's fiction",
        "url": "https://openlibrary.org/subjects/children's_fiction"
      },
      {
        "name": "Foxes, fiction",
        "url": "https://openlibrary.org/subjects/foxes,_fiction"
      },
      {
        "name": "Underground",
        "url": "https://openlibrary.org/subjects/underground"
      },
      {
        "name": "Renards",
        "url": "https://openlibrary.org/subjects/renards"
      },
      {
        "name": "Romans, nouvelles, etc. pour la jeunesse",
        "url": "https://openlibrary.org/subjects/romans,_nouvelles,_etc._pour_la_jeunesse"
      },
      {
        "name": "Children's literature",
        "url": "https://openlibrary.org/subjects/children's_literature"
      },
      {
        "name": "Plays",
        "url": "https://openlibrary.org/subjects/plays"
      },
      {
        "name": "Children's plays",
        "url": "https://openlibrary.org/subjects/children's_plays"
      },
      {
        "name": "Children's stories, Welsh",
        "url": "https://openlibrary.org/subjects/children's_stories,_welsh"
      },
      {
        "name": "Agriculteurs",
        "url": "https://openlibrary.org/subjects/agriculteurs"
      }
    ],
    "subject_places": [
      {
        "name": "English countryside",
        "url": "https://openlibrary.org/subjects/place:english_countryside"
      }
    ],
    "subject_people": [
      {
        "name": "Bean",
        "url": "https://openlibrary.org/subjects/person:bean"
      },
      {
        "name": "Boggis",
        "url": "https://openlibrary.org/subjects/person:boggis"
      },
      {
        "name": "Bunce",
        "url": "https://openlibrary.org/subjects/person:bunce"
      },
      {
        "name": "Mr Fox",
        "url": "https://openlibrary.org/subjects/person:mr_fox"
      }
    ],
    "subject_times": [
      {
        "name": "20th Century",
        "url": "https://openlibrary.org/subjects/time:20th_century"
      }
    ],
    "excerpts": [
      {
        "text": "And these two very old people are the father and mother of Mrs. Bucket.",
        "comment": "",
        "first_sentence": true
      }
    ],
    "ebooks": [
      {
        "preview_url": "https://archive.org/details/fantasticmrfoxpu00roal",
        "availability": "borrow",
        "formats": {},
        "borrow_url": "https://openlibrary.org/books/OL7353617M/Fantastic_Mr._Fox/borrow",
        "checkedout": false
      }
    ],
    "cover": {
      "small": "https://covers.openlibrary.org/b/id/8739161-S.jpg",
      "medium": "https://covers.openlibrary.org/b/id/8739161-M.jpg",
      "large": "https://covers.openlibrary.org/b/id/8739161-L.jpg"
    }
  }
}
```

# Authors API

## Authors

https://openlibrary.org/authors/OL34184A.json

``` nonum
alternate_names
bio
birth_date
created
death_date
key
last_modified
latest_revision
links
name
personal_name
photos
remote_ids
revision
source_records
type
```

``` nonum
{
  "remote_ids": {
    "wikidata": "Q25161",
    "isni": "0000000121468188",
    "viaf": "108159131"
  },
  "personal_name": "Dahl, Roald.",
  "bio": "Roald Dahl was a British novelist, short story writer, and screenwriter.\r\n\r\nBorn in north Cardiff, Wales, to Norwegian parents, Dahl served in the Royal Air Force during the Second World War, in which he became a flying ace and intelligence agent. He rose to prominence in the 1940s with works for both children and adults, and became one of the world's bestselling authors. His short stories are known for their unexpected endings, and his children's books for their unsentimental, often very dark humour. ([Source][1].)\r\n\r\n\r\n  [1]: http://en.wikipedia.org/wiki/Roald_Dahl",
  "photos": [
    9395323,
    9395316,
    9395314,
    9395313,
    6287214
  ],
  "source_records": [
    "amazon:8420440248",
    "amazon:8420401307",
    "amazon:0670852503",
    "amazon:0140386068",
    "amazon:0140382518",
    "amazon:7533299299",
    "amazon:9026104618",
    "amazon:0141326182",
    "amazon:0141371439",
    "amazon:0141348364",
    "amazon:0670882976",
    "amazon:0141348348",
    "amazon:1760978302",
    "amazon:0141321954",
    "amazon:9877381915",
    "amazon:1849673241",
    "amazon:7533299272",
    "amazon:9877384167",
    "amazon:1844227251",
    "bwb:9780593528655",
    "amazon:8877820047",
    "amazon:1435255267",
    "amazon:7533299264"
  ],
  "type": {
    "key": "/type/author"
  },
  "key": "/authors/OL34184A",
  "links": [
    {
      "title": "roalddahl.com",
      "url": "http://www.roalddahl.com/",
      "type": {
        "key": "/type/link"
      }
    },
    {
      "title": "Wikipedia entry",
      "url": "http://en.wikipedia.org/wiki/Roald_Dahl",
      "type": {
        "key": "/type/link"
      }
    }
  ],
  "name": "Roald Dahl",
  "death_date": "23 November 1990",
  "birth_date": "13 September 1916",
  "alternate_names": [
    "Poald Dahl"
  ],
  "latest_revision": 41,
  "revision": 41,
  "created": {
    "type": "/type/datetime",
    "value": "2008-04-01T03:28:50.625462"
  },
  "last_modified": {
    "type": "/type/datetime",
    "value": "2022-09-09T18:51:46.496425"
  }
}
```

## Authors Works

https://openlibrary.org/authors/OL34184A/works.json

https://openlibrary.org/authors/OL34184A/works.json?offset=0&limit=5

``` nonum
{
  "links": {
    "self": "/authors/OL34184A/works.json?offset=0&limit=5",
    "author": "/authors/OL34184A",
    "next": "/authors/OL34184A/works.json?limit=5&offset=5"
  },
  "size": 437,
  "entries": [
    {
      "title": "Short Fiction - Classic and Contemporary - Second Edition",
      "subjects": [
        "short stories",
        "English literature",
        "Collections",
        "English fiction",
        "Fiction",
        "freedom",
        "selfhood",
        "self-fulfillment",
        "meaning of love",
        "short story",
        "banks",
        "detective fiction",
        "Encyclop\u00e6dia Britannica",
        "pawnbrokers",
        "police inspectors",
        "red hair",
        "Mystery and detective stories",
        "Children's fiction",
        "tradition",
        "change",
        "death",
        "allegory",
        "nonlinear narrative",
        "gentleman's agreements",
        "recluses",
        "Mentally ill women",
        "African Americans",
        "husband and wife",
        "race relations",
        "Satanism",
        "Puritans",
        "catechism",
        "Devil",
        "Boys",
        "20th century English fiction",
        "British and irish fiction (fictional works by one author)",
        "christian fiction",
        "Christmas",
        "Christmas fiction",
        "Christmas stories",
        "Criticism and interpretation",
        "Daily Express",
        "Domestic fiction",
        "family life",
        "Family reunions",
        "Stories (texts)",
        "The Lass of Aughrim",
        "Three Graces",
        "West Britons",
        "Irish literature",
        "Young men",
        "Copyists",
        "classic literature",
        "Psychology",
        "Securities industry",
        "history and criticism",
        "Crime",
        "Detective and mystery stories",
        "Horror stories",
        "Juvenile fiction",
        "Revenge",
        "American Horror tales",
        "burial vaults",
        "catalepsy",
        "dragons",
        "gothic fiction",
        "hermitages",
        "heroic romances",
        "horror",
        "horror tales",
        "hysteria",
        "knights",
        "maces",
        "psychogenic death",
        "tarns",
        "monograms",
        "History",
        "Juvenile audience",
        "civil war",
        "hanging",
        "American Civil War",
        "Confederate States of America",
        "Union"
      ],
      "key": "/works/OL5367202W",
      "authors": [
        {
          "author": {
            "key": "/authors/OL1236297A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL30963A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL52922A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL21093A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL18928A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL19677A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL35183A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL18319A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL34184A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL21831A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL27349A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL4586796A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL26681A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL31827A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL44633A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL29497A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL82236A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL48139A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL28127A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL4327308A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL25788A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL217774A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL20188A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL33621A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL507165A"
          },
          "type": {
            "key": "/type/author_role"
          }
        },
        {
          "author": {
            "key": "/authors/OL471614A"
          },
          "type": {
            "key": "/type/author_role"
          }
        }
      ],
      "type": {
        "key": "/type/work"
      },
      "covers": [
        12193799,
        11713241
      ],
      "description": {
        "type": "/type/text",
        "value": "Roses, rhododendron / A. Adams --\r\nThe egg ; I want to know why / S. Anderson --\r\nRape fantasies / M. Atwood --\r\nThe story of my dovecot / I. Babel --\r\nSonny's blues / J. Baldwin --\r\nThe lesson / T.C. Bambara --\r\nMy mother's memoirs, my father's lie, and other true stories / R. Banks --\r\nLost in the funhouse / J. Barth --\r\nA city of churches / D. Barthelme --\r\n[Occurrence at Owl Creek Bridge](https://openlibrary.org/works/OL14863196W/An_Occurrence_at_Owl_Creek_Bridge) / A. Bierce --\r\nLike a bad dream / H. Bo\u0308ll --\r\nThe end of the duel / J.L. Borges --\r\nCathedral / R. Carver --\r\nPaul's case / W. Cather --\r\nThe enormous radio ; The swimmer / J. Cheever --\r\nThe darling ; Gooseberies ; The lady with the dog / A. Chekhov --\r\n[The story of an hour ](https://openlibrary.org/works/OL20078864W)/ K. Chopin --\r\nThe celebrated jumping frog of Calaveras County / S. Clemens (M. Twain) --\r\nThe secret sharer / J. Conrad --\r\nThe magic poker / R. Coover ; \r\nThe blue hotel ; \r\nThe open boat / S. Crane ; \r\n[The way up to heaven](https://openlibrary.org/works/OL20504268W) / R. Dahl --\r\n[The red-headed league](https://openlibrary.org/works/OL262476W) / A.C. Doyle --\r\nThe doctor / A. Dubus --\r\nKing of the bingo game / R. Ellison --\r\nDry September ; [A rose for Emily](https://openlibrary.org/works/OL82884W) ; [That evening sun](https://openlibrary.org/works/OL20080863W) / W. Faulkner --\r\nBabylon revisited / F. Scott Fitzgerald --\r\nTuesday siesta / G.G. Ma\u0301rquez ; \r\nThe yellow wallpaper / C.P. Gilman --\r\nThe overcoat / N. Gogol --\r\nThe life of the imagination / N. Gordimer --\r\nTwo gentle people / G. Greene --\r\nArgument and persuasion / D. Hall --\r\nTony Kytes, the arch-deceiver / T. Hardy --\r\n[The birthmark](https://openlibrary.org/works/OL455204W) ; [Young Goodman Brown](https://openlibrary.org/works/OL455569W) / N. Hawthorne --\r\nA Vermont tale / M. Helprin --\r\nHills like white elephants / E. Hemingway --\r\nThe lottery / S. Jackson --\r\nThe real thing ; The tree of knowledge / H. James --\r\nA white heron / S.O. Jewett --\r\n[Araby](https://openlibrary.org/works/OL20570121W) ; [The dead](https://openlibrary.org/works/OL15073437W) / J. Joyce --\r\nA hunger artist / F. Kafka --\r\nThe man who would be king ; Mary Postgate / R. Kipling --\r\nNot a good girl / P. Klass --\r\nHaircut / R. Lardner --\r\nThe horse-dealer's daughter ; The rocking-horse winner / D.H. Lawrence --\r\nThe professor's houses / U.K. LeGuin --\r\nOne off the short list ; A sunrise on the veld / D. Lessing --\r\nTo build a fire / J. London --\r\nA tree, a rock, a cloud / C. McCullers --\r\nThe magic barrel / B. Malamud --\r\nA dill pickle ; Miss Brill / K. Mansfield --\r\nThe outstation / W. Somerset Maugham --\r\nThe necklace / G. de Maupassant --\r\n[Bartleby the scrivener](https://openlibrary.org/works/OL102732W) / H. Melville --\r\nPatriotism / Y. Mishima --\r\nBoys and girls / A. Munro --\r\nThe passenger / V. Nabokov --\r\nThe going-away party ; Where are you going, where have you been? / J.C. Oates --\r\nThe creature / E. O'Brien --\r\nEverything that rises must converge ; A good man is hard to find / Flannery O'Connor --\r\nGuests of the nation ; My oedipus complex / Frank O'Connor --\r\nDo you like it here? / J. O'Hara --\r\nI stand here ironing / T. Olsen --\r\nA conversation with my father / G. Paley --\r\nWar / L. Pirandello --\r\n[The cask of Amontillado](https://openlibrary.org/works/OL41016W); [Fall of the House of Usher](https://openlibrary.org/works/OL41078W) ; [The purloined letter](https://openlibrary.org/works/OL41065W) / E.A. Poe --\r\nFlowering Judas ; The grave / K.A. Porter --\r\nThe valiant woman / J.F. Powers --\r\nThe diver / V.S. Pritchett --\r\nThe shot / A. Pushkin --\r\nThe conversion of the Jews / P. Roth --\r\nI-80 Nebraska, M. 490-M. 205 / J. Sayles --\r\nGimpel the fool / I.B. Singer --\r\nThe chrysanthemums / J. Steinbeck --\r\nThe catbird seat / J. Thurber --\r\nThe death of Ivan Ilych / L. Tolstoy --\r\nThe tryst / I. Turgenev --\r\nA & P ; The music school ; Made in heaven / J. Updike --\r\nRoselily ; To hell with dying / A. Walker --\r\nBlackberry winter ; The patented gate and the mean hamburger / R.P. Warren --\r\nPetrified man ; A worn path / E. Welty --\r\nThe other two ; Roman fever / E. Wharton --\r\nThe use of force / W.C. Williams --\r\nSmokers / T. Wolff --\r\nThe man who was almost a man / R. Wright --\r\nWriters on writing: How to tell a story / S. Clemens (M. Twain) --\r\nStephen Crane's own story / S. Crane --\r\nBiography of a story / S. Jackson --\r\nOn her own work / F. O'Connor --\r\nThe brief prose tale / E.A. Poe --\r\n\"Blackberry winter\": a recollection / R.P. Warren --\r\nIs Phoenix Jackson's grandson really dead? / E. Welty."
      },
      "subject_people": [
        "Peyton Farquhar",
        "Eugene Foster",
        "Mrs Foster",
        "Louise Mallard",
        "Brently Mallard",
        "Josephine",
        "Richards",
        "Sherlock Holmes",
        "John H. Watson",
        "Jabez Wilson",
        "Vincent Spaulding",
        "Duncan Ross",
        "Police Inspector Jones",
        "Mr. Merryweather",
        "John Clay",
        "Archie",
        "Emily Grierson",
        "Homer Barron",
        "Mr. Grierson",
        "Tobe",
        "Colonel Sartoris",
        "Quentin Compson",
        "Nancy",
        "Caddy",
        "Jason",
        "Dilsey",
        "Jesus",
        "Mrs. Compson",
        "Mr. Stovall",
        "Jailer",
        "Mr. Lovelady",
        "Aylmer",
        "Georgiana",
        "Goodman Brown",
        "Faith Brown",
        "Goody Cloyse",
        "Devil",
        "Mangan's sister",
        "Gabriel Conroy",
        "Kate Morkan",
        "Julia Morkan",
        "Mary Jane Morkan",
        "Lily",
        "Gretta Conroy",
        "Molly Ivors",
        "Mr Browne",
        "Freddy Malins",
        "Mrs Malins",
        "Bartell D'Arcy",
        "Patrick Morkan",
        "Michael Furey",
        "Bartleby",
        "Turkey",
        "Nippers",
        "Ginger Nut",
        "John Jacob Astor",
        "Cicero",
        "Montresor",
        "Fortunato",
        "Luchresi",
        "Lady Fortunato",
        "Roderick Usher",
        "Madeline Usher",
        "Ethelred",
        "C. Auguste Dupin",
        "Minister D\u2014",
        "Prosper Jolyot de Cr\u00e9billon"
      ],
      "subject_times": [
        "19th century",
        "1890",
        "Antebellum era",
        "1600s",
        "Carnival",
        "1861-65"
      ],
      "subject_places": [
        "United States",
        "Alabama",
        "Owl Creek Bridge",
        "New York",
        "Paris",
        "Mallard residence",
        "London",
        "Baker Street",
        "Jefferson",
        "Mississippi",
        "Yoknapatawpha County",
        "New England",
        "Salem Village",
        "Massachusetts",
        "Araby",
        "North Richmond Street",
        "Araby bazaar",
        "Ireland",
        "Galway",
        "Wall Street"
      ],
      "latest_revision": 16,
      "revision": 16,
      "created": {
        "type": "/type/datetime",
        "value": "2009-12-10T09:42:38.201207"
      },
      "last_modified": {
        "type": "/type/datetime",
        "value": "2022-09-20T12:23:52.252020"
      }
    },
    {
      "title": "The Amazing Eyes of Kuda Bux",
      "authors": [
        {
          "author": {
            "key": "/authors/OL34184A"
          },
          "type": {
            "key": "/type/author_role"
          }
        }
      ],
      "key": "/works/OL28767593W",
      "type": {
        "key": "/type/work"
      },
      "latest_revision": 1,
      "revision": 1,
      "created": {
        "type": "/type/datetime",
        "value": "2022-09-06T21:21:35.383381"
      },
      "last_modified": {
        "type": "/type/datetime",
        "value": "2022-09-06T21:21:35.383381"
      }
    },
    {
      "description": "The sweet scents of rural life infuse this collection of Roald Dahl's country stories, but there is always something unexpected lurking in the undergrowth...\r\n\r\nAh, Sweet Mystery of Life brings together seven of Roald Dahl's short stories set in and around the Buckinghamshire countryside where Roald lived. The collection was first published in 1989, but all of the stories were originally written in the late 1940s. They are based on Roald's experiences with his friend Claud, a man who lived in the nearby town of Amersham. Claud was an experienced poacher and shared Roald's passion for \"gambling in small amounts on horses and greyhounds.\"\r\n\r\nFrom troublesome cows to rat-infested hayricks to maggot farming, Ah, Sweet Mystery of Life brings the tales of everyday country folk and their strange passions wonderfully to life. And many of the characters that feature in this collection went on to inspire and appear in other stories: there's Parson's Pleasure, which features an antiques dealer and bogus clergyman called Boggis, later the name of one of the farmers in Fantastic Mr Fox. And Danny's dad, the filling-shop owner with some ingenious methods for catching pheasants from Danny the Champion of the World, makes an early appearance inThe Champion of the World.\r\n\r\nThe seven stories in the collection are:\r\n\r\nAh, Sweet Mystery of Life\r\n[Parson's Pleasure](https://openlibrary.org/works/OL8318648W/Parson's_Pleasure)\r\n[Ratcatcher](https://openlibrary.org/works/OL20504625W/The_Ratcatcher)\r\n[Rummins](https://openlibrary.org/works/OL20504633W/Rummins)\r\n[Mr Hoddy](https://openlibrary.org/works/OL20504639W/Mr_Hoddy)\r\n[Mr Feasey](https://openlibrary.org/works/OL20504641W/Mr_Feasey)\r\n[Champion of the World](https://openlibrary.org/works/OL20504277W/Champion_of_the_World)\r\n\r\n([source](https://www.roalddahl.com/roald-dahl/stories/a-e/ah-sweet-mystery-of-life))",
      "links": [
        {
          "url": "https://www.roalddahl.com/roald-dahl/stories/a-e/ah-sweet-mystery-of-life",
          "title": "Ah, Sweet Mystery of Life - Roald Dahl",
          "type": {
            "key": "/type/link"
          }
        },
        {
          "title": "Ah, Sweet Mystery of Life: The Country Stories of Roald Dahl ...",
          "url": "https://en.wikipedia.org/wiki/Ah,_Sweet_Mystery_of_Life:_The_Country_Stories_of_Roald_Dahl",
          "type": {
            "key": "/type/link"
          }
        },
        {
          "url": "https://www.roalddahlfans.com/dahls-work/books/ah-sweet-mystery-of-life/",
          "title": "Ah, Sweet Mystery of Life \u2013 Roald Dahl Fans",
          "type": {
            "key": "/type/link"
          }
        },
        {
          "url": "https://www.publishersweekly.com/978-0-394-58265-8",
          "title": "Fiction Book Review: Ah, Sweet Mystery of Life by Roald Dahl ...",
          "type": {
            "key": "/type/link"
          }
        }
      ],
      "title": "Ah, Sweet Mystery of Life",
      "covers": [
        9159665
      ],
      "subject_places": [
        "England",
        "Chelsea",
        "London",
        "Buckinghamshire"
      ],
      "subjects": [
        "Country life",
        "Fiction",
        "literary fiction",
        "English fiction",
        "short stories",
        "black humor",
        "Chippendale Commodes",
        "Fiction, short stories (single author)"
      ],
      "subject_people": [
        "Cyril Boggis",
        "Claud",
        "Bert",
        "Rummins",
        "Mr Hoddy",
        "Mr Feasey"
      ],
      "key": "/works/OL45854W",
      "authors": [
        {
          "author": {
            "key": "/authors/OL34184A"
          },
          "type": {
            "key": "/type/author_role"
          }
        }
      ],
      "type": {
        "key": "/type/work"
      },
      "latest_revision": 16,
      "revision": 16,
      "created": {
        "type": "/type/datetime",
        "value": "2009-10-15T11:34:21.437031"
      },
      "last_modified": {
        "type": "/type/datetime",
        "value": "2022-09-04T20:35:39.479779"
      }
    },
    {
      "title": "Fantastic Mr. Fox and Other Animal Stories",
      "covers": [
        10294562
      ],
      "key": "/works/OL20922814W",
      "authors": [
        {
          "type": {
            "key": "/type/author_role"
          },
          "author": {
            "key": "/authors/OL34184A"
          }
        },
        {
          "type": {
            "key": "/type/author_role"
          },
          "author": {
            "key": "/authors/OL5400238A"
          }
        },
        {
          "type": {
            "key": "/type/author_role"
          },
          "author": {
            "key": "/authors/OL231965A"
          }
        },
        {
          "type": {
            "key": "/type/author_role"
          },
          "author": {
            "key": "/authors/OL7697574A"
          }
        },
        {
          "type": {
            "key": "/type/author_role"
          },
          "author": {
            "key": "/authors/OL981639A"
          }
        }
      ],
      "type": {
        "key": "/type/work"
      },
      "latest_revision": 3,
      "revision": 3,
      "created": {
        "type": "/type/datetime",
        "value": "2020-07-18T22:07:33.073254"
      },
      "last_modified": {
        "type": "/type/datetime",
        "value": "2022-09-04T16:08:14.038354"
      }
    },
    {
      "type": {
        "key": "/type/work"
      },
      "title": "Roald Dahl Words",
      "authors": [
        {
          "type": {
            "key": "/type/author_role"
          },
          "author": {
            "key": "/authors/OL34184A"
          }
        },
        {
          "type": {
            "key": "/type/author_role"
          },
          "author": {
            "key": "/authors/OL236943A"
          }
        }
      ],
      "key": "/works/OL27914803W",
      "latest_revision": 3,
      "revision": 3,
      "created": {
        "type": "/type/datetime",
        "value": "2022-05-27T04:58:44.323464"
      },
      "last_modified": {
        "type": "/type/datetime",
        "value": "2022-09-04T09:45:29.140858"
      }
    }
  ]
}
```

# Subjects API

https://openlibrary.org/subjects/love.json?offset=0&limit=5

``` nonum
{
  "key": "/subjects/love",
  "name": "love",
  "subject_type": "subject",
  "work_count": 14855,
  "works": [
    {
      "key": "/works/OL21177W",
      "title": "Wuthering Heights",
      "edition_count": 1454,
      "cover_id": 12818862,
      "cover_edition_key": "OL38586477M",
      "subject": [
        "British and irish fiction (fictional works by one author)",
        "Children's fiction",
        "Classic fiction",
        "Classic Literature",
        "Country homes",
        "Country life",
        "Cousins",
        "death",
        "Drama",
        "English language",
        "English language readers",
        "English literature",
        "Examinations",
        "Families",
        "family life",
        "Fiction",
        "Foundlings",
        "Historical Fiction",
        "Inheritance and succession",
        "Interpersonal relations",
        "Juvenile fiction",
        "Landscape in literature",
        "love",
        "Man-woman relationships",
        "Manners and customs",
        "orphans",
        "Psychological fiction",
        "Reading Level-Grade 7",
        "Reading Level-Grade 8",
        "Reading Level-Grade 9",
        "Reading Level-Grade 10",
        "Reading Level-Grade 11",
        "Reading Level-Grade 12",
        "Rejection (Psychology)",
        "revenge",
        "romance",
        "Romance fiction",
        "romantic fiction",
        "Rural families",
        "slavery",
        "Social life and customs",
        "tragedy",
        "Triangles (Interpersonal relations)",
        "Young women",
        "Fiction, general",
        "Revenge -- Fiction",
        "Rejection (Psychology) -- Fiction",
        "Love stories",
        "Domestic fiction",
        "Yorkshire (England) -- Fiction",
        "Foundlings -- Fiction",
        "Rural families -- Fiction",
        "Heathcliff (Fictitious character : Bront\u00eb) -- Fiction",
        "Triangles (Interpersonal relations) -- Fiction",
        "Heathcliff (fictitious character), fiction",
        "Fiction, family life, general",
        "Fiction, psychological",
        "Fiction, romance, general",
        "Man-woman relationships, fiction",
        "England, fiction",
        "Triangle (Relations humaines)",
        "Romans, nouvelles",
        "Rejet (Psychologie)",
        "Familles rurales",
        "Enfants trouv\u00e9s",
        "Wuthering Heights (Bront\u00eb, Emily)",
        "Vengeance",
        "English fiction",
        "Triangles (Interpersonal relationships)",
        "Yorkshire (England)",
        "Roman anglais",
        "Relations entre hommes et femmes",
        "M\u0153urs et coutumes",
        "Women",
        "Femmes",
        "Heathcliff (Fictitious character)",
        "Catherine Earnshawm (Fictitious character)",
        "English Gothic fiction"
      ],
      "ia_collection": [
        "365-Books-by-Women-Authors",
        "additional_collections",
        "americana",
        "americanuniversity-ol",
        "audio_bookspoetry",
        "belmont-ol",
        "binghamton-ol",
        "bostonpubliclibrary",
        "bostonuniversitylibraries-ol",
        "bplhoughton",
        "bpljordan-ol",
        "china",
        "cnusd-ol",
        "cornell",
        "cua-ol",
        "dartmouthlibrary-ol",
        "delawarecountydistrictlibrary",
        "delawarecountydistrictlibrary-ol",
        "drakeuniversity-ol",
        "duke_libraries",
        "europeanlibraries",
        "framingham-ol",
        "gutenberg",
        "gwulibraries-ol",
        "inlibrary",
        "internetarchivebooks",
        "ithacacollege-ol",
        "johnshopkins-ol",
        "kalamazoocollege-ol",
        "library_of_atlantis",
        "librarygenesis",
        "librivoxaudio",
        "marymount-ol",
        "miltonpubliclibrary-ol",
        "occidentalcollegelibrary-ol",
        "openlibrary-d-ol",
        "popularchinesebooks",
        "printdisabled",
        "randolph-macon-college-ol",
        "robarts",
        "rochester-ol",
        "spokanepubliclibrary-ol",
        "stmaryscountylibrary",
        "the-claremont-colleges-ol",
        "toronto",
        "trent_university",
        "tulsacc-ol",
        "udc-ol",
        "unb-ol",
        "uni-ol",
        "universityofarizona-ol",
        "universityofcoloradoboulder-ol",
        "universityofthewest-ol",
        "uslprototype",
        "wilsoncollege-ol",
        "worthingtonlibraries-ol"
      ],
      "lendinglibrary": false,
      "printdisabled": true,
      "lending_edition": "OL39222415M",
      "lending_identifier": "wutheringheights0000emil_z8q3",
      "authors": [
        {
          "key": "/authors/OL4327048A",
          "name": "Emily Bront\u00eb"
        }
      ],
      "first_publish_year": null,
      "ia": "wutheringheights0000emil_z8q3",
      "public_scan": true,
      "has_fulltext": true,
      "availability": {
        "status": "open",
        "available_to_browse": false,
        "available_to_borrow": false,
        "available_to_waitlist": false,
        "is_printdisabled": false,
        "is_readable": true,
        "is_lendable": false,
        "is_previewable": true,
        "identifier": "wutheringheights0000emil_z8q3",
        "isbn": null,
        "oclc": null,
        "openlibrary_work": "OL21177W",
        "openlibrary_edition": "OL39222415M",
        "last_loan_date": null,
        "num_waitlist": null,
        "last_waitlist_date": null,
        "is_restricted": false,
        "is_browseable": false,
        "__src__": "core.models.lending.get_availability"
      }
    },
    {
      "key": "/works/OL362427W",
      "title": "Romeo and Juliet",
      "edition_count": 968,
      "cover_id": 8257991,
      "cover_edition_key": "OL26501367M",
      "subject": [
        "Bibliography",
        "British and irish drama (dramatic works by one author)",
        "English Children's plays",
        "Classical Literature",
        "Conflicto entre generaciones",
        "Conflict of generations",
        "courtship",
        "Criticism and interpretation",
        "Drama",
        "Drama ingl\u00e9s",
        "Dramatic production",
        "Enemistad mortal",
        "English drama (collections), early modern and elizabethan, 1500-1600",
        "English literature",
        "English literature, study and teaching",
        "English Love stories",
        "English Young adult drama",
        "Families",
        "Fiction",
        "History and criticism",
        "Juvenile drama",
        "Juvenile literature",
        "Juventud",
        "Language and linguistics",
        "Literature",
        "Love-Romance-Fiction",
        "Love in adolescence",
        "Man-woman relationships",
        "Married people",
        "open_syllabus_project",
        "Performing Arts",
        "Plays",
        "Quartos",
        "Reading Level-Grade 9",
        "Reading Level-Grade 10",
        "Reading Level-Grade 11",
        "Reading Level-Grade 12",
        "Shakespeare",
        "Sources",
        "Specimens",
        "Stage history",
        "Study guides",
        "Suicide",
        "Suspense-Fiction",
        "Teatro",
        "Tragedias",
        "Tragedy",
        "Vendetta",
        "Youth",
        "Shakespeare, william, 1564-1616",
        "Shakespeare, william, 1564-1616, romeo and juliet",
        "Shakespeare, william, 1564-1616, juvenile literature",
        "Shakespeare, william, 1564-1616, criticism, textual",
        "Shakespeare, william, 1564-1616, outlines, syllabi, etc.",
        "Shakespeare, william, 1564-1616, dramatic production",
        "Shakespeare, william, 1564-1616, stage history",
        "Shakespeare, william, 1564-1616, criticism and interpretation",
        "Drama, british and irish",
        "Shakespeare, william, 1564-1616, adaptations",
        "Critique et interpr\u00e9tation",
        "Romeo and Juliet (Shakespeare, William)",
        "Romeo (Fictitious character)",
        "Juliet (Fictitious character)",
        "English drama",
        "Love",
        "Adaptations",
        "Comics & graphic novels, literary",
        "Drama, collections",
        "Translations",
        "Tragedies",
        "Man-woman relationship",
        "Spanish language",
        "Motion picture plays",
        "Romeo and Juliet",
        "Traducciones al espa\u00f1ol",
        "18.05 English literature",
        "Examinations",
        "Fiction, general",
        "Vendetta -- Drama",
        "Youth -- Drama",
        "Verona (Italy) -- Drama",
        "Juliet (Fictitious character) -- Drama",
        "Romeo (Fictitious character) -- Drama",
        "Conflict of generations -- Drama",
        "English drama (Tragedy)",
        "Translations into Spanish",
        "Early modern and Elizabethan",
        "Teatro ingl\u00e9s (Tragedia)",
        "Literatura inglesa",
        "Theater",
        "Auff\u00fchrung",
        "Geschichte",
        "Drama (dramatic works by one author)",
        "Caricatures and cartoons",
        "Cartoons and comics",
        "Caricatures et dessins humoristiques"
      ],
      "ia_collection": [
        "JaiGyan",
        "additional_collections",
        "americana",
        "americanuniversity-ol",
        "audio_bookspoetry",
        "audiocitenet",
        "belmont-ol",
        "binghamton-ol",
        "blc",
        "bncfirenze",
        "bostonpubliclibrary",
        "bostonuniversitylibraries-ol",
        "bplill",
        "bpljordan-ol",
        "bplsceep",
        "bplsctpbs",
        "buddhist-digital-resource-center",
        "buddhist-digital-resource-center-restricted",
        "cdl",
        "china",
        "cnusd-ol",
        "community",
        "cornell",
        "cua-ol",
        "dartmouthlibrary-ol",
        "delawarecountydistrictlibrary",
        "delawarecountydistrictlibrary-ol",
        "denverpubliclibrary-ol",
        "digitallibraryindia",
        "drakeuniversity-ol",
        "europeanlibraries",
        "folksoundomy",
        "framingham-ol",
        "getty",
        "goffstownlibrary-ol",
        "gutenberg",
        "gwulibraries-ol",
        "hamiltonpubliclibrary-ol",
        "inlibrary",
        "internetarchivebooks",
        "ithacacollege-ol",
        "johnshopkins-ol",
        "kalamazoocollege-ol",
        "library_of_congress",
        "librarygenesis",
        "librivoxaudio",
        "marymount-ol",
        "microfilm",
        "miltonpubliclibrary-ol",
        "occidentalcollegelibrary-ol",
        "openlibrary-d-ol",
        "opensource",
        "popularchinesebooks",
        "printdisabled",
        "prscr",
        "randolph-macon-college-ol",
        "riceuniversity-ol",
        "robarts",
        "rochester-ol",
        "spandr",
        "spokanepubliclibrary-ol",
        "stmaryscountylibrary",
        "testifilosofiascienzaitaliani",
        "the-claremont-colleges-ol",
        "toronto",
        "trent_university",
        "tulsacc-ol",
        "uconn_libraries",
        "unb-ol",
        "unclibraries",
        "uni-ol",
        "univ_florida_smathers",
        "university_of_alberta_libraries",
        "university_of_alberta_libraries_microfilm",
        "university_of_illinois_urbana-champaign",
        "universityofarizona-ol",
        "universityofcoloradoboulder-ol",
        "universityoffloridaduplicates",
        "universityofoklahoma-ol",
        "universityofthewest-ol",
        "uslprototype",
        "wilsoncollege-ol",
        "worthingtonlibraries-ol"
      ],
      "lendinglibrary": false,
      "printdisabled": true,
      "lending_edition": "OL23330725M",
      "lending_identifier": "romeoundjulia00shakuoft",
      "authors": [
        {
          "key": "/authors/OL9388A",
          "name": "William Shakespeare"
        }
      ],
      "first_publish_year": null,
      "ia": "romeoundjulia00shakuoft",
      "public_scan": true,
      "has_fulltext": true,
      "availability": {
        "status": "open",
        "available_to_browse": false,
        "available_to_borrow": false,
        "available_to_waitlist": false,
        "is_printdisabled": false,
        "is_readable": true,
        "is_lendable": false,
        "is_previewable": true,
        "identifier": "romeoundjulia00shakuoft",
        "isbn": null,
        "oclc": null,
        "openlibrary_work": "OL362427W",
        "openlibrary_edition": "OL23330725M",
        "last_loan_date": null,
        "num_waitlist": null,
        "last_waitlist_date": null,
        "is_restricted": false,
        "is_browseable": false,
        "__src__": "core.models.lending.get_availability"
      }
    },
    {
      "key": "/works/OL98501W",
      "title": "Ethan Frome",
      "edition_count": 718,
      "cover_id": 8303480,
      "cover_edition_key": "OL7215847M",
      "subject": [
        "Accident victims",
        "American fiction (fictional works by one author)",
        "American literature",
        "Children's fiction",
        "Classic Literature",
        "domestic fiction",
        "English fiction",
        "Family life",
        "Farm life",
        "Fiction",
        "Guardian and ward",
        "Interpersonal relations",
        "Love",
        "Man-woman relationships",
        "Manners and customs",
        "Marriage",
        "Married people",
        "poor",
        "Poverty",
        "Readers",
        "Romance",
        "Rural poor",
        "Social life and customs",
        "Study and teaching (Secondary)",
        "Triangles (Interpersonal relations)",
        "Young women",
        "Married people, fiction",
        "Massachusetts, fiction",
        "Man-woman relationships, fiction",
        "Wharton, edith, 1862-1937",
        "Young women, fiction",
        "Fiction, romance, general",
        "Unrequited love",
        "New england, fiction",
        "English language, textbooks for foreign speakers",
        "Single women, fiction",
        "Fiction, historical, general",
        "Fiction, general",
        "Triangle (Relations humaines)",
        "Romans, nouvelles",
        "Victimes d'accidents",
        "Couples mari\u00e9s",
        "Pauvres en milieu rural",
        "Vie \u00e0 la ferme"
      ],
      "ia_collection": [
        "JaiGyan",
        "americana",
        "americanuniversity-ol",
        "audio_bookspoetry",
        "audiocitenet",
        "bannedbooks",
        "binghamton-ol",
        "bostonuniversitylibraries-ol",
        "cdl",
        "china",
        "cnusd-ol",
        "cua-ol",
        "dartmouthlibrary-ol",
        "delawarecountydistrictlibrary",
        "delawarecountydistrictlibrary-ol",
        "digitallibraryindia",
        "drakeuniversity-ol",
        "folksoundomy",
        "goffstownlibrary-ol",
        "gutenberg",
        "gwulibraries-ol",
        "hamiltonpubliclibrary-ol",
        "inlibrary",
        "internetarchivebooks",
        "kalamazoocollege-ol",
        "library_of_atlantis",
        "librarygenesis",
        "librivoxaudio",
        "openlibrary-d-ol",
        "printdisabled",
        "randolph-macon-college-ol",
        "riceuniversity-ol",
        "robarts",
        "stmaryscountylibrary",
        "toronto",
        "tulsacc-ol",
        "ualbertawiedrick",
        "udc-ol",
        "unb-ol",
        "university_of_alberta_libraries",
        "universityofoklahoma-ol",
        "uslprototype",
        "wilsoncollege-ol",
        "worthingtonlibraries-ol"
      ],
      "lendinglibrary": false,
      "printdisabled": true,
      "lending_edition": "OL7215847M",
      "lending_identifier": "ethanfrome00wharrich",
      "authors": [
        {
          "key": "/authors/OL20188A",
          "name": "Edith Wharton"
        }
      ],
      "first_publish_year": null,
      "ia": "ethanfrome00wharrich",
      "public_scan": true,
      "has_fulltext": true,
      "availability": {
        "status": "open",
        "available_to_browse": false,
        "available_to_borrow": false,
        "available_to_waitlist": false,
        "is_printdisabled": false,
        "is_readable": true,
        "is_lendable": false,
        "is_previewable": true,
        "identifier": "ethanfrome00wharrich",
        "isbn": null,
        "oclc": null,
        "openlibrary_work": "OL98501W",
        "openlibrary_edition": "OL7215847M",
        "last_loan_date": null,
        "num_waitlist": null,
        "last_waitlist_date": null,
        "is_restricted": false,
        "is_browseable": false,
        "__src__": "core.models.lending.get_availability"
      }
    },
    {
      "key": "/works/OL27776452W",
      "title": "Importance of Being Earnest",
      "edition_count": 441,
      "cover_id": 1260453,
      "cover_edition_key": "OL9694914M",
      "subject": [
        "British and irish drama (dramatic works by one author)",
        "English life",
        "Readers",
        "etiquette",
        "love",
        "manners",
        "marriage",
        "play",
        "Children's fiction",
        "Youth, fiction",
        "Drama",
        "Foundlings",
        "Identity (Psychology)",
        "Classic Literature",
        "Comedias",
        "English drama",
        "English drama (Comedy)",
        "Exp\u00f3sitos",
        "Fiction",
        "Identidad (Psicolog\u00eda)",
        "Ingl\u00e9s",
        "Libros de lectura",
        "Social life and customs",
        "Teatro",
        "Comedy",
        "British and irish fiction (fictional works by one author)",
        "English literature",
        "History and criticism",
        "Literature",
        "Movie novels",
        "Man-woman relationships",
        "Social norms",
        "Aristocracy (Social class)",
        "Unterrichtseinheit",
        "Dictionaries",
        "English language",
        "Spanish",
        "Manners and customs",
        "French",
        "Mistaken identity",
        "Drama (dramatic works by one author)",
        "Comics & graphic novels, literary",
        "Courtship",
        "Accessible book"
      ],
      "ia_collection": [
        "americana",
        "binghamton-ol",
        "bpljordan-ol",
        "cdl",
        "china",
        "dartmouthlibrary-ol",
        "delawarecountydistrictlibrary",
        "delawarecountydistrictlibrary-ol",
        "denverpubliclibrary-ol",
        "drakeuniversity-ol",
        "hamiltonpubliclibrary-ol",
        "inlibrary",
        "internetarchivebooks",
        "library_of_atlantis",
        "librarygenesis",
        "openlibrary-d-ol",
        "printdisabled",
        "stmaryscountylibrary",
        "trent_university",
        "universityofarizona-ol",
        "worthingtonlibraries-ol"
      ],
      "lendinglibrary": false,
      "printdisabled": true,
      "lending_edition": "OL24953263M",
      "lending_identifier": "importanceofbein1895wild",
      "authors": [
        {
          "key": "/authors/OL20646A",
          "name": "Oscar Wilde"
        }
      ],
      "first_publish_year": null,
      "ia": "importanceofbein1895wild",
      "public_scan": true,
      "has_fulltext": true,
      "availability": {
        "status": "open",
        "available_to_browse": false,
        "available_to_borrow": false,
        "available_to_waitlist": false,
        "is_printdisabled": false,
        "is_readable": true,
        "is_lendable": false,
        "is_previewable": true,
        "identifier": "importanceofbein1895wild",
        "isbn": null,
        "oclc": null,
        "openlibrary_work": "OL27776452W",
        "openlibrary_edition": "OL24953263M",
        "last_loan_date": null,
        "num_waitlist": null,
        "last_waitlist_date": null,
        "is_restricted": false,
        "is_browseable": false,
        "__src__": "core.models.lending.get_availability"
      }
    },
    {
      "key": "/works/OL267096W",
      "title": "Anna Kar\u00e9nina",
      "edition_count": 388,
      "cover_id": 2560652,
      "cover_edition_key": "OL10601812M",
      "subject": [
        "Fiction",
        "Adultery",
        "Married women",
        "Social life and customs",
        "Social conditions",
        "Upper class women",
        "Russian literature",
        "Upper class",
        "Classic Literature",
        "Literature",
        "Drama",
        "Non-English Fiction",
        "Romance",
        "Russian fiction",
        "open_syllabus_project",
        "Long Now Manual for Civilization",
        "Reading Level-Grade 11",
        "Reading Level-Grade 12",
        "Continental European fiction (fictional works by one author)",
        "Married people, fiction",
        "History",
        "Manners and customs",
        "Russia",
        "Love stories",
        "FICTION / Classics",
        "FICTION / Literary",
        "Literary",
        "Spanish: Adult Fiction",
        "Slavic philology",
        "Romance fiction",
        "love",
        "marriage",
        "morals",
        "Chang pian xiao shuo",
        "Translations into English",
        "Translations from Russian",
        "English fiction",
        "Mujeres casadas",
        "Novela",
        "Adulterio",
        "Ancient, Classical & Medieval",
        "Russian Novel And Short Story",
        "Literature - Classics / Criticism",
        "Literary Collections",
        "Classics",
        "Romance - General",
        "Cuentos de amor",
        "Vida social y costumbres",
        "Ficci\u00f3n",
        "Literature and fiction, historical fiction",
        "Fiction, romance, historical, general",
        "Adultery -- Fiction",
        "Didactic fiction",
        "Russia -- Fiction",
        "Large type books",
        "Femmes mari\u00e9es",
        "Romans, nouvelles"
      ],
      "ia_collection": [
        "California-State-Suggested-Reading",
        "additional_collections",
        "americana",
        "americanuniversity-ol",
        "barryuniversity-ol",
        "belmont-ol",
        "binghamton-ol",
        "books",
        "bostonuniversitylibraries-ol",
        "cdl",
        "china",
        "clean_list",
        "cnusd-ol",
        "cua-ol",
        "dartmouthlibrary-ol",
        "delawarecountydistrictlibrary",
        "delawarecountydistrictlibrary-ol",
        "denverpubliclibrary-ol",
        "drakeuniversity-ol",
        "duke_libraries",
        "framingham-ol",
        "greatbooks",
        "gwulibraries-ol",
        "hamiltonpubliclibrary-ol",
        "inlibrary",
        "internetarchivebooks",
        "johnshopkins-ol",
        "kalamazoocollege-ol",
        "kellylibrary",
        "library_of_atlantis",
        "librarygenesis",
        "marymount-ol",
        "nationalyiddishbookcenter",
        "occidentalcollegelibrary-ol",
        "openlibrary-d-ol",
        "popularchinesebooks",
        "printdisabled",
        "randolph-macon-college-ol",
        "riceuniversity-ol",
        "robarts",
        "rochester-ol",
        "stmaryscountylibrary",
        "the-claremont-colleges-ol",
        "toronto",
        "trent_university",
        "tulsacc-ol",
        "unb-ol",
        "uni-ol",
        "universityofarizona-ol",
        "universityofcoloradoboulder-ol",
        "universityofoklahoma-ol",
        "uslprototype",
        "wilsoncollege-ol",
        "worthingtonlibraries-ol",
        "wrlc-ol"
      ],
      "lendinglibrary": false,
      "printdisabled": true,
      "lending_edition": "OL22876225M",
      "lending_identifier": "nybc211555",
      "authors": [
        {
          "key": "/authors/OL26783A",
          "name": "Lev Nikolaevi\u010d Tolstoy"
        }
      ],
      "first_publish_year": null,
      "ia": "nybc211555",
      "public_scan": true,
      "has_fulltext": true,
      "availability": {
        "status": "open",
        "available_to_browse": false,
        "available_to_borrow": false,
        "available_to_waitlist": false,
        "is_printdisabled": false,
        "is_readable": true,
        "is_lendable": false,
        "is_previewable": true,
        "identifier": "nybc211555",
        "isbn": null,
        "oclc": null,
        "openlibrary_work": "OL267096W",
        "openlibrary_edition": "OL22876225M",
        "last_loan_date": null,
        "num_waitlist": null,
        "last_waitlist_date": null,
        "is_restricted": false,
        "is_browseable": false,
        "__src__": "core.models.lending.get_availability"
      }
    }
  ],
  "ebook_count": 14855
}
```

# Search API

## Search for authors

https://openlibrary.org/search/authors.json?q=*&offset=1&limit=1

``` nonum
{
  "numFound": 9862387,
  "start": 1,
  "numFoundExact": true,
  "docs": [
    {
      "key": "OL539875A",
      "type": "author",
      "name": "Philip M. Parker",
      "alternate_names": [
        "philip M. Parker",
        "Philip Parker",
        "ICON_Group_Ltd.",
        "ICON Group International, Inc."
      ],
      "birth_date": "June 20, 1960",
      "top_work": "Webster's English to Portuguese Crossword Puzzles",
      "work_count": 34088,
      "top_subjects": [
        "Protected DAISY",
        "Accessible book",
        "Bibliography",
        "Dictionaries",
        "Computer network resources",
        "MEDICAL",
        "Popular works",
        "HEALTH & FITNESS",
        "Research",
        "Diseases"
      ],
      "_version_": 1737455916854280194
    }
  ]
}
```

## Search for subjects

https://openlibrary.org/search/subjects.json?q=*&offset=1&limit=2

``` nonum
{
  "numFound": 3073534,
  "start": 1,
  "numFoundExact": true,
  "docs": [
    {
      "key": "/subjects/protected_daisy",
      "name": "Protected DAISY",
      "subject_type": "subject",
      "work_count": 2762005,
      "type": "subject",
      "count": 2762005
    },
    {
      "key": "/subjects/history",
      "name": "History",
      "subject_type": "subject",
      "work_count": 1665050,
      "type": "subject",
      "count": 1665050
    }
  ]
}
```

## Search for works

https://openlibrary.org/search.json?q=snow&offset=1&limit=1

``` nonum
_version_
author_alternative_name
author_facet
author_key
author_name
contributor
cover_edition_key
cover_i
ddc
ddc_sort
ebook_access
ebook_count_i
edition_count
edition_key
first_publish_year
has_fulltext
ia
ia_collection_s
id_amazon
id_goodreads
id_librarything
id_librivox
id_overdrive
id_project_gutenberg
isbn
key
language
last_modified_i
lcc
lcc_sort
lccn
lending_edition_s
lending_identifier_s
number_of_pages_median
oclc
printdisabled_s
public_scan_b
publish_date
publish_place
publish_year
publisher
publisher_facet
seed
subject
subject_facet
subject_key
title
title_suggest
type
```

``` nonum
{
  "numFound": 21101,
  "start": 1,
  "numFoundExact": true,
  "docs": [
    {
      "key": "/works/OL144812W",
      "type": "work",
      "seed": [
        "/books/OL22239568M",
        "/books/OL24178343M",
        "/books/OL17882343M",
        "/books/OL7151364M",
        "/books/OL6920808M",
        "/books/OL20684726M",
        "/books/OL22888049M",
        "/books/OL8785445M",
        "/books/OL13789553M",
        "/books/OL5882916M",
        "/books/OL25546481M",
        "/books/OL15549761M",
        "/books/OL9543337M",
        "/books/OL6794847M",
        "/books/OL9474840M",
        "/books/OL32095826M",
        "/books/OL11763769M",
        "/books/OL12238872M",
        "/books/OL11823538M",
        "/books/OL11826973M",
        "/books/OL11826974M",
        "/books/OL9550955M",
        "/books/OL9678742M",
        "/books/OL8491641M",
        "/books/OL8538090M",
        "/books/OL12496089M",
        "/books/OL24298183M",
        "/books/OL9831809M",
        "/books/OL11880571M",
        "/books/OL9322669M",
        "/books/OL12436479M",
        "/books/OL11985949M",
        "/books/OL11677817M",
        "/books/OL12505858M",
        "/books/OL10507770M",
        "/books/OL27579725M",
        "/books/OL27534670M",
        "/books/OL32096942M",
        "/books/OL32095436M",
        "/books/OL27455665M",
        "/books/OL32580451M",
        "/books/OL32459956M",
        "/books/OL32421431M",
        "/books/OL32447440M",
        "/books/OL30307863M",
        "/books/OL30307864M",
        "/books/OL30223314M",
        "/books/OL30054604M",
        "/books/OL29959437M",
        "/books/OL29945572M",
        "/works/OL144812W",
        "/subjects/classic_literature",
        "/subjects/fiction",
        "/subjects/women_heroes",
        "/subjects/american_fiction_(fictional_works_by_one_author)",
        "/authors/OL44633A"
      ],
      "title": "A Daughter of the Snows",
      "title_suggest": "A Daughter of the Snows",
      "edition_count": 50,
      "edition_key": [
        "OL22239568M",
        "OL24178343M",
        "OL17882343M",
        "OL7151364M",
        "OL6920808M",
        "OL20684726M",
        "OL22888049M",
        "OL8785445M",
        "OL13789553M",
        "OL5882916M",
        "OL25546481M",
        "OL15549761M",
        "OL9543337M",
        "OL6794847M",
        "OL9474840M",
        "OL32095826M",
        "OL11763769M",
        "OL12238872M",
        "OL11823538M",
        "OL11826973M",
        "OL11826974M",
        "OL9550955M",
        "OL9678742M",
        "OL8491641M",
        "OL8538090M",
        "OL12496089M",
        "OL24298183M",
        "OL9831809M",
        "OL11880571M",
        "OL9322669M",
        "OL12436479M",
        "OL11985949M",
        "OL11677817M",
        "OL12505858M",
        "OL10507770M",
        "OL27579725M",
        "OL27534670M",
        "OL32096942M",
        "OL32095436M",
        "OL27455665M",
        "OL32580451M",
        "OL32459956M",
        "OL32421431M",
        "OL32447440M",
        "OL30307863M",
        "OL30307864M",
        "OL30223314M",
        "OL30054604M",
        "OL29959437M",
        "OL29945572M"
      ],
      "publish_date": [
        "1963",
        "August 1, 2006",
        "2020",
        "1902",
        "1986",
        "February 5, 2007",
        "Oct 13, 2018",
        "June 2005",
        "2015-05-19",
        "2006",
        "Apr 12, 2016",
        "November 3, 2006",
        "September 13, 2006",
        "January 31, 2007",
        "1910",
        "October 15, 2005",
        "Dec 15, 2013",
        "July 20, 2007",
        "January 30, 2006",
        "2000",
        "July 25, 2007",
        "February 28, 2005",
        "September 1, 2006",
        "May 26, 2017",
        "Oct 26, 2018",
        "June 28, 2005",
        "2005-01-10",
        "2015-01-16",
        "September 11, 2007",
        "August 24, 2007",
        "1977",
        "May 24, 2014",
        "February 1, 1919",
        "May 22, 2017",
        "December 1987",
        "1918",
        "May 25, 2002",
        "April 1, 2005",
        "February 28, 2007"
      ],
      "publish_year": [
        1963,
        2014,
        2016,
        1919,
        2005,
        2017,
        2020,
        1902,
        1986,
        2007,
        2015,
        2006,
        2013,
        1977,
        1910,
        2002,
        2018,
        1918,
        2000,
        1987
      ],
      "first_publish_year": 1902,
      "number_of_pages_median": 274,
      "lccn": [
        "02024248",
        "63014433",
        "00063909"
      ],
      "publish_place": [
        "Mu nchen",
        "Murrieta, CA",
        "Fairfield",
        "Stockholm",
        "London",
        "LondonbNelson",
        "Philadelphia",
        "New York",
        "Warszawa",
        "Paris"
      ],
      "oclc": [
        "69292943",
        "174314816",
        "16730023",
        "70255568",
        "172982845",
        "176929546",
        "44914331",
        "3652898",
        "149455390",
        "74339916"
      ],
      "contributor": [
        "Frederick C. Yohn (Illustrator)",
        "Yohn, F. C. 1875-1933."
      ],
      "lcc": [
        "PZ-0003.00000000.L846 Dau4",
        "PS-3523.00000000.O46 Dau4",
        "PS-3523.00000000.O46 Da",
        "PZ-0003.00000000.L846 Da",
        "PS-3523.00000000.O46 D3 2000"
      ],
      "ddc": [
        "813.52"
      ],
      "isbn": [
        "1594629471",
        "9798651296903",
        "9798653873355",
        "9781421815701",
        "1426481314",
        "1374958786",
        "1647994950",
        "9798620218332",
        "9781428031647",
        "9781598181517",
        "9781426481314",
        "149967225X",
        "9781421814704",
        "1421815702",
        "1598181513",
        "9781426482038",
        "9781435355224",
        "1426482035",
        "9781406912326",
        "9781600961328",
        "1600961320",
        "1417906820",
        "157646816X",
        "1647994942",
        "9798642703328",
        "1406552135",
        "1600966950",
        "9781576468166",
        "9781530997664",
        "9781499672251",
        "0548014388",
        "9781417906826",
        "9781406552133",
        "9780548014387",
        "9781374958784",
        "9781647994945",
        "9781421944845",
        "3423009187",
        "1598189786",
        "9781546848967",
        "9780342776702",
        "1428031642",
        "1406912328",
        "9781600966958",
        "1435355229",
        "1582017093",
        "093245836X",
        "9783423009188",
        "1494491567",
        "1421814706",
        "9780344283635",
        "9781598189780",
        "9781421816708",
        "0344283631",
        "1530997666",
        "9781582017099",
        "8320537339",
        "0342776703",
        "9781421944838",
        "9780932458360",
        "9788320537338",
        "1421816709",
        "158963831X",
        "1421944839",
        "1421944847",
        "9781594629471",
        "9781494491567",
        "1546848967",
        "9781647994952",
        "9781589638310"
      ],
      "last_modified_i": 1645837640,
      "ebook_count_i": 7,
      "ebook_access": "public",
      "has_fulltext": true,
      "public_scan_b": true,
      "ia": [
        "cu31924021763655",
        "daughterssnows00londrich",
        "nordlandetsdotte00lond",
        "adaughterofthesn14654gut",
        "lumikenttientytr47983gut",
        "daughterofthesnows_1505_librivox",
        "derweiengrenze00lond"
      ],
      "ia_collection_s": "americana;audio_bookspoetry;cdl;cornell;gutenberg;librarygenesis;librivoxaudio;printdisabled",
      "lending_edition_s": "OL24178343M",
      "lending_identifier_s": "cu31924021763655",
      "printdisabled_s": "OL25546481M",
      "cover_edition_key": "OL24178343M",
      "cover_i": 6356594,
      "publisher": [
        "Archer House",
        "Classic Publishers",
        "Deutscher Taschenbuch-Verlag",
        "LibriVox",
        "Waking Lion Press",
        "Hard Press",
        "IndyPublish",
        "Project Gutenberg",
        "Quiet Vision Pub",
        "1st World Library - Literary Society",
        "IndyPublish.com",
        "Createspace Independent Publishing Platform",
        "Pinnacle Press",
        "Grosset & Dunlap",
        "Dodo Press",
        "Kessinger Publishing, LLC",
        "Bohlin",
        "Arco Publications",
        "Fredonia Books (NL)",
        "J.B. Lippincott co.",
        "Independently Published",
        "CreateSpace Independent Publishing Platform",
        "Spoldzielnia",
        "Book Jungle",
        "Franklin Classics Trade Press",
        "Aegypan",
        "Star Rover House",
        "T. Nelson",
        "Boomer Books",
        "Classic Books",
        "1st World Library",
        "BiblioBazaar",
        "Bibliotech Press",
        "Franklin Classics"
      ],
      "language": [
        "eng",
        "swe",
        "ger",
        "pol",
        "fin"
      ],
      "author_key": [
        "OL44633A"
      ],
      "author_name": [
        "Jack London"
      ],
      "author_alternative_name": [
        "Jack LONDON",
        "Lundun Jieke",
        "Jack Jack London",
        "Ke. lundun Jie",
        "J. London",
        "(mei) Jie, ke, lun dun",
        "Jie ke lun dun",
        "Ndon Lo",
        "London-J",
        "JACK LONDON",
        "John Griffith London",
        "London Jack",
        "jack london",
        "Jack JACK LONDON",
        "Jie ke \u2117\u02ba lun dun",
        "Jack George London",
        "J. LONDON",
        "John Griffith Chaney",
        "Jie ke \u00b7 lun dun"
      ],
      "subject": [
        "Classic Literature",
        "Fiction",
        "Women heroes",
        "American fiction (fictional works by one author)"
      ],
      "id_amazon": [
        "1530997666",
        "149967225X",
        "1494491567"
      ],
      "id_goodreads": [
        "1168951",
        "7186742",
        "7186749",
        "7186748",
        "670773",
        "3285534",
        "7186750",
        "7186744"
      ],
      "id_librarything": [
        "878804"
      ],
      "id_librivox": [
        "9673"
      ],
      "id_overdrive": [
        "B5E30D65-EDD3-4D2C-A225-EB6E6FA63598"
      ],
      "id_project_gutenberg": [
        "47983",
        "14654"
      ],
      "publisher_facet": [
        "1st World Library",
        "1st World Library - Literary Society",
        "Aegypan",
        "Archer House",
        "Arco Publications",
        "BiblioBazaar",
        "Bibliotech Press",
        "Bohlin",
        "Book Jungle",
        "Boomer Books",
        "Classic Books",
        "Classic Publishers",
        "CreateSpace Independent Publishing Platform",
        "Createspace Independent Publishing Platform",
        "Deutscher Taschenbuch-Verlag",
        "Dodo Press",
        "Franklin Classics",
        "Franklin Classics Trade Press",
        "Fredonia Books (NL)",
        "Grosset & Dunlap",
        "Hard Press",
        "Independently Published",
        "IndyPublish",
        "IndyPublish.com",
        "J.B. Lippincott co.",
        "Kessinger Publishing, LLC",
        "LibriVox",
        "Pinnacle Press",
        "Project Gutenberg",
        "Quiet Vision Pub",
        "Spoldzielnia",
        "Star Rover House",
        "T. Nelson",
        "Waking Lion Press"
      ],
      "subject_facet": [
        "American fiction (fictional works by one author)",
        "Classic Literature",
        "Fiction",
        "Women heroes"
      ],
      "_version_": 1739063704462295040,
      "lcc_sort": "PS-3523.00000000.O46 D3 2000",
      "author_facet": [
        "OL44633A Jack London"
      ],
      "subject_key": [
        "american_fiction_(fictional_works_by_one_author)",
        "classic_literature",
        "fiction",
        "women_heroes"
      ],
      "ddc_sort": "813.52"
    }
  ],
  "num_found": 21101,
  "q": "snow",
  "offset": 1
}
```

# Search inside API

# Partner API

# Covers API

# Recent Changes API
