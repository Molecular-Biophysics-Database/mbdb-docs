# REST API

## Disclaimer

Most of the current development has gone into making the frontend
user-friendly so we currently DO NOT RECOMMEND USING THE API at this state.

## Overview

MBDB exposes a JSON based REST API that allows automating data workflows in
a programmatic way to accomplish:

  1. Deposition of records(s)
  2. Retrieval of record(s)
  3. Querying the repository

### Authentication

#### Personal access

Published records can be obtained without authentication, however in
order to be able use the API for deposition and retrieving record drafts,
a personal authentication token is required. See
[Authentication](authentication.md#personal-access-tokens) for how to generate
and use the token.

#### Developer access

We want to aid in capturing and dissemination of scientific data by
allowing others to build on our platform. However, we have only just begun
gathering information on what developers would require and how heavily it
would be used. Currently, we therefore cannot guarantee production level
stability of this feature.

If you want to embed the the MBDB into your own application
(e.g. facility deposition interface that deposits records on behalf of users)
you'll need to register your application within the MBDB. This requires that you
register and then follow the steps outlined in
[Authentication](authentication.md#developer-application).

### Structure of API record

The metadata record is identical to what you get from the frontend,
and the record in this format can directly used to generate a new draft.

### Endpoints

A number of endpoints are available depending on the resource you're trying to
access:

 1. [Records (metadata retrieval and deposition)](records/deposition.md)
 2. Files (retrieval and deposition)
 3. Search query (metadata of records and files)
 4. Vocabularies