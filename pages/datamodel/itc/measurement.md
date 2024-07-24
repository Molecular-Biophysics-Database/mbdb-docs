# Measurement

## id

**Description**: Unique ID to be used as a link target<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.id` <br/>
**Type**: link target (string) <br/>

## name

**Description**: Name (id) of the measurement which must be
unique within a record (i.e. triplicates
must be named individually in the raw data
file). The name must allow location of the
measurement data within the raw data file
as well as processed data files if these
are present<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.name` <br/>
**Type**: string <br/>

## sample_in_cell

**Description**: Composition of the solution in the cell 
including targets and chemical environment<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.sample_in_cell` <br/>
**Type**: object (Sample) <br/>
**Contains**: see [Fields available in sample](#fields-available-in-sample)

## sample_in_syringe

**Description**: Composition of the solution in the syringe
including targets and chemical environment<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.sample_in_syringe` <br/>
**Type**: object (Sample) <br/>
**Contains**: see [Fields available in sample](#fields-available-in-sample)

## Fields available in sample

## targets

**Description**: List of names (ids), from the entities of 
interest defined in the general parameters, of directly measured entities<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.ITC_sample.targets` <br/>
**Type**:  array of object (Entity_constituent) <br/>
**Contains**: see [Entity_constituent](../reusable_elements/entity_constituent.md) <br/>

## chemical_environment

**Description**: Name (id) of the chemical environment of
the sample (from the chemical environments defined in the general parameters)<br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.ITC_sample.chemical_environment` <br/>
**Type**: link (chemical_environment) <br/>
**Target**: `metadata.general_parameters.chemical_environments.id`

## preparation_protocol

**Description**: List of steps taken to prepare the sample<br/> 
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.measurements.preparation_protocol` <br/>
**Type**: array of object (Step) <br/>
**Contains**: see [Step](../reusable_elements/step.md) <br/>
