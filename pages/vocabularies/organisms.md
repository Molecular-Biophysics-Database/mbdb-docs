# Organisms

## Source

We're using NCBI taxonomies to annotate biological organisms (including virus).

## How is the information accessed?

We're accessing the information from within the MBDB using their 
[REST API](https://www.ncbi.nlm.nih.gov/datasets/docs/v1/reference-docs/rest-api/).
In particular, we're using the "taxon_suggest" endpoint for searching for 
taxonomy ids, and then extracting the information associated with each 
taxonomy id using the "taxon" endpoint.

## I can't find the organism I used, what should I do.

Depending on which taxa (level) information are unavailable for you should
do one of the two following things

### The specific strain I used is not available

We want to have the information as precise as possible, and therefor would like
to have the information to the strain level, especially if this is known to be
critical to the obtained results (in which case have a look at the 
instructions below). Otherwise, it can be specified to the species level of 
precision.

### The species, genus, etc.

Deposition genetic information to one of the sources that the NCBI taxonomy 
draws it's information from is required. The NCBI taxonomy draws it's 
information from several sources under The International Nucleotide Sequence 
Database Collaboration (INSDC). Links to the deposition system that is most 
appropriate for you can be found [here](https://www.insdc.org/).

## Fields available

### id
The id prefix is `taxid:`.

**Description**: NCBI taxid of the organism (e.g. 9606) to the lowest 
                 possible taxonomic rank (e.g. species)<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

### title
**Description**: Name of organism associated with the taxid (e.g. Mycobacterium phage PurpleHaze_DEM1<br/>
**Required**: yes <br/>
**Type**: object (Title) <br/>
**Contains**: see [Vocabulary title](../datamodel/reusable_elements/vocabulary_title.md)

### rank
**Description**: The taxonomic level the taxid is associated with (e.g. SPECIES)<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>