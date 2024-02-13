---
sidebar_position: 2
---
# Chemical

## inchikey

**Description**: InChIKey identifier of the chemical. In case of chemical polymers please specify the InChIKey of the monomer and specify the specific type in the additional identifiers field (e.g. if PEG 3350 was employed, the InChiKey of ethylene glycol, i.e. LYCAIKOWRPUZTN-UHFFFAOYSA-N should be specified here) <br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>
**Format**: "LYCAIKOWRPUZTN-UHFFFAOYSA-N" 

## additional_identifiers:

**Description**: Unique and persistent identifier from an external source; options of sources are CAS number, ChEMBL ID, Pubchem Compound ID, and Pubchem Substance ID <br/>
**Required**: no <br/>
**Type**: string (keyword) <br/>
**Format**: ('cas:XXX-XX','chemble:CHEMBLXXXXX' ,'pccid:XXXX', 'pcsid:XXXX')

## molecular_weight:

**Description**: The molecular weight of the chemical <br/>
**Required**: yes <br/>
**Type**: object (Molecular_weight) <br/>
**Contains**: see [Molecular weight](molecular_weight.md)

## isotopic_labeling:

**Description**:If the isotopic composition of the chemical was altered from the naturally occurring abundances, it can be specified here (e.g. 15N, 13C) <br/>
**Required**: no <br/>
**Type**: string (keyword) <br/>
**Contains**: see [Molecular weight](molecular_weight.md)


## additional_specifications

**Description**: Additional information about the chemical can be specified here (e.g. RNase free water, recrystallization, desalting)<br/>
**Required**: no <br/>
**Type**: array of string (fulltext) <br/>



