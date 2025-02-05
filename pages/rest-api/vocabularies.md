# Vocabularies

## Introduction

Although the vocabularies are embedded, they're also available exposed to API users.

It should be noted that for a number of vocabularies, MBDB relies on external resources,
so for general searching purposes you should [use those directly](../external/intro.md) rather
than going through MBDB.

### Retrieve vocabulary

The endpoint is:

`https://mbdb-data.org/api/vocabularies/<vocabulary>/<vocabulary-id>`

Where
  * `<vocabulary>` is one of `affiliations`, `chemicals`, `grants`, `instruments`, `languages`, `organisms`
  * `<vocabulary-id>` is the id of the vocabulary. Note that different vocabularies have different ID structures.

Example:

```bash
curl -k  \
  -H "Content-Type: application/json" \
  https://mbdb-data.org/api/vocabularies/organisms/taxid:562
```

### Search vocabularies

#### Parameters

For all endpoints, the following search parameters are available:

| Name | Description       | Value options                  | Default value                             |
|:----:|:-----------------:|:------------------------------:|:-----------------------------------------:|
|   q  | The query string  |   string                       |      `""`                                 |
|   l  | layout            | `list`                         |      `list`                               |
|   p  | The page number   | positive integer               |      `1`                                  |
|   s  | The page size     | positive integer               |      `10`                                 |
| sort | The sorting order | `newest`, `title`, `oldest`, `bestmatch`| `title` if empty query, else `bestmatch` |

Each parameter are set with `=` and parameters should be separated by `&`.

The endpoint is:

`https://mbdb-data.org/api/vocabularies/<vocabulary>?`

Where
  * `<vocabulary>` is one of `affiliations`, `chemicals`, `grants`, `instruments`, `languages`, `organisms`

Example:

```bash
curl -k  \
  -H "Content-Type: application/json" \
  https://mbdb-data.org/api/vocabularies/organisms?q="coli"&s=2
```

### Using vocabulary items in API depositions

As each vocabulary item refers to a single global item
(see [Vocabularies](../vocabularies/intro.md#implementation)), it is enough
include the `id` of the item you want. The rest of the fields are fetched
automatically and **overwrites** their corresponding fields
if they are supplied.

#### Example

If the following (truncated) record is deposited:
```json
{
  "metadata":{
    "general_parameters": {
      "funding_references": [
        {"id": "oa:corda__h2020::f219b1de6eeb4e5c5b2ad39010832d79"}
      ]
    }
  }
}
```

The following will be the resulting (truncated) record:

```json
{
  "metadata":{
    "general_parameters": {
      "funding_references": [
        {
          "@v": "525aefc7-3183-457b-bf48-2c97c3aa4525::1",
          "funder_name": "European Commission",
          "grant_id": "101004806",
          "id": "oa:corda__h2020::f219b1de6eeb4e5c5b2ad39010832d79",
          "title": {
            "en": "MOlecular-Scale Biophysics Research Infrastructure"
          }
        }
      ]
    }
  }
}
```