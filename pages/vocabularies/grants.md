# Grants

## Source

We're currently relaying on OpenAire, in particular OpenAire projects to
extract funding information.

## How is the information accessed?

We're accessing the information from within the MBDB using their
[REST API](https://graph.openaire.eu/develop/api.html#projects).

## I can't find my funding information, what should I do?

You can add your own funding resource
[here](https://mbdb-data.org/vocabularies/grants/_new). Note that you
have to be logged in to create a new vocabulary item, and that it will be
available to everyone.

Alternatively you can ask your funding agency to push their information to the
OpenAire projects. Information about that can be found
[here](https://www.openaire.eu/funders-how-to-join-guide).

Lastly, it is also possible to add your own affiliation locally to MBDB.

## Fields available

### id
The id prefix is `oa:`.

**Description**: The OpenAire project id (e.g. aka_________::0138cbca472312ad7dd56c2cdb8a55c2) <br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

### title
**Description**: Name of project the grant is given to (e.g. The atherogenic
potential of phospholipid transphospholipid transfer protein, PLTP)<br/>
**Required**: yes <br/>
**Type**: object (Title) <br/>
**Contains**: see [Vocabulary title](../datamodel/reusable_elements/vocabulary_title.md)

### funder_name
**Description**: The name of the funder (e.g. Academy of Finland)<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

### grant_id
**Description**: The ID of the grant as provided by the funder (e.g.
213912)<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>