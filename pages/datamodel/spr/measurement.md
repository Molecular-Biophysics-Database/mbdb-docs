# Measurement

## id

**Description**: Unique ID to be used as a link target<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.id` <br/>
**Type**: link target (string) <br/>

## name

**Description**: Name (id) of the measurement which must be
unique within a record (i.e. triplicates
must be named individually in the raw data
file). The name must allow location of the
measurement data within the raw data file
as well as processed data files if these
are present<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.name` <br/>
**Type**: string <br/>

## measurement_position

**Description**: Name (id) of the measurement position<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.measurement_position` <br/>
**Type**: link (sensor) <br/>
**Target**: `metadata.method_specific_parameters.measurement_positions.id`

## reference_measurement_position

**Description**: Name (id) of the measurement position<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurements.reference_measurement_position` <br/>
**Type**: link (sensor) <br/>
**Target**: `metadata.method_specific_parameters.measurement_positions.id`

## samples

**Description**: List of samples that went across a 
measurement position during data collection<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.sample` <br/>
**Type**: object (Sample) <br/>
**Contains**: see [Fields available in sample](#fields-available-in-sample)

## reference_samples

**Description**: List of samples that went across the
reference measurement position during data collection<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurements.reference_samples` <br/>
**Type**: object (Sample) <br/>
**Contains**: see [Fields available in sample](#fields-available-in-sample)

## Fields available in sample

## measurement_protocol_step

**Description**: Name (id) of the measurement step in the 
measurement protocol where the sample was measured<br/> 
**Required**: yes <br/>
**Type**: link (sensor) <br/>
**Target**: `metadata.method_specific_parameters.measurement_protocol.id`

## chemical_environment

**Description**: Name (id) of the chemical environment of
the sample (from the chemical environments defined in the general parameters)<br/> 
**Required**: yes <br/>
**Type**: link (chemical_environment) <br/>
**Target**: `metadata.general_parameters.chemical_environments.id`

## analytes

**Description**: List of names (ids) of entities (from the
entities of interest defined in the
general parameters) that was used to alter
the behavior of the target(s) or entities
present at varying concentrations for a
series of measurements and their concentrations<br/> 
**Required**: no <br/>
**Type**: object (Entity_constituent) <br/>
**Contains**: see [Entity_constituent](../reusable_elements/entity_constituent.md) <br/>

## temperature
**Description**: Temperature of the sample while being measured<br/> 
**Required**: no <br/>
**Type**: object (Temperature) <br/>
**Contains**: see [Temperature](../reusable_elements/temperature.md) <br/>

## preparation_protocol
**Description**: List of steps taken to prepare the sample<br/> 
**Required**: no <br/>
**Type**: array of object (Step) <br/>
**Contains**: see [Step](../reusable_elements/step.md) <br/>

## position
**Description**: Position of the sample within the sample holder<br/> 
**Required**: no <br/>
**Type**: string (keyword) <br/>
