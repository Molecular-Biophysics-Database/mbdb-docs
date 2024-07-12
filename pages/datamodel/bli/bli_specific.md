# Method specific parameters

## schema_version 

**Description**: The schema version used to annotate the BLI method specific parameters <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.schema_version` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('0.9.6') <br/>

## experiment_type 

**Description**: The type of physical parameter that was sought <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.experiment_type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Affinity','Concentration', 'Other') <br/>

## plates 

**Description**: List of the plate types used for the measurements <br/> 
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.plates` <br/>
**Type**: array of object (plate) <br/>
**Contains**: See [Plate](plate.md) <br/>
