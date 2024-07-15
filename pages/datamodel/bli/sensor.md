# Sensor

## id

**Description**: id to be used for internal links<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensors.id` <br/>
**Type**: link target (string) <br/>

## name

**Description**: Descriptive name of the sensor<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensors.name` <br/>
**Type**: string <br/>

## sensor_id

**Description**: The id of the sensor as given by the supplier<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensors.sensor_id` <br/>
**Type**: string <br/>

## surface_properties

**Description**: The type of surface properties the sensor has, e.g. Protein A<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensors.surface_properties` <br/>
**Type**: string <br/>

## supplier

**Description**: Information about the supplier of the sensor<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensors.supplier` <br/>
**Type**: object (Supplier) <br/>
**Contains**: see [Supplier](../reusable_elements/supplier.md) 

## hydration_time

**Description**: How long the sensor was hydrated before being employed<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensors.hydration_time` <br/>
**Type**: object (Time_duration) <br/>
**Contains**: see [Time_duration](../reusable_elements/duration.md) 

## previously_used

**Description**: Whether or not the sensor was used for previous measurements<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensors.previously_used` <br/>
**Type**: boolean <br/>

## ligand_information

**Description**: Information about the ligand and how it was immobilized<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensors.ligand_information` <br/>
**Type**: object (ligand_information) <br/>
**Contains**: see [Fields available in ligand information](#fields-available-in-ligand-information)

## Fields available in ligand information

## ligand

**Description**: Name (id) of the ligand (entity that is immobilized, from the list of entities of
interest defined in the general parameters<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensors.ligand_information.ligand` <br/>
**Type**: link <br/>
**Target**: `metadata.general_parameters.entities_of_interest.id`

## ligand_immobilization_chemistry

**Description**: The type of chemistry on ligands and surface that allows for immobilization of
the ligands on the surface of the sensor<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensors.ligand_information.ligand_immobilization_chemistry` <br/>
**Type**: string <br/>


## ligand_immobilization_protocol

**Description**: List of steps for immobilizing the ligand on the surface of the sensor<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensors.ligand_information.ligand_immobilization_protocol` <br/>
**Type**: array of object (Step) <br/>
**Contains**: see [Step](../reusable_elements/step.md)
