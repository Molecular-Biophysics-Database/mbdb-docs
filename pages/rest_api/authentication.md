# Authentication token

## Personal access tokens

### Generate token

An authentication token is required to use the API for deposition.
The token can be obtained by registering to the MBDB and then follow
the steps outlined in the figure below.

![api_token_img](/static/img/api_token.svg "generate api token")

### Use token
The token should be included in the header of all of your requests like so:

```
Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y
```
It's important to keep the token secret (the one shown is an invalidated token) as it
grants admin rights to your account!

Example using curl:
```bash
curl -k -XPOST \
  -H "Authorization: Bearer BtMgKKIxJl838fN25PHRQtacuTJwTan0GYvDbXDB7PXoPYSHcugjZSrXQu6Y" \
  -H "Content-Type: application/json" \
  -d "@test_mst.json" \
  https://mbdb-data.org/api/records/mst/
```

## Developer application

### Disclaimer

This feature currently exists for testing purposes only, not production
level builds! Please get into contact with [MBDB](mailto:mbdb@ibt.cas.czsubject=Developer%20application) and
outline your use case and your needs.

### Registering your application

Follow the steps outlined below to register your application within the
MBDB.

![app_dev_img](/static/img/app_dev.svg "register application")

