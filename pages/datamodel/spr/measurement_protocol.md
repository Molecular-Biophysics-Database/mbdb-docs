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

## flow
**Description**: Information about the flow during the measurement step<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.flow` <br/>
**Type**: object (Flow) <br/>
**Contains**: see [Fields available in flow](#fields-available-in-flow) 

## Fields available in flow

## rate
**Description**: Numerical value of the flow-rate<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.flow.rate` <br/>
**Type**: number (float) <br/>
**Min**: 0 

## unit 
**Description**: The unit of the flow-rate<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.flow.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('mL/min','µl/s')

## direction 
**Description**: The unit of the flow-rate<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.flow.direction` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Vertical','Horizontal')

## path 
**Description**: list of the flow-path, in terms of
measurement positions. Measurement positions that are connected by a flow
running serially through them should be mentioned within the inner list, while
parallel flows should be mentioned in the outer list<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurement_protocol.flow.path` <br/>
**Type**: array of array of link <br/>
**Target**: `metadata.method_specific_parameters.measurement_position.id`