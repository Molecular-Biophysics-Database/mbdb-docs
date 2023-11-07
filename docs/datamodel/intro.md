---
sidebar_position: 1
---

# The two part model

The data model for each record is broken into two parts:

 1. General parameters
 2. Method specific parameters 

# Overview of General parameters 

General parameters describe both the metadata of the record (*e.g.* authors), as well properties expected to be present for all types biophysical measurement (*e.g.* authors). 

All records have the same fields in all records **Independent of measurement technique**, which means 
that required fields in general parameters are present (and hence searchable) in all records.

More information about the general parameters can be found [here](general-params/intro.md) 

# Overview of method specific parameters 

The method specific parameters includes the detailed information about how data was measured (*e.g.* measurement protocol). As this is inherently specific to the techniques being used, the fields can only be expected to exists in records using the same technique. 

More information about the data model of each of the supported techniques can be found here:

- [MST/TRIC/Spectral shift](mst/intro.md) 
- Biolayer interferometry (BLI)
- Surface Plasmodium resonance (SPR) 