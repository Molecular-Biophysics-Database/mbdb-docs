---
sidebar_position: 4
---

# Depositors

**Description**: Information about the depositors (authors) of this record <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors` <br/>
**Type**: object (person) <br/>
**Contains**: see [Fields available in depositors](#fields-available-in-depositors)

## Fields available in depositors

### depositor

**Description**: The person who made the deposition to MBDB <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors.depositor` <br/>
**Type**: object (person) <br/>
**Contains**: see [Fields available in person](#fields-available-in-person)

### principal_contact 

**Description**: The person responsible for the record and the one to contact for inquiries, would typically be the principle investigator group leader, or laboratory head
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors.principal_contact` <br/>
**Type**: object (person) <br/>
**Contains**: see [Fields available in person](#fields-available-in-person)

### contributors 

**Description**: List of other people who contributed to generating the deposited data, metadata, results, or the deposition itself
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors.contributors` <br/>
**Type**: array of object (person) <br/>
**Contains**: see [Fields available in person](#fields-available-in-person)

## Fields available in person

### given_name 

**Description**: The given name(s), including middlename(s), of the person <br/>
**Required**: yes <br/>
**Type**: string (fulltext) 

### family_name 

**Description**: The family name(s) the person <br/>
**Required**: yes <br/>
**Type**: string (fulltext) 

### identifiers 

**Description**: Persistent personal identifiers, currently only ORCIDs are allowed <br/>
**Required**: yes <br/>
**Type**: array of string (keyword) <br/>
**format**: orcid:123-XXX

### affiliations  

**Description**: The affiliation of the person. Note that this is based on the Research Organization Registry (ROR) <br/> 
**Required**: yes <br/>
**Type**: array of object (vocabulary) <br/>
**contains** see [fields available in affiliations](#fields-available-in-affiliations)

### Fields available in affiliations

#### id 

**Description**: The ROR id of the affiliation <br/> 
**Required**: yes <br/>
**Type**: string (keyword) <br/>
**Format** ror:XXXX 


#### title

**Description**: The title of the affiliation <br/> 
**Required**: yes <br/>
**Type**: string (fulltext) 

#### props.city

**Description**: The city of the affiliation<br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>

#### props.state

**Description**: The state of of the affiliation<br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>


#### props.country

**Description**: The country of of the affiliation<br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>



