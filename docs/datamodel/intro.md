---
sidebar_position: 1
---

# The two part model

![overview_img](../../static/img/record_overview.svg "overview")

The data model for each record consist of two parts:

 1. General parameters
 2. Method specific parameters



# Overview of General parameters

General parameters describe both the metadata of the record (*e.g.* authors), as well biophysical properties expected to be present for all types biophysical measurement (*e.g* identities of measured species).

All records have the same fields in the general parameters section **Independent of measurement technique**, which means
that required fields in general parameters are present (and hence searchable) in all records.

More information about the general parameters can be found [here](general-params/intro.md)

# Overview of method specific parameters

The method specific parameters includes the detailed information about how data was measured and how it was analyzed (*e.g.* measurement protocol).
As this is inherently specific to the techniques used, the fields in method specific parameters should only be expected to exists in records using the same technique.

More information about the data model of each of the supported techniques can be found here:

- [MST/TRIC/Spectral shift](mst/intro.md)
- [Biolayer interferometry (BLI)](bli/intro.md)
- [Surface plasmon resonance (SPR)](spr/intro.md)
