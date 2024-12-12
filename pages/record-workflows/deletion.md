# Retraction workflow

## Deleting unpublished records

Unpublished records can always be deleted and doesn't and it does not require
acceptance. By unpublished records, records in the following state are meant:

* draft
* submitted
* accepted

Note that once the a draft record has been deleted, MBDB has no way of
recovering it!

## Retracting published records

In order to be able to mint DOIs and persistent identifiers in general, it's
crucial that they are just that, persistent.

The need of persistence comes from the fact that as soon as the record is
published online, it can be cited or otherwise referred to. However, neither the
owner nor the MBDB can have the complete overview of how the record is being
referred to, and it could have been written into non-editable systems (e.g.
references in published scientific literature). For the people who then come
looking for the record, they as a bare minimum need, to be able to establish
two things:

1. That they have found the record that was being referred to (establish identity)
2. Whether or not the record is still available (establish accessibility)

To ensure this, a minimal set of metadata needs to be present even for retracted
records.

### Minimal metadata

The minimal metadata includes:

* Title of the record
* List of depositors
* Record ID
* DOI
* Publisher (MBDB)
* Resource type (Dataset)
* Statement that the measurement files and meta data is not present
* Date Published
* Date Retracted

### Initiating retraction

The record owners can initiate this process which will immediate have the effect
that only the minimal metadata is available. However, the information is not
deleted yet, this requires that an [administrator](mbdb-roles.md#administrator).
accepts this. The acceptance is needed as the data cannot be recreated once
deleted so we want to ensure

### Cancelling retraction request

At any point before the administrator has accepted the deletion, the request can
be retracted. However, there's no fixed delay from when the administrator
receives the request until they accept it, so do not rely on being able cancel
a retraction request for longer than a few minutes.

### Acceptance

If there is no evidence of criminal activity, the administrator will normally
accept the deletion request.

All other data (including the files) than the minimally required metadata will
be deleted.
