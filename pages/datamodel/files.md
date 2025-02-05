# Files (Raw measurements)

The list of files is available at the link found in the metadata record
`links.files`.

## Example

```json
{
  "enabled": true,
  "links": {
    "self": "https://mbdb-data.org/api/records/mst/fy6g2-hh950/draft/files"
  },
  "entries": [
    {
      "key": "ttwj3-9se17(1).json",
      "storage_class": "L",
      "checksum": "md5:d227d2a91130bd658f6e11fe242a39d4",
      "size": 3187,
      "created": "2024-07-25T12:50:59.648695+00:00",
      "updated": "2024-07-25T12:51:00.666658+00:00",
      "status": "completed",
      "mimetype": "application/json",
      "version_id": "9bb959f8-81e2-4f07-b59d-b274a41c25cf",
      "file_id": "7190537b-6005-43d7-bf59-1056e3693c16",
      "bucket_id": "6bff9299-17e2-4556-82cf-e53ce80fa09f",
      "metadata": {
        "context": "Derived measurement data",
        "content_type": "Binary",
        "originates_from": "User"
      },
      "access": {
        "hidden": false
      },
      "links": {
        "commit": "https://mbdb-data.org/api/records/mst/fy6g2-hh950/draft/files/ttwj3-9se17%281%29.json/commit",
        "content": "https://mbdb-data.org/api/records/mst/fy6g2-hh950/draft/files/ttwj3-9se17%281%29.json/content",
        "preview": "https://mbdb-data.org/mst/fy6g2-hh950/files/ttwj3-9se17%281%29.json/preview",
        "self": "https://mbdb-data.org/api/records/mst/fy6g2-hh950/draft/files/ttwj3-9se17%281%29.json"
      }
    }
  ],
  "default_preview": null,
  "order": []
}
```

## Files metadata

Inside the files object there's a number of automatically generated fields
as well as the `metadata` field which contains

**Required**: yes <br/>
**Path**: `entries.metadata` <br/>
**Type**: Files (object) <br/>
**Contains**: [Fields available in Files metadata](#fields-available-in-files-metadata)

## Fields available in Files metadata

### content_type
**Description**: Type of the file content in terms of how it can be read (text, binary, etc.) <br/>
**Required**: yes <br/>
**Type**: enumerator (keyword) <br/>
**Options**: ('text', 'binary','text and binary')

### creation_date
**Description**: The date when the data was deposited; automatically generated <br/>
**Required**: yes <br/>
**Type**: string <br/>
**Format**: YYYY-MM-DD <br/>

### context
**Description**: The context the file should be understood within (e.g. raw measurement data) <br/>
**Required**: yes <br/>
**Type**: enumerator (keyword) <br/>
**Options**: ('raw measurement data',
              'derived measurement data',
              'quality control report')

### originates_from
**Description**: What is the source of the file <br/>
**Required**: yes <br/>
**Type**: enumerator (keyword) <br/>
**Options**: ('Instrument software', 'User', 'MBDB')


### description

**Description**: Short description of what the file contains <br/>
**Required**: no <br/>
**Type**: string (fulltext) <br/>

### recommended_software

**Description**: The name of the software recommended for opening and working with the files <br/>
**Required**: no <br/>
**Type**: string (fulltext) <br/>

### processing_steps

**Description**: List of the processing steps performed on the file before it was deposited (e.g. exported to xlsx) <br/>
**Required**: no <br/>
**Type**: array of object (Processing_step) <br/>
**Contains**: see [Processing step](reusable_elements/processing_step.md)