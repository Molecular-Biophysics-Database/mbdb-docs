# Deposition

## Metadata

The endpoint is:

`https://mbdb-data.org/api/records/<model>/`

Where:
  * `<model>` is one of `bli, itc, mst, spr`

Example using curl:

```bash
curl -XPOST \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  -d "@test_mst.json" \
  https://mbdb-data.org/api/records/mst/
```

## Associated files

In order to upload a file, a (minimal) metadata record already needs to exist.
Unlike with the metadata record, it takes multiple steps to upload each file:

 1. Create file entry
 2. Upload the file
 3. Upload file metadata
 4. Commit the changes

### Create file entry

The endpoint is:

`https://mbdb-data.org/api/records/<model>/<record-id>/draft/files`

Where:
  * `<model>` is one of `bli, itc, mst, spr`
  * `<record-id>` is the record id

The filename(s) should be supplied in the body of the request as
the following JSON array:
```json
[{"key": "<file-name>"}]
```
Where:
  * `<file-name>` is the filename (including extension)

Example using curl:

```bash
curl -XPOST \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  -d '[{"key": "example.txt"}]' \
  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files

```

### Upload file content

The endpoint is:

`https://mbdb-data.org/api/records/<model>/<record-id>/draft/files/<file-name>/content`

Where:
  * `<model>` is one of `bli, itc, mst, spr`
  * `<record-id>` is the record id
  * `<file-name>` is the filename (including extension)

The file content should be uploaded as an octet-stream and include the content
of the file in the request of the body

Example using curl:

```bash
curl -XPUT \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/octet-stream" \
  -d '@example.txt' \
  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files/example.txt/content
```

### Add metadata to file
The endpoint is:
`https://mbdb-data.org/api/records/<model>/<record-id>/draft/files/<file-name>`

Where:
  * `<model>` is one of `bli, itc, mst, spr`
  * `<record-id>` is the record id
  * `<file-name>` is the filename (including extension)

The file meta should be uploaded as a JSON and include the metadata
in the request of the body (see [Files](../../datamodel/files.md#fields-available-in-files-metadata)
for available metadata fields).

Example using curl:

```bash
curl -XPUT \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  -d '{"description": "Example of a description"}' \
  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files/example.txt
```
### Commit changes to file

The endpoint is:
`https://mbdb-data.org/api/records/<model>/<record-id>/draft/files/<file-name>/commit`

Where:
  * `<model>` is one of `bli, itc, mst, spr`
  * `<record-id>` is the record id
  * `<file-name>` is the filename (including extension)

Example using curl:

```bash
 curl -XPOST \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  https://mbdb-data.org/api/records/mst/zv0gv-btp27/draft/files/example.txt/commit
```