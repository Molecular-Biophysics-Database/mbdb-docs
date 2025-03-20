# Calibrant

**Description**: The name of the calibrant<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants.name` <br/>
**Type**: string <br/>

**Description**: The type of the calibrant<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.calibrants.type` <br/>
**Type**: enumerator (string) <br/>
**Options**:('polyribonucleotide',
             'polypeptide(D)',
             'chemical',
             'molecular assembly',
             'virion')

## molecular_weight

**Description**: The molecular weight of the calibrant<br/>
**Required**: yes <br/>
**Type**: object (Molecular_weight) <br/>
**Contains**: see [Molecular weight](../reusable_elements/molecular_weight.md)


## modifications

**Description**: If the calibrant contained modifications they can be specified
here (e.g. PEGylation)<br/>
**Required**: yes <br/>
**Type**: array of object (Modification) <br/>
**Contains**: see [Modification](../reusable_elements/modification.md)
