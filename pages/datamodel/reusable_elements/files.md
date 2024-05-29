# Files metadata

## name
**Description**: Name of the file <br/> 
**Required**: yes <br/>
**Type**: string (keyword) <br/>

## content_type
**Description**: Type of the file content in terms of how it can be read (text, binary, etc.) <br/> 
**Required**: yes <br/>
**Type**: enumerator (keyword) <br/>
**Options**: ('text', 'binary','text and binary') 

## context
**Description**: The context the file should be understood within (e.g. raw measurement data) <br/> 
**Required**: yes <br/>
**Type**: enumerator (keyword) <br/>
**Options**: ('raw measurement data',
              'derived measurement data',
              'quality control report')

## originates_from
**Description**: What is the source of the file <br/> 
**Required**: yes <br/>
**Type**: enumerator (keyword) <br/>
**Options**: ('Instrument software', 'User', 'MBDB')

## size
**Description**: Size of the file in bytes <br/> 
**Required**: yes <br/>
**Type**: number (integer) <br/>
**Minimum**: 0

## description

**Description**: Short description of what the file contains <br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>

## recommended_software

**Description**: The name of the software recommended for opening and working with the files <br/> 
**Required**: no <br/>
**Type**: string (fulltext) <br/>

## processing step

**Description**: List of the processing steps performed on the file before it was deposited (e.g. exported to xlsx) <br/> 
**Required**: no <br/>
**Type**: array of object (Processing_step) <br/>
**Contains**: see [Processing step](processing_step.md)