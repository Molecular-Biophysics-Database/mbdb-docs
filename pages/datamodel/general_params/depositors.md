

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
**Contains**: see [Person](../reusable_elements/person.md)

### principal_contact 

**Description**: The person responsible for the record and the one to contact for inquiries, would typically be the principle investigator group leader, or laboratory head
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors.principal_contact` <br/>
**Type**: object (person) <br/>
**Contains**: see [Person](../reusable_elements/person.md)

### contributors 

**Description**: List of other people who contributed to generating the deposited data, metadata, results, or the deposition itself
**Required**: yes <br/>
**Path**: `metadata.general_parameters.depositors.contributors` <br/>
**Type**: array of object (person) <br/>
**Contains**: see [Person](../reusable_elements/person.md)




