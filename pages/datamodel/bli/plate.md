# Plates

## id

**Description**: id to be used for internal links<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.plates.id` <br/>
**Type**: link target (string) <br/>

## name

**Description**: Name (id) of the plate which must be unique within a record<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.plates.name` <br/>
**Type**: string <br/>

## wells

**Description**: Number of wells in the plate<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.plates.wells` <br/>
**Type**: enumerator (string) <br/>
**Options**: ("96","384")


## type
**Description**: The type of the plate (e.g. half-area black polystyrene)<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.plates.type` <br/>
**Type**: string <br/>

## supplier
**Description**: Information about the supplier of the plate<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.plates.supplier` <br/>
**Type**: object (Supplier) <br/>
**Contains**: See [Supplier](../reusable_elements/supplier.md)

## sealing
**Description**: The type of sealing used to seal the top of the plate<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.plates.supplier` <br/>
**Type**: string <br/>

## surface_modification
**Description**: If the plate had a modified surface, the
modification can specified here (e.g. Non-binding surface)<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.plates.surface_modification` <br/>
**Type**: object (Plate_surface_modification)<br/>
**Contains**: see [Available fields in plate surface modification](#available-fields-in-plate-surface-modification)

## Available fields in plate surface modification

## type
**Description**: The expected type of surface of the wells
after the modification (e.g. BSA coated)<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.plates.surface_modification.type` <br/>
**Type**: string <br/>

## protocol
**Description**: List of protocol steps used to modify the surface of the wells<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.plates.surface_modification.protocol` <br/>
**Type**: array of object (Step) <br/>
**Contains**: See [Step](../reusable_elements/step.md)

