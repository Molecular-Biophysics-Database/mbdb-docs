# BLI data analysis

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
