# MST data analysis

## results 

**Description**:Link to the result(s) that was obtained
by the data analysis. The link is to the results defined in the general parameters <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.results` <br/>
**Type**: array of links <br/>
**Link Target**: see [Result](../general_params/results.md)

## measurements

**Description**: List of the measurements that was analyzed together for a specific parameter <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.measurements` <br/>
**Type**: array of links <br/>
**Link Target**: see [Measurement](measurement.md)

## data_processing_steps

**Description**: Describe the steps in the data analysis prior to fitting (removing outliers in the 
raw data, applying smoothing filters, etc.) <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.data_processing_steps` <br/>
**Type**: array of object (Processing_step) <br/>
**Contains**: see [Processing step](../reusable_elements/processing_step.md)

## data_fitting

**Description**: The details of how data fitting was performed to obtain the result<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.data_fitting` <br/>
**Type**: object (Data_fitting) <br/>
**Contains**: see [Data fitting](../reusable_elements/data_fitting.md)

## f_cold_and_hot

**Description**: If the data was analyzed with time windows corresponding to fluorescence before and
after an IR laser was heating the sample the edges of the time windows can be specified here <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.f_cold_and_hot` <br/>
**Type**: object (f_cold_and_hot) <br/>
**Contains**: see [Fields available in f cold and hot](#fields-available-in-f-cold-and-hot)

## Fields available in F cold and hot

## time_unit

**Description**: The unit of time used for reporting measurement data <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.f_cold_and_hot.time_unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('nanoseconds','microseconds', 'milliseconds', <br/>
'seconds','minutes', 'hours', 'days', 'months', 'years')

## f_cold_start

**Description**: Numerical value of the start-point of time
interval used to establish the initial fluorescence, F_cold<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_cold_start` <br/>
**Type**: number (float) <br/>
**Min**: -100

## f_cold_end

**Description**: Numerical value of the end-point of time
interval used to establish the initial fluorescence, F_cold <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_cold_end` <br/>
**Type**: number (float) <br/>
**Min**: -100

## f_hot_start

**Description**: Numerical value of the start-point of time
interval used to establish the fluorescence temperature 
induced change in fluorescence, F_hot <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_hot_start` <br/>
**Type**: number (float) <br/>
**Min**: 0

## f_hot_end

**Description**: Numerical value of the end-point of time
interval used to establish the fluorescence temperature 
induced change in fluorescence, F_hot <br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.data_analysis.f_cold_and_hot.f_hot_end` <br/>
**Type**: number (float) <br/>
**Min**: 0
