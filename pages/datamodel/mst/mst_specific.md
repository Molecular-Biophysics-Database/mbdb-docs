# Fields specific to MST 

## schema_version 

**Description**: List of information about the grants that supported generation of the raw data annotated by this record. Note that this information is based on OpenAire Projects <br/> 
**Required**: yes <br/>
**path**: `metadata.method_specific_parameters.schema_version` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('0.9.10') <br/>

## experiment_type 

**Description**: The type of physical parameter that was sought <br/> 
**Required**: yes <br/>
**path**: `metadata.method_specific_parameters.experiment_type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Affinity','Concentration', 'Other') <br/>

## signal_type 

**Description**: The type of signal that was being measured <br/> 
**Required**: yes <br/>
**path**: `metadata.method_specific_parameters.signal_type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Initial intensity', 'TRIC/MST', 'Spectral shift') <br/>

## excitation_led_color

**Description**: The color of the excitation LED used for the experiment.
NOTE that colors are specific to the combination in which it occurs, 
e.g. the GREEN in a BLUE/GREEN instrument, is not the same as the GREEN in a GREEN/RED instrument<br/> 
**Required**: yes <br/>
**path**: `metadata.method_specific_parameters.excitation_led_color` <br/>
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
