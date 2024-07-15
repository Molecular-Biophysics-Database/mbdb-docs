# Method specific parameters

## schema_version 

**Description**: The schema version used to annotate the BLI method specific parameters <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.schema_version` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('0.9.6') <br/>

## experiment_type 

**Description**: The type of physical parameter that was sought <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.experiment_type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Affinity','Concentration', 'Other') <br/>

## plates 

**Description**: List of the plate types used for the measurements <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.plates` <br/>
**Type**: array of object (Plate) <br/>
**Contains**: See [Plate](plate.md) <br/>

## sensors 

**Description**: List of the senors used for the measurements, reference sensors included <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensors` <br/>
**Type**: array of object (Sensor) <br/>
**Contains**: See [Sensor](sensor.md) <br/>

## measurement_protocol 

**Description**: List of the steps in the measurement protocol<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol` <br/>
**Type**: array of object (BLI_protocol_step) <br/>
**Contains**: See [BLI_protocol_step](sensor.md) <br/>

## measurements

**Description**: List of the steps in the measurement protocol<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements` <br/>
**Type**: array of object (BLI_measurement) <br/>
**Contains**: See [BLI_measurement](measurement.md) <br/>

## data_analysis
**Description**: The details of how data analysis
was performed to obtain results<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis` <br/>
**Type**: array of object (BLI_data_analysis) <br/>
**Contains**: See [BLI_data_analysis](data_analysis.md) <br/>