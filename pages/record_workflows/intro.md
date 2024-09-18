# Introduction

## Record

The central storage object in the MBDB is the record. The record not only stores
the metadata and files, it also contain links, owner information, requests,
versioning information and of particular importance is the state.

The state determines both who can interact with the record and how they can do
so. Below is an overview is given of the state from the perspective of the
record owner (you, the depositor).

## Record states

| State     | Publicly visible | Editable by owner | Has DOI  |
|:---------:|:----------------:|:-----------------:|:--------:|
| draft     |        No        |        Yes        |    No    |
| submitted |        No        |        No         |    No    |
| accepted  |        No        |        No         |    No    |
| published |        Yes       |       Yes(1)      |    Yes   |
| retracting|        No(2)     |        No         |    Yes   |
| deleted   |        No(2)     |        No         |    Yes   |

 1. Editing a published record will normally result in a new version that has to
    go through the approval process again.
 2. Most information will not be visible, however the record page will continue
    to exist and have minimal metadata see [Deleted records](deletion.md).

## Publication workflow

The publication of your dataset follows a similar workflow as when publishing
scientific literature:

1. [Create a draft](publication.md#creating-a-draft)
2. [Submit the draft](publication.md#submitting-the-draft)
3. [The draft gets reviewed](publication.md#reviewing-the-draft)
4. [You decide when to publish](publication.md#publishing-the-accepted-draft)

For a worked example of how this looks like in practice, have a look at the
[Tutorial](https://mbdb.test.du.cesnet.cz/tutorial).

## Retraction workflow

Records that as not been published can always be fully deleted (see
[Deleting unpublished records](deletion.md#deleting-unpublished-records) for
further details).

It's possible to retract published records from the MBDB and it can be be
initiated by the owner at any point. However it comes with a few important
caveats:

1. The raw data and metadata has been placed in the public domain (see
   [Licensing](../license/intro.md)) so people are free to use and distribute
   existing copies.
2. The record landing page will still exist and have minimal data associated
   with it. This is a requirement in order to have persistent identifiers.

See [Retracting published records](deletion.md#retracting-published-records) for
further details.