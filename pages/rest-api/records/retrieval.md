# Retrieval

## Specific published record

The endpoint is:

`https://mbdb-data.org/api/records/<model>/<record-id>`

Where:
  * `<model>` is one of `bli, itc, mst, spr`
  * `<record-id>` is the record id

Example using curl:

```bash
curl \
  https://mbdb-data.org/api/records/mst/zv0gv-btp27/
```

## Specific draft

The endpoint is:

`https://mbdb-data.org/api/records/<model>/<record-id>/draft`

Where:
  * `<model>` is one of `bli, itc, mst, spr`
  * `<record-id>` is the record id

Note that it requires authentication to access drafts.

Example using curl:

```bash
curl \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft
```