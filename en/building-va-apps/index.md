---
bookTitle: Building VA Apps
---

# Building VA Apps

**Does the**

The [VA Lighthouse APIs](https://developer.va.gov/) enable developers to build applications that help US veterans and others access VA data.

Owned by the [VA Office of Information and Technology](https://department.va.gov/administrations-and-offices/information-and-technology/), an office within the [US Department of Veterans Affairs](https://www.va.gov/), one of [15 departments](https://en.wikipedia.org/wiki/United_States_federal_executive_departments) within the [Executive Branch](https://www.usa.gov/branches-of-government) of the [US Federal Government](https://www.usa.gov/), the [VA Lighthouse APIs](https://developer.va.gov/) include APIs for authorization, appeals, benefits, facilities, forms, health, loan guarantees, and veteran verification. 

``` nonum
curl -X GET 'https://sandbox-api.va.gov/services/va_forms/v0/forms?limit=3' \
--header 'apikey: MYwBMwN9jkyTL4IlLjtVQ0cqxypQ2xx6'
 
curl -X GET 'https://sandbox-api.va.gov/services/va_forms/v0/forms?size=3' \
--header 'apikey: MYwBMwN9jkyTL4IlLjtVQ0cqxypQ2xx6'
```

What have I done:

1. Found the VA Lighthouse APIs.
1. Obtained an API key.
1. Used the APIs to return data.
1. Submitted a support question about pagination.
1. Found relevant websites.