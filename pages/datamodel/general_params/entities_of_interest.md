# Entities of interest

**Description**: List of the entities that are being directly measured, as well as the entities that are being used as a variable to influence the behavior of the directly measured entities (e.g. lysozyme, NAG3, NaCl). IMPORTANT! If the pH was varied by individually prepared chemical environments these should be specified individually in chemical environments <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest` <br/>
**Type**: array of polymorphic object (Entity) <br/>
**Type_field**: type <br/>
**Contains**: see [Fields available in entities of interest](#fields-available-in-entities-of-interest)

## Fields available in entities of interest

## id

**Description**: Unique ID for the entity to be used as a link <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest.id` <br/>
**Type**: link_target (string) <br/>

## name

**Description**: Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample<br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest.name` <br/>
**Type**:  string <br/>

## type

**Description**: The type of the entity, where the options are (biological) Polymer, Chemical, Molecular assembly (also includes all proteins composed of more than one polypeptide chain) or Complex substance. Chemical polymers such as PEG 5000 should be described as being a Chemical. Complex substance refers to substances which are not exactly specified by their exact chemical composition by the time measurement were performed, but e.g. blood, serum, plant extract <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.entities_of_interest.type` <br/>
**Type**:  enumerator (string) <br/>
**Options**: ('Polymer', 'Chemical', 'Molecular assembly', 'Complex substance of biological origin', 'Complex substance of environmental origin',
'Complex substance of chemical origin', 'Complex substance of industrial production origin')

## The fields from one of the following objects

### Polymer

See [Polymer](../reusable_elements/polymer.md)

### Chemical

See [Chemical](../reusable_elements/chemical.md)

### Molecular assembly

See [Molecular assembly](../reusable_elements/molecular_assembly.md)

### Complex substance of biological origin

See [Complex substance of biological origin](../reusable_elements/biological_origin.md)

### Complex substance of environmental origin

See [Complex substance of environmental origin](../reusable_elements/environmental_origin.md)

### Complex substance of chemical origin

See [Complex substance of chemical origin](../reusable_elements/chemical_origin.md)

### Complex substance of industrial origin

See [Complex substance of industrial origin](../reusable_elements/industrial_origin.md)