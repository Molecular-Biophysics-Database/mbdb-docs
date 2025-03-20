# Fields specific to MP

## schema_version

**Description**: The schema version used to annotate the MP method specific parameters <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.schema_version` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('0.2.0') <br/>

## calibrants

**Description**: The type of signal that was being measured <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants` <br/>
**Type**: array of object (Calibrant) <br/>
**Contains**: see [Calibrant](calibrant.md) <br/>

## mode

**Description**: The details of which mode of data acquisition (Flow or Static)<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.mode` <br/>
**Type**: polymorphic object (Mode) <br/>
**Contains**: see [Mode](mode.md)<br/>

## measurements

**Description**:List of the information about each
measurement. This includes target(s),
ligand(s), chemical environment, and the
position of the sample within the instrument <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements` <br/>
**Type**: array of object (Measurement) <br/>
**Contains**: see [Measurement](measurement.md)

## data_analysis

**Description**:The details of how data analysis was performed to obtain results <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.data_analysis` <br/>
**Type**: array of object (MST_data_analysis) <br/>
**Contains**: see [MP_data_analysis](data_analysis.md)
