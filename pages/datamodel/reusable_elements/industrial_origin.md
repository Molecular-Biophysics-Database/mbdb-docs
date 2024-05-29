---
sidebar_position: 8
---

# Complex substance of industrial origin

## product 

**Description**:The type of product, byproduct, or waste product the complex substance was derived from<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Beer', 'Cell medium', 'Whey')   

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

