# Fields specific to MST

## schema_version

**Description**: The schema version used to annotate the MST method specific parameters <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.schema_version` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('0.9.11') <br/>

## experiment_type

**Description**: The type of physical parameter that was sought <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.experiment_type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Affinity','Concentration', 'Other') <br/>

## signal_type

**Description**: The type of signal that was being measured <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.signal_type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Initial intensity', 'TRIC/MST', 'Spectral shift') <br/>

## excitation_led_color

**Description**: The color of the excitation LED used for the experiment.
NOTE that colors are specific to the combination in which it occurs,
e.g. the GREEN in a BLUE/GREEN instrument, is not the same as the GREEN in a GREEN/RED instrument<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.excitation_led_color` <br/>
**Type**: enumerator (string) <br/>
**Options**: (
'RED (ex 605-645nm, em 660-720nm)',<br/>
'RED (ex 610-645nm, em 680-720nm)',<br/>
'GREEN (ex 555-585nm, em 605-690nm)',<br/>
'GREEN (ex 515-550nm, em 565-600nm)',<br/>
'BLUE (ex 480-500nm, em 515-550nm)',<br/>
'BLUE (ex 460-500nm, em 515-560nm)',<br/>
'UV (ex 260-300nm, em 330-380nm)',<br/>
'Spectral shift') <br/>

## excitation_led_power

**Description**:The power, in percent, of the excitation LED used in experiment<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.excitation_led_power` <br/>
**Type**: number (float) <br/>
**Min**: 0 <br/>
**Max**: 100 <br/>

## ir_mst_laser_power

**Description**:The power of the infrared LASER used in the experiment
in percentages. Even though a change in nomenclature occurred in
Nanotemper's control software, the underlying data is still stored in
percentages. Use the following conversion;
Low = 20, Medium = 40, High = 60 <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.ir_mst_laser_power` <br/>
**Type**: number (float) <br/>
**Min**: 0 <br/>
**Max**: 100 <br/>

## temperature

**Description**:The power of the infrared LASER used in the experiment
in percentages. Even though a change in nomenclature occurred in
Nanotemper's control software, the underlying data is still stored in
percentages. Use the following conversion;
Low = 20, Medium = 40, High = 60 <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.temperature` <br/>
**Type**: object (Temperature) <br/>
**Contains**: see [Temperature](../reusable_elements/temperature.md)

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
**Contains**: see [MST_data_analysis](data_analysis.md)
