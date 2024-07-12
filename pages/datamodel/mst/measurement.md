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

## position

**Description**: Position where the container (capillary) of the 
measured sample within the instrument (e.g. 1, 2, 3)<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.position` <br/>
**Type**: string (keyword) <br/>

## sample 
**Description**:Information about the sample including
concentrations of ligands and targets, and
which chemical environment the sample was composed of<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.sample` <br/>
**Type**: object (Sample) <br/>
**Contains**: see [Fields available in sample](#fields-available-in-sample)

## Fields available in sample

## targets 
**Description**:Information about the sample including
concentrations of ligands and targets, and which chemical environment the sample was composed of<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.targets` <br/>
**Type**: object (Entity_constituent) <br/>
**Contains**: see [Entity_constituent](../reusable_elements/entity_constituent.md) <br/>

## ligands 
**Description**:List of names (ids) of entities (from the
entities of interest defined in the
general parameters) that were used to
alter the behavior of the target(s)<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.ligands` <br/>
**Type**: object (Entity_constituent) <br/>
**Contains**: see [Entity_constituent](../reusable_elements/entity_constituent.md) <br/>

## chemical_environments 
**Description**: Name (id) of the chemical environment of
the sample (from the chemical environments defined in the general parameters)<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.chemical_environment` <br/>
**Type**: link <br/>
**Link Target**: Chemical environment<br/>


## measurement_container 
**Description**: The container the sample was in during the measurement<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.measurement_container` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Monolith Standard Capillary', <br/>
               'Monolith Premium Capillary', <br/>
               'Monolith LabelFree Capillary', <br/>
               'Monolith LabelFree Premium Capillary', <br/>
               'Monolith NT.Automated Capillary Chip', <br/>
               'Monolith NT.Automated Premium Capillary Chip', <br/>
               'Monolith NT.Automated LabelFree Capillary Chip', <br/>
               'Monolith NT.Automated LabelFree Premium Capillary Chip', <br/>
               '384-well plate', <br/>
               'other')

## preparation_protocol 
**Description**: List of steps taken to prepare the
sample, ending at the point where it was placed in the measurement
container. Information include operations like filtration and which
filter material and pore-size was used should be added<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurements.preparation_protocol` <br/>
**Type**: array of object (Step) <br/>
**Contains**: See [Step](../reusable_elements/step.md)
