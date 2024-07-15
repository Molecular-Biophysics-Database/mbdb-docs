# Sensor

## id
**Description**: The id of the sensor as given by the supplier <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensor.id` <br/>
**Type**: string <br/>

## surface_properties

**Description**: The type of surface properties the sensor has, e.g. Protein A<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensor.surface_properties` <br/>
**Type**: string <br/>

## supplier

**Description**: Information about the supplier of the sensor<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensor.supplier` <br/>
**Type**: object (Supplier) <br/>
**Contains**: see [Supplier](../reusable_elements/supplier.md) 

## supplier

**Description**: How the initialization of the sensor was performed<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensor.sensor_initialization` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Air', 'Glycerol')


## previously_used

**Description**: Whether or not the sensor was used for previous measurements<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.sensor.previously_used` <br/>
**Type**: boolean <br/>

