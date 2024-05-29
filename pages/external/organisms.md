
# NCBI taxonomies

We're using NCBI taxonomies to annotate biological organisms (including virus).

## How is the information accessed?

We're accessing the information from within the MBDB using their [REST API](https://www.ncbi.nlm.nih.gov/datasets/docs/v1/reference-docs/rest-api/). In particular we're using the "taxon_suggest" endpoint for searching for taxonomy ids, and then extracting the information associated with each taxonomy id using the "taxon" endpoint.

## I can't find the organism I used, what should I do.

Depending on which level the information is unavailable you should do one of three two things

### The specific strain I used is not available

We want to have the information as precise as possible, and therefor would like to have the information to the strain level, especially if this is known to be critical to the results obtained. However if the strain is not available, it's can be specified to the species level precision.

### The species, genus, etc.

Deposition genetic information to one of the sources that the NCBI taxonomy draws it's information from is required. The NCBI taxonomy draws it's information from several sources under The International Nucleotide Sequence Database Collaboration (INSDC). Links to the deposition system that is most appropriate you can be found [here](https://www.insdc.org/).