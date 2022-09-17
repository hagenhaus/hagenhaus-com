# Gallery

Postman Public REST APIs](https://documenter.getpostman.com/view/8854915/Szf7znEe)

# Open Library

* [Developer Center](https://openlibrary.org/developers/api)
* [Solr Reference Guide: Pagination of Results](https://solr.apache.org/guide/solr/latest/query-guide/pagination-of-results.html)
* [Gitter](https://gitter.im/theopenlibrary/Lobby)
* I think the default limit is 100 (try `https://openlibrary.org/search.json?q=snow`). 
* I think pagination is 1-based. 
* Query Parameters: page, limit, fields

``` nonum
https://openlibrary.org/search.json?q=snow&page=1&limit=5&fields=title,author_name
{
  "numFound": 20906,
  "start": 0,
  "numFoundExact": true,
  "docs": [
    {
      "title": "Kate Greenaway's Original Drawings for The Snow Queen",
      "author_name": [
        "Hans Christian Andersen",
        "T. Pym",
        "Laura Barrett",
        "Geraldine McCaughrean",
        "Julia Whelan",
        "Bagram Ibatoulline",
        "Natacha Godeau",
        "Sanna Annukka",
        "Chris Baker",
        "Daniela Terrazzini",
        "Armada Press",
        "Emilie Majarian",
        "Anna Award",
        "Patricia MacCarthy",
        "Yevgeniya Yeretskaya"
      ]
    },
    {
      "title": "A Daughter of the Snows",
      "author_name": [
        "Jack London"
      ]
    },
    {
      "title": "The snow goose",
      "author_name": [
        "Paul Gallico"
      ]
    },
    {
      "title": "The Snow Image and Other Twice-Told Tales",
      "author_name": [
        "Nathaniel Hawthorne"
      ]
    },
    {
      "title": "Heather and Snow",
      "author_name": [
        "George MacDonald"  
      ]
    }
  ],
  "num_found": 20906,
  "q": "snow",
  "offset": null
}
```

``` nonum
https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=1&limit=1
{
  "numFound": 616,
  "num_found": 616,
  "numFoundExact": true,
  "start": 0,
  "q": "the lord of the rings",
  "offset": null,
  "docs": [
    {
      "key": "/works/OL27448W",
      "type": "work",
      "seed": []
      "title": "The Lord of the Rings",
      "title_suggest": "The Lord of the Rings",
      "edition_count": 157,
      "edition_key": [],
      "publish_date": [],
      "publish_year": [],
      "first_publish_year": 1954,
      "number_of_pages_median": 1193,
      "lccn": [],
      "publish_place": [],
      "oclc": [],
      "contributor": [],
      "lcc": [],
      "ddc": [],
      "isbn": [],
      "last_modified_i": 1660754374,
      "ebook_count_i": 14,
      "ebook_access": "borrowable",
      "has_fulltext": true,
      "public_scan_b": false,
      "ia": [],
      "ia_collection": [],
      ...
    }
  ]
}
```