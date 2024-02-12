---
sidebar_position: 4
---
# Molecular assembly

## external_databases

**Description**: List of identifiers to records in external databases containing information about the molecular assembly as a whole can be specified here (e.g. PDB:1YQ2 ); information about the individual components should be specified in the details of the individual components <br/>
**Required**: no <br/>
**Path**: `metadata.general_parameters.entities_of_interest.external_databases` <br/>
**Type**: string (keyword) <br/>
**Format**: ('pdb:XXXX','uniprot:XXXXX')

## components

**Description**: Description of the individual components (e.g. polypeptide, heme, lipids, metal ions etc.) the molecular assembly is composed of (e.g. Hemoglobin alpha) and how many copies of each component were present <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest.components` <br/>
**Type**: array of polymorphic object (Assembly_component) <br/>
**Type_field**: type 
**Contains**: see [Fields available in assembly components](#fields-available-in-assembly-components)


## molecular_weight

**Description**: The molecular weight of the molecular assembly<br/>
**Required**: yes <br/>
**Type**: object (Molecular_weight) <br/>
**Contains**: see [Molecular weight](../../reusable_elements/molecular_weight.md)

## chemical_modifications

**Description**: List describing deliberate modifications made to the molecular assembly through chemical, biochemical, or physical means'<br/>
**Required**: no <br/>
**Type**: array of object (Modification)  <br/>
**Contains** see [Modification](../../reusable_elements/modification.md)


## additional_specifications

**Description**: Additional information about the macromolecular assembly can be specified here<br/>
**Required**: no <br/>
**Type**: array of string (fulltext) <br/>
 

## Fields available in assembly components

### name 

**Description**: Description of the individual components (e.g. polypeptide, heme, lipids, metal ions etc.) the molecular assembly is composed of (e.g. Hemoglobin alpha) and how many copies of each component were present <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest.components.name` <br/>
**Type**: string (keyword) <br/>

### type 

**Description**: The type of component, options are (biological) Polymer and Chemical <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest.components.type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Polymer', 'Chemical')

### copy_number 

**Description**: Number of copies of the component within the assembly, -1 if unknown <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest.components.type` <br/>
**Type**: number (float) <br/>
**Minimum**: -1 <br/>


## The fields from one of the following:

### Polymer

See [Polymer](polymer.md)  

### Chemical

See [Chemical](chemical.md)  
