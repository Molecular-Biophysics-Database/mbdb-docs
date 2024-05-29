# Person

## given_name 

**Description**: The given name(s), including middlename(s), of the person <br/>
**Required**: yes <br/>
**Type**: string (fulltext) 

## family_name 

**Description**: The family name(s) the person <br/>
**Required**: yes <br/>
**Type**: string (fulltext) 

## identifiers 

**Description**: Persistent personal identifiers, currently only ORCIDs are allowed <br/>
**Required**: yes <br/>
**Type**: array of string (keyword) <br/>
**format**: orcid:123-XXX

## affiliations  

Note that organisms are fetched as a [ROR id](../../external/affiliations.md).

**Description**: The affiliation of the person. Note that this is based on the Research Organization Registry (ROR) <br/> 
**Required**: yes <br/>
**Type**: array of object (vocabulary) <br/>
**contains** see [fields available in affiliations](#fields-available-in-affiliations)

## Fields available in affiliations

### id 

**Description**: The ROR id of the affiliation <br/> 
**Required**: yes <br/>
**Type**: string (keyword) <br/>
**Format** ror:XXXX 

### title

**Description**: The title of the affiliation <br/> 
**Required**: yes <br/>
**Type**: string (fulltext) 

### props.city

**Description**: The city of the affiliation<br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>

### props.state

**Description**: The state of of the affiliation<br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>


### props.country

**Description**: The country of of the affiliation<br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>