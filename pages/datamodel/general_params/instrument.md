
# Instrument

**Description**: The type of experimental technique used for collecting the raw data annotated by this record <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.instrument` <br/>
**Type**: object <br/>
**Contains**: see [available fields](#available-fields)

## Available fields 

### manufacturer  

**Description**: The name of the instrument as provided by the manufacturer' <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.instrument.manufacturer` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Bio-Rad',
                'Bruker',
                'Cytiva',
                'Gatorbio',
                'GE Healthcare',
                'Nanotemper',
                'Nicoya Life',
                'Sartorius',
                'Malvern Panalytical',
                'Refeyn',
                'TA Instruments')

### name 

**Description**: The name of the instrument as provided by the manufacturer' <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.instrument.name` <br/>
**Type**: string (fulltext) <br/>
