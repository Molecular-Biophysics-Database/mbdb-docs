# Static

## sample_carrier

**Description**: Information about coating or other types of surface modification of the coverslip <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.mode.sample_carrier` <br/>
**Type**: object (Sample_carrier) <br/>
**Contains**: see [Fields available in sample carrier](#fields-available-in-sample-carrier) <br/>

## Fields available in sample carrier

### surface_modification

**Description**: Information about coating or other types of surface modification of the coverslip <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.mode.sample_carrier.surface_modification` <br/>
**Type**: string <br/>

### material

**Description**: The material the sample carrier (slide) is composed of <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.mode.sample_carrier.material` <br/>
**Type**: string <br/>


### supplier

**Description**: Information about the supplier of the coverslip <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.mode.sample_carrier.supplier` <br/>
**Type**: object (Supplier) <br/>
**Contains**: see [Supplier](../reusable_elements/supplier.md)

### cleaning_protocol

**Description**: List of steps taken to clean the coverslip <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.mode.sample_carrier.cleaning_protocol` <br/>
**Type**: array of object (Step) <br/>
**Contains**: see [Supplier](../reusable_elements/step.md)