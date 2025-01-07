# Affiliations

## Source

Our source of information for affiliations is the
[ROR database](https://ror.org/).

## How is the information accessed?

We're accessing ROR from within the MBDB by making calls to their
[REST API](https://ror.readme.io/docs/rest-api).

## I can't find my affiliation, what do I do?

The registration of an affiliations can be initiated
[here](https://ror.org/registry/). Although the registration is fast,
it can take 2-4 weeks before the affiliation becomes available.

Alternatively, you can add your own affiliation locally to MBDB.

Note that affiliations aren't mandatory, so you will still be able
to deposit the record even if you are unable to give an affiliation.
It is also possible request opening a record after it has been deposited.


## Fields available

### id
The id prefix is `ror:`.

**Description**: ROR ID associated with the institution
                 (e.g. ror:03ad39j10)<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

### title
**Description**: Name of the institution<br/>
**Required**: yes <br/>
**Type**: object (Title) <br/>
**Contains**: see [Vocabulary title](../datamodel/reusable_elements/vocabulary_title.md)

### city
**Description**: City the institution is located in (e.g. Pisa)<br/>
**Required**: yes <br/>
**Type**: string (fulltext) <br/>

### state
**Description**: State the institution is located in (e.g. Toscana)'<br/>
**Required**: no <br/>
**Type**: string (fulltext) <br/>

### country
**Description**: Country the institution is located in (e.g. Italy)'<br/>
**Required**: yes <br/>
**Type**: string (fulltext) <br/>