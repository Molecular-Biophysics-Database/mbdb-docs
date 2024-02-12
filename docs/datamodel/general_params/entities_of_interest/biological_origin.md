---
sidebar_position: 5
---
# Complex substance of biological origin

## derived_from 
**Description**: The biological substance the complex substance is derived from <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Body fluid',
              'Cell fraction',
              'Virion')

## source_organism

**Description**: Identification of the organism to the lowest taxonomic rank possible e.g. strain. Note that this is based on the NCBI taxonomy<br/>
**Required**: yes <br/>
**Type**: object (vocabulary)  <br/>
**Contains** see [Organism](../../reusable_elements/organism.md)

## preparation_protocol

**Description**: List of the steps performed during the preparation of the complex substance'<br/>
**Required**: yes <br/>
**Type**: array of object (Step)  <br/>
**Contains** see [Step](../../reusable_elements/step.md)

## storage

**Description**: List of the steps performed during the preparation of the complex substance'<br/>
**Required**: no <br/>
**Type**: object (Storage)  <br/>
**Contains** see [Storage](../../reusable_elements/storage.md)

## additional_specifications

**Description**: Additional information about the complex substance can be specified here <br/>
**Required**: no <br/>
**Type**: array of string (fulltext)

## The fields from one of the following objects

## Body fluid:

### fluid 
**Description**: The body fluid the complex substance is derived from<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Blood', 'Fecal matter', 'Milk',
              'Plasma', 'Saliva', 'Serum', 'Urine',
              'Plant extract')


### health_status
**Description**: Health status of the donor organism where
the body fluid was derived (e.g. healthy, sick, patient with
Diabetes type 2)<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

## Cell fraction

### fraction
**Description**: The subcelluar component e.g. (Ribosome)<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Ribosome', 'Cell wall', 'Vesicle'
            ' Cell lysate/Cytoplasm', 'Cell Membrane',
             'Extracellular matrix', 'Lysosome',
             'Golgi Apparatus', 'Mitochondrion', 'Nucleus',
             'Rough Endoplasmic Reticulum',
             'Smooth Endoplasmic Reticulum',
             'Vacuole','Chloroplast')
        
### organ       
**Description**: The organ the cell fraction was derived from (e.g. heart)<br/>
**Required**: no <br/>
**Type**: string (keyword) <br/>

### tissue 
**Description**: The tissue type the cell fraction was derived from<br/>
**Required**: no <br/>
**Type**: string (keyword) <br/>

### cell_type 
**Description**: The cell type the cell fraction was derived from<br/>
**Required**: no <br/>
**Type**: string (keyword) <br/>

### health_status
**Description**: Health status of the donor organism where
the body fluid was derived (e.g. healthy, sick, patient with
Diabetes type 2)<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

## Virion

### genetic_material

**Description**: The genetic material carried by the virions (None, virus genome, synthetic)<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('No genetic material',
              'Virus genome',
              'Synthetic')

### capsid_type

**Description**: The type of virion capsid<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('None', 'Native', 'Genetically Engineered', 'Synthetic')

### envelope_type

**Description**: The type of virion envelope<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('None', 'Native', 'Genetically Engineered', 'Synthetic')

### host_organism

**Description**: The host organism the virion was produced  in. Note that information is based on the NCBI taxonomy<br/>
**Required**: no <br/>
**Type**: object (vocabulary)  <br/>
**Contains** see [Organism](../../reusable_elements/organism.md)

### host_cell_type

**Description**: The host organism the virion was produced  in. Note that information is based on the NCBI taxonomy<br/>
**Required**: no <br/>
**Type**: string (fulltext)
