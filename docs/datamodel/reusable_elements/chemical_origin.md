---
sidebar_position: 7
---

# Complex substance of chemical origin

## class
**Description**: The class of chemicals the complex substance was derived from <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Lipid assembly')

## preparation_protocol 
**Description**: List of the steps performed during the preparation of the complex substance'<br/>
**Required**: yes <br/>
**Type**: array of object (Step)  <br/>
**Contains** see [Step](step.md)

## storage
**Description**: Information about how the complex substance was stored between being acquired and measured, including temperature and duration<br/>
**Required**: no <br/>
**Type**: object (Storage)  <br/>
**Contains** see [Storage](storage.md)

## additional_specifications

**Description**: Additional information about the complex substance can be specified here <br/>
**Required**: no <br/>
**Type**: array of string (fulltext)


## The fields from one of the following objects

## Lipid assembly

### type 

**Description**: The type of lipid assembly<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Micelle', 'Liposome', 'Nanodisc', 'Sheet')

### components

**Description**: The size of the lipid assembly <br/>
**Required**: yes <br/>
**Type**: array of object (Assembly_component) <br/>
**Contains**: see [Assembly component](molecular_assembly.md#fields-available-in-assembly-components)

   
### number_of_mono_layers

**Description**: The number of lipid mono layers in the lipid assembly, -1 if unknown <br/>
**Required**: no <br/>
**Type**: number (integer) <br/>
**Minimum**: -1

### size

**Description**: The size of the lipid assembly <br/>
**Required**: no <br/>
**Type**: object (Size) <br/>
**Contains**: see [Fields available in size](#fields-available-in-size)

### Fields available in size

#### type

**Description**: The type of size (e.g. radius) <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**contains**: ('radius', 'diameter', 'path length')

#### mean

**Description**: The type of size (e.g. radius) <br/>
**Required**: yes <br/>
**Type**: number (float) <br/>
**Minimum**: 0

#### unit

**Description**: The type of size (e.g. radius) <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Å', 'nm', 'μm', 'mm', 'cm', 'm')

#### median

**Description**: The median of the size <br/>
**Required**: no <br/>
**Type**: number (float) <br/>
**Minimum**: 0

#### upper

**Description**: The upper bound of the size <br/>
**Required**: no <br/>
**Type**: number (float) <br/>
**Minimum**: 0

#### lower

**Description**: The lower bound of the size <br/>
**Required**: no <br/>
**Type**: number (float) <br/>
**Minimum**: 0
