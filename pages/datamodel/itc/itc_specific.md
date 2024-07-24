# Method specific parameters

## schema_version

**Description**: The schema version used to annotate the ITC method specific parameters <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.schema_version` <br/>
**Type**: enumerator (string) <br/>
**Options**: (0.1.0) <br/>

## measurements

**Description**: List of the information about each measurement. This includes target(s), ligand(s), chemical environment, and the position of the sample within the instrument <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements` <br/>
**Type**: array of object (Measurement) <br/>
**Contains**: See [Measurement](measurement.md) <br/>

## injection_mode

**Description**: Details of how the experiment was conducted in terms of injection (e.g. titration) <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.injection_mode` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Single injection', 'Titration')<br/>
**Contains**: See [Injection_mode](injection_mode.md) <br/>

## cell_temperature

**Description**: Temperature of the cell in which the sample is measured <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.cell_temperature` <br/>
**Type**: object (Temperature) <br/>
**Contains**: See [Temperature](../reusable_elements/temperature.md) <br/>

## cell_volume

**Description**: Volume of the cell in which the sample is measured <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.cell_volume` <br/>
**Type**: object (Volume) <br/>
**Contains**: See [Volume](../reusable_elements/volume.md) <br/>

## reference_power

**Description**: Energy supplied to the offset header of the reference cell to equilibrate the temperatures <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.reference_power` <br/>
**Type**: object (Shaking_and_stirring_speed) <br/>
**Contains**: See [Shaking_and_stirring_speed](../reusable_elements/shaking.md) <br/>

## stirring_speed

**Description**: Sample cell stirring speed in RPM <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.stirring_speed` <br/>
**Type**: object (Shaking_and_stirring_speed) <br/>
**Contains**: See [Shaking_and_stirring_speed](../reusable_elements/shaking.md) <br/>

## feedback_mode

**Description**: The operating mode where conditions are adjusted automatically to maintain constant temperature during heat measurements <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.feedback_mode` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('None', 'Low', 'High') <br/>

## data_analysis

**Description**: The details of how data analysis was performed to obtain results <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.data_analysis` <br/>
**Type**: array of object (data_analysis) <br/>
**Contains**: See [data_analysis](data_analysis.md) <br/>

