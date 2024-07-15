# BLI protocol step

## id
**Description**: id to be used for internal links<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.id` <br/>
**Type**: link target (string) <br/>

## name

**Description**: Descriptive name (id) of the step in the
measurement protocol which must be unique within a record<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.name` <br/>
**Type**: string <br/>

## type
**Description**: Which type of step in the measurement protocol this refers to<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Association', 'Baseline', 'Dissociation', 'Regeneration', 'Load', 'Wash', 'Activation')

## start_time
**Description**: The numerical value of the start point of
the measurement step relative to the beginning of the measurement<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.start_time` <br/>
**Type**: object (Time_duration) <br/>
**Contains**: see [Time_duration](../reusable_elements/duration.md) 

## time_length
**Description**: The numerical value of the total time of the measurement step took<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.time_length` <br/>
**Type**: object (Time_duration) <br/>
**Contains**: see [Time_duration](../reusable_elements/duration.md) 

## shaking_speed
**Description**: The numerical value of the shaking speed
of the plate during the measurement step<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.shaking_speed` <br/>
**Type**: object (Shaking_and_stirring_speed) <br/>
**Contains**: see [Shaking_and_stirring_speed](../reusable_elements/shaking.md) 
