# Calibrant

## name

**Description**: The name of the calibrant<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants.name` <br/>
**Type**: string <br/>

## type

**Description**: The type of the calibrant<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants.type` <br/>
**Type**: enumerator (string) <br/>
**Options**:('polyribonucleotide',
             'polydeoxyribonucleotide',
             'polypeptide(D)',
             'polypeptide(L)',
             'chemical',
             'molecular assembly',
             'virion',
             'nanoparticle')

## molecular_weight

**Description**: The molecular weight of the calibrant<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.calibrants.molecular_weight` <br/>
**Type**: object (Molecular_weight) <br/>
**Contains**: see [Molecular weight](../reusable_elements/molecular_weight.md)

## size:
**Description**: The size of the calibrant<br/>
**Required**: no<br/>
**Path**: `metadata.method_specific_parameters.calibrants.size` <br/>
**Type**: object (Size)<br/>
**Contains**: see [Fields available in size](#fields-available-in-size)

### Fields available in size

#### type

**Description**: The type of size (e.g. radius) <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants.size.type` <br/>
**Type**: enumerator (string) <br/>
**contains**: ('radius', 'diameter', 'path length')

#### mean

**Description**: The type of size (e.g. radius) <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants.size.mean` <br/>
**Type**: number (float) <br/>
**Minimum**: 0

#### unit

**Description**: The type of size (e.g. radius) <br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants.size.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Å', 'nm', 'μm', 'mm', 'cm', 'm')

#### median

**Description**: The median of the size <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.calibrants.size.median` <br/>
**Type**: number (float) <br/>
**Minimum**: 0

#### upper

**Description**: The upper bound of the size <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.calibrants.size.upper` <br/>
**Type**: number (float) <br/>
**Minimum**: 0

#### lower

**Description**: The lower bound of the size <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.calibrants.size.lower` <br/>
**Type**: number (float) <br/>
**Minimum**: 0

## modifications

**Description**: If the calibrant contained modifications they can be specified
here (e.g. PEGylation)<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.calibrants.modifications` <br/>
**Type**: array of object (Modification) <br/>
**Contains**: see [Modification](../reusable_elements/modification.md)

## additional_specifications:
**Description**: Additional information about the calibrant can be specified here<br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.calibrants.additional_specifications` <br/>
**Type**: string <br/>