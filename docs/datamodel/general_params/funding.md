---
sidebar_position: 6
---
# Funding references

**Description**: List of information about the grants that supported generation of the raw data annotated by this record. Note that this information is based on OpenAire Projects <br/> 
**Required**: no <br/>
**path**: `metadata.general_parameters.funding_references` <br/>
**Type**: array of object (vocabulary) <br/>
**contains** see [fields available in funding references](#fields-available-in-references)

## Fields available in references

### id
**Description**: The OpenAire id of the projects <br/> 
**Required**: yes <br/>
**path**: `metadata.general_parameters.funding_references.id` <br/>
**Type**: string (keyword) <br/>
**Format** oa:XX___XX 

### title
**Description**: The title of the project <br/> >
**Required**: yes <br/>
**path**: `metadata.general_parameters.funding_references.title` <br/>
**Type**: string (fulltext) <br/>

### props.funder_name
**Description**: The name of the funder<br/> 
**Required**: no <br/>
**path**: `metadata.general_parameters.funding_references.props.funder_name` <br/>
**Type**: string (fulltext) <br/>
