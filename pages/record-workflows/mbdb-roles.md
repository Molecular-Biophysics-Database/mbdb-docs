# Roles

## Owner (you, the depositor)

### Role

Ensuring the correctness of the data, deciding when the record is ready for
submission and publication.

### Task

To provide as accurate information as possible to ensure that the data can be
reused.

### Rights

| Right\State | Draft | Submitted | Accepted | Published  |
|:-----------:|:-----:|:---------:|:--------:|:----------:|
| Read        |  Yes  |    Yes    |    Yes   |     Yes    |
| Edit        |  Yes  |    No     |    No    |     Yes(1) |
| Delete      |  Yes  |    Yes    |    Yes   |     Yes(2) |

 1. Editing a published record will normally result in a new version that has to
    go through the approval process again.
 2. Most information will not be visible, however the record page will continue
    to exist and have minimal metadata see [Deleted records](deletion.md).

## Reviewer

### Role

To spot critical missing metadata information, unlikely experimental conditions,
obscenities, and fraudulence. Their role is not to evaluate the scientific
relevance of the draft, rather they're there to ensure that the records are
highly likely to represent an actual measurement which contains sufficient
information to interpret it.

### Task

To review the submitted drafts and either accept or reject the draft. They're
scientific staff that are familiar with the technique they're reviewing.

### Rights

| Right\State | Draft | Submitted | Accepted | Published |
|:-----------:|:-----:|:---------:|:--------:|:---------:|
| Read        |  No   |    Yes    |    No    |     Yes   |
| Edit        |  No   |    no     |    No    |     No    |
| Delete      |  No   |    no     |    No    |     No    |

## Editor

### Role

To ensure and improve the quality of the records in the MBDB, from a scientific
metadata perspective.

### Task

To help records owners in case where they're unsure, or unable to make changes
themselves. This person is scientific personal in the MBDB staff, who may not be
an expert of individual methods but is an expert on metadata and the MBDB data
model. Furthermore, they have right to delete records on scientific grounds
(e.g. gross scientific misconduct).

### Rights

| Right\State | Draft | Submitted | Accepted | Published |
|:-----------:|:-----:|:---------:|:--------:|:---------:|
| Read        |  Yes  |    Yes    |   Yes    |     Yes   |
| Edit        |  Yes  |    Yes    |   Yes    |     Yes   |
| Delete      |  Yes  |    Yes    |   Yes    |     Yes(2)|

 2. Most information will not be visible, however the record page will continue
    to exist and have minimal metadata see [Deleted records](deletion.md).

## Administrator

### Role

To ensure and improve the quality of the records in the MBDB, from a technical
perspective.

### Task

Ensure that changes to the data model is propagated into existing records, if
needed. Transferring of ownership in cases where it's needed but cannot be
accomplished by the by the owners themselves (e.g. in the event of death of an
owner). Furthermore the there roles is to prevent MBDB being a source of
criminal activities and obscenities.

### Rights

| Right\State | Draft | Submitted | Accepted | Published |
|:-----------:|:-----:|:---------:|:--------:|:---------:|
| Read        |  Yes  |    Yes    |   Yes    |     Yes   |
| Edit        |  Yes  |    Yes    |   Yes    |     Yes   |
| Delete      |  Yes  |    Yes    |   Yes    |     Yes(2)|

 2. Most information will not be visible, however the record page will continue
    to exist and have minimal metadata see [Deleted records](deletion.md).