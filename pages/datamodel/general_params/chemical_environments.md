---
sidebar_position: 11
---

# Chemical environments

**Description**: Information about the depositors (authors) of this record <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.chemical_environments` <br/>
**Type**: object (person) <br/>
**Contains**: see [Fields available in chemical environments](#fields-available-in-chemical-environments)

## Fields available in chemical environments

## id

**Description**: Unique ID for the chemical environment to be used as a link <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.chemical_environments.id` <br/>
**Type**: string (keyword) <br/>

## name

**Description**: Name of the chemical environment (e.g. Measurement Buffer). The name must be unique within a record as it will be referred to the in method specific section in when describing the composition of the individual samples or measurement steps <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.chemical_environments.name` <br/>
**Type**: string (fulltext) <br/>

## solvent

**Description**: Information about the solvent component(s) of the chemical environment (e.g. water, D2O, DMSO, EtOH) can be specified here <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.chemical_environments.solvent` <br/>
**Type**: array of object (Chemical_constituent) <br/>
**contains**: see [Chemical_constituent](../reusable_elements/chemical_constituent.md)

## constituents

**Description**: Information about the solvent component(s) of the chemical environment (e.g. water, D2O, DMSO, EtOH) can be specified here <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.chemical_environments.constituents` <br/>
**Type**: array of object (Chemical_constituent) <br/>
**contains**: see [Constituent](../reusable_elements/constituent.md)

## ph
**Description**: Information about the solvent component(s) of the chemical environment (e.g. water, D2O, DMSO, EtOH) can be specified here <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.chemical_environments.ph` <br/>
**Type**: number (float) <br/>

## additional_specifications
**Description**: Additional information about the chemical environment can be specified here (e.g. prepared just prior to conducting the measurement, additional treatments like UV irradiation, specific storage container of chemical environment if that influenced the measurement etc. <br/>
**Required**: no <br/>
**Path**: `metadata.general_parameters.chemical_environments.additional_specifications` <br/>
**Type**: array of string (fulltext) 
