# Measurement position

## id

**Description**: id to be used for internal links<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.id` <br/>
**Type**: link target (string) <br/>

## name

**Description**: Name of measurement spot<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.name` <br/>
**Type**: string <br/>


## flow_cell

**Description**: The flow cell where the measurement spot is located<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.flow_cell` <br/>
**Type**: string <br/>

## position

**Description**: Position of the measurement spot within the flow cell<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.position` <br/>
**Type**: string <br/>

## ligand_information

**Description**: Information about the ligand and how it was immobilized<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.ligand_information` <br/>
**Type**: object (Ligand_information) <br/>
**Contains**: see [Fields available in ligand information](#fields-available-in-ligand-information)

## Fields available in ligand information

## ligand

**Description**: Name (id) of the ligand (entity that is immobilized, from the
list of entities of  interest defined in the general parameters)<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.ligand_information.ligand` <br/>
**Type**: link <br/>
**Target**: `metadata.general_parameters.entities_of_interest.id`

## ligand_immobilization_chemistry

**Description**: The type of chemistry on ligands and surface that allows for
immobilization of the ligands on the surface of the sensor<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.ligand_information.ligand_immobilization_chemistry` <br/>
**Type**: string <br/>


## ligand_immobilization_protocol

**Description**: List of steps for immobilizing the ligand on the surface of the
sensor<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions.ligand_information.ligand_immobilization_protocol` <br/>
**Type**: array of object (Step) <br/>
**Contains**: see [Step](../reusable_elements/step.md)
