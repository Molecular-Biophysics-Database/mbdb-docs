
# Complex substance of environmental origin

## source 
**Description**: The environmental source where the complex substance was derived from <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Fresh water', 'Marine', 'Ice core', 
              'Sediment', 'Sewage', 'Soil')

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

## location 
**Description**: The coordinates, in decimal notation, where the complex substance was collected <br/>
**Required**: yes <br/>
**Type**: object (Coordinates) <br/>
**contains**: see [Fields available in location](#fields-available-in-location)


### Fields available in location

### latitude
**Description**:The latitude, from south to north, in degrees (decimal notation) <br/>
**Required**: yes <br/>
**Type**: number (float) <br/>
**Minimum**: -90
**Maximum**: 90


### longitude
**Description**:The longitude, from west to east, in degrees (decimal notation) <br/>
**Required**: yes <br/>
**Type**: number (float) <br/>
**Minimum**: -180
**Maximum**: 180

