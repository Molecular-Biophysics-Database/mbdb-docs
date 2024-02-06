---
sidebar_position: 4
---

# Depositors

**Description**: Information about the depositors (authors) of this record <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors` <br/>
**Type**: object <br/>
**Contains**: see available fields 


## Available fields

## depositor

**Description**: The person who made the deposition to MBDB <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors.depositor` <br/>
**Type**: object <br/>
**Contains**: see person


## principal_contact 

**Path**: `metadata.general_parameters.depositors.principal_contact` <br/>
**Required**: yes <br/>
**Type**: object <br/>
**Contains**: see person<br/>
**Description**: The person responsible for the record and the one to contact for inquiries, would typically be the principle investigator group leader, or laboratory head

## contributors 

**Path**: `metadata.general_parameters.depositors.contributors` <br/>
**Required**: yes <br/>
**Type**: array of objects <br/>
**Contains**: see person<br/>
**Description**: List of other people who contributed to generating the deposited data, metadata, results, or the deposition itself

