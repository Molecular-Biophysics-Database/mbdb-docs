# Measurement

## id

**Description**: Unique ID to be used as a link target<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.id` <br/>
**Type**: link target (string) <br/>

## name

**Description**: Name (id) of the measurement which must be
unique within a record (i.e. triplicates must be named individually in the raw data
file). The name must allow location of the measurement data within the raw data file
as well as processed data files if these are present<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.name` <br/>
**Type**: string <br/>


## duration

**Description**: The time duration of the measurement<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.duration` <br/>
**Type**: object (Duration) <br/>
**Contains**: see [Duration](../reusable_elements/duration.md)


## temperature

**Description**: The temperature the measurement was performed at<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.temperature` <br/>
**Type**: object (Temperature) <br/>
**Contains**: see [Temperature](../reusable_elements/temperature.md)

## sample

**Description**: Information about the sample including
concentrations and which chemical environment the sample was composed of<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.sample` <br/>
**Type**: object (Sample) <br/>
**Contains**: see [Fields available in sample](#fields-available-in-sample)

## Fields available in sample

## targets
**Description**: Information about the sample including
concentrations of ligands and targets, and which chemical environment the sample was composed of<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.targets` <br/>
**Type**: object (Entity_constituent) <br/>
**Contains**: see [Entity_constituent](../reusable_elements/entity_constituent.md) <br/>


## chemical_environments
**Description**: Name (id) of the chemical environment of
the sample (from the chemical environments defined in the general parameters)<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.chemical_environment` <br/>
**Type**: link <br/>
**Link Target**: Chemical environment<br/>

## preparation_protocol
**Description**: List of steps taken to prepare the
sample, ending at the point where it was placed in the measurement
container. Information include operations like filtration and which
filter material and pore-size was used should be added<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurements.preparation_protocol` <br/>
**Type**: array of object (Step) <br/>
**Contains**: See [Step](../reusable_elements/step.md)
