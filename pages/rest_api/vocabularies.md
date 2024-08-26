# Vocabularies

## Introduction

Although the vocabularies are embedded, they're also available exposed to API users.

It should be noted that for a number of vocabularies, MBDB relies on external resources,
so for general searching purposes you should [use those directly](../external/intro.md) rather
than going through MBDB.

### Retrieve vocabulary

The endpoint is:

`https://mbdb.test.du.cesnet.cz/api/vocabularies/<vocabulary>/<vocabulary-id>`

Where
  * `<vocabulary>` is one of `affiliations`, `chemicals`, `grants`, `instruments`, `languages`, `organisms`
  * `<vocabulary-id>` is the id of the vocabulary. Note that different vocabularies have different ID structures.

Example:

```bash
curl -k  \
  -H "Content-Type: application/json" \
  https://mbdb.test.du.cesnet.cz/api/vocabularies/organisms/taxid:562
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

`https://mbdb.test.du.cesnet.cz/api/vocabularies/<vocabulary>?`

Where
  * `<vocabulary>` is one of `affiliations`, `chemicals`, `grants`, `instruments`, `languages`, `organisms`

Example:

```bash
curl -k  \
  -H "Content-Type: application/json" \
  https://mbdb.test.du.cesnet.cz/api/vocabularies/organisms?q="coli"&s=2
```
