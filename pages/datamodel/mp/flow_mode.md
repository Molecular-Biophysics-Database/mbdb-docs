# Flow

## flow_cell

**Description**: Type (description) of the flow cell <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.mode.flow_cell` <br/>
**Type**: string (Sample_carrier) <br/>

## sample_flowrate

**Description**: Numerical value and unit of the sample flowrate <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.mode.sample_flowrate` <br/>
**Type**: object (Flow_rate) <br/>
**Contains**: see [Flow rate](../reusable_elements/flow_rate.md)

## buffer_flowrate

**Description**: Numerical value and unit of the buffer flowrate <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.mode.buffer_flowrate` <br/>
**Type**: object (Flow_rate) <br/>
**Contains**: see [Flow rate](../reusable_elements/flow_rate.md)