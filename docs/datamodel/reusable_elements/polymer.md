---
sidebar_position: 3
---
# Polymer

## polymer_type
**Description**: The type of polymer (e.g. polypeptide(L)) <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('cyclic-pseudo-peptide',
'peptide nucleic acid',
'polydeoxyribonucleotide',
'polydeoxyribonucleotide/polyribonucleotide
hybrid',
'polypeptide(D)',
'polypeptide(L)',
'polyribonucleotide') <br/>


## sequence
**Description**: Primary sequence of the polymer, using single letter codes (e.g. SAGRELLE, AGTTA). In case of non-natural amino acids or nucleotides, please place the monomer in brackets <br/>
**Required**: no <br/>
**Type**: string (fulltext) <br/>


## external_databases

**Description**: List of identifiers to records in external databases containing information about the polymer can be specified here (e.g uniprot:Q8KRF6)<br/>
**Required**: no <br/>
**Type**: array of string <br/>
**Format**: "uniprot:XXXXX"

## molecular_weight

**Description**: The molecular weight of the polymer<br/>
**Required**: yes <br/>
**Type**: object (Molecular_weight) <br/>
**Contains**: see [Molecular weight](molecular_weight.md)

## variant

**Description**: Descriptive name indicating differences of primary sequence of the polymer as compared to the most common form, or wildtype, including mutations,purification tags, etc. (A53T, C-terminal GFP, N-terminal 6xHis-tag)<br/>
**Required**: no <br/>
**Type**: string (fulltext) <br/>

## source_organism

**Description**: The biological species where the polymer naturally occurs. Note that this is based on the NCBI taxonomy<br/>
**Required**: no <br/>
**Type**: object (vocabulary)  <br/>
**Contains** see [Organism](organism.md)


## expression_source_type

**Description**: How the polymer was produced<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Natively', 'Recombinantly', 'Synthetically')

## expression_organism

**Description**: The biological species where the polymer naturally occurs. Note that this is based on the NCBI taxonomy<br/>
**Required**: yes <br/>
**Type**: object (vocabulary)  <br/>
**Contains** see [Organism](organism.md)

## modifications

**Description**: If the polymer contains modifications such as non-natural aminoacids, post translational modification, or chemically modifications like labeling, it can be specified here<br/>
**Required**: no <br/>
**Type**: object (vocabulary)  <br/>
**Contains** see [Available fields in modifications](#available-fields-in-modifications)

## Available fields in modifications

### synthesis

**Description**: Modifications (e.g. non-natural amino acids) of the polymer made during synthesis (e.g. translation) of the polymer<br/>
**Required**: no <br/>
**Type**: array of object (Modification) <br/>
**Contains** see [Modification](modification.md)

### biological_postprocessing

**Description**: Modifications of the polymer made after synthesis (e.g. posttranslational modifications, DNA methylation) by the organism where synthesis occurred (e.g. glycosylation)<br/>
**Required**: no <br/>
**Type**: array of object (Modification)  <br/>
**Contains** see [Modification](modification.md)

### chemical

**Description**: Modifications of the polymer introduced by chemical, biochemical, or physical means in vitro (e.g. lysine methylation, cysteine iodoacetamide labeling, deglycosylation, covalent fluorescent labeling)<br/>
**Required**: no <br/>
**Type**: array of object (Modification)  <br/>
**Contains** see [Modification](modification.md)

## additional_specifications

**Description**: Additional information about the polymer can be specified here<br/>
**Required**: no <br/>
**Type**: array of string (fulltext) <br/>

## quality_controls

**Description**: Information about if and how quality control of the polymer was performed<br/>
**Required**: no <br/>
**Type**: object (Quality_controls) <br/>
**Contains** see [Quality controls](quality_controls.md)