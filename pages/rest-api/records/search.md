# Search

## Parameters

For all endpoints, the following search parameters are available:

| Name | Description       | Value options                  | Default value                             |
|:----:|:-----------------:|:------------------------------:|:-----------------------------------------:|
|   q  | The query string  |   string                       |      `""`                                 |
|   l  | layout            | `list`                         |      `list`                               |
|   p  | The page number   | positive integer               |      `1`                                  |
|   s  | The page size     | positive integer               |      `10`                                 |
| sort | The sorting order | `newest`, `oldest`, `bestmatch`| `newest` if empty query, else `bestmatch` |

Each parameter are set with `=` and parameters should be separated by `&`.

Example:

```bash
curl -k  \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  https://mbdb-data.org/api/user/records/mst/?q="example"&p=2
```

## Published records from specific model

The endpoint is:

`https://mbdb-data.org/api/records/<model>/?`

Where:
  * `<model>` is one of `bli, itc, mst, spr`

Example using curl:

```bash
curl -k  \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  https://mbdb-data.org/api/user/records/mst/?q="example"
```

## Published records from all models

The endpoint is:

`https://mbdb-data.org/api/search/?`

Example using curl:

```bash
curl -k  \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  `https://mbdb-data.org/api/search/?q="example"`
```

## Records and drafts from specific model and specific user

The endpoint is:

`https://mbdb-data.org/api/user/records/<model>/?`

Note that it requires authentication to access drafts.

Where:
  * `<model>` is one of `bli, itc, mst, spr`

Example using curl:

```bash
curl \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  https://mbdb-data.org/api/user/records/mst/?q="example"
```


## All records and drafts from specific user

The endpoint is:

`https://mbdb-data.org/api/user/search/?`


Where:
  * `<model>` is one of `bli, itc, mst, spr`

Example using curl:

```bash
curl \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  https://mbdb-data.org/api/user/search/?q="example"
```