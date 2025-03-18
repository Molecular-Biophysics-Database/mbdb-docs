# Method specific parameters

## schema_version

**Description**: The schema version used to annotate the SPR method specific
parameters <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.schema_version` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('0.10.0') <br/>

## experiment_type

**Description**: The type of physical parameter that was sought <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.experiment_type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Affinity','Concentration', 'Other') <br/>

## sensor

**Description**: Sensor used for the measurements <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.sensor` <br/>
**Type**: object (Sensor) <br/>
**Contains**: See [Sensor](sensor.md) <br/>

## measurement_positions

**Description**: Information about each of the positions
where data was collected including reference positions <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_positions` <br/>
**Type**: array of object (Measurement_position) <br/>
**Contains**: See [Measurement_position](measurement_position.md) <br/>

## measurement_protocol

**Description**: List of the steps in the measurement protocol <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol` <br/>
**Type**: array of object (Measurement_step) <br/>
**Contains**: See [Measurement_protocol](measurement_protocol.md) <br/>

## measurements

**Description**: List of the steps in the measurement protocol <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements` <br/>
**Type**: array of object (Measurement) <br/>
**Contains**: See [Measurement](measurement.md) <br/>

