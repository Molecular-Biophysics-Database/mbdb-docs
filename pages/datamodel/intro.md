# The data model

The data model for the (scientific) metadata for each record consists of
two parts:

 1. General parameters
 2. Method specific parameters

![overview_img](/static/img/record_overview.svg "overview")

## Overview of General parameters

General parameters describe both the metadata of the record
(*e.g.* authors), as well biophysical properties expected to
be present for all types of biophysical measurements (*e.g.*
identities of measured species).

All records have the same fields in the general parameters
section **Independent of measurement technique**, which means
that the required fields in general parameters are present
(and hence searchable) in all records.

More information about the general parameters can be found
[here](general_params/intro.md)

## Overview of method specific parameters

The method specific parameters include the detailed information
about how data was measured and how it was analyzed (*e.g.*
measurement protocol). As this is inherently specific to the techniques
used, the fields in method specific parameters should
only be expected to exist in records using the same technique.

More information about the data model of each of the supported
techniques can be found here:

- [MST/TRIC/Spectral shift](mst/intro.md)
- [Biolayer interferometry (BLI)](bli/intro.md)
- [Surface plasmon resonance (SPR)](spr/intro.md)
- [Isothermal Titration Calorimetry (ITC)](itc/intro.md)

## Structure of the model

### Reusable elements

The model makes heavy use of the programming technique composition.
This means that certain elements are reused as often as possible,
which has the advantage that you can find the same elements in many
places. This makes comparisons easier as well as making it easier to
gain intuition about which fields are available. A good example of
this is "concentration". Whenever you see this field, its subfields
will allways be the same. It also has the advantage that errors only
have to be corrected in one place. The disadvantage is that it
increases nesting at makes the schema less flexible/specific. In some
parts of the data models the shortcomings of composition outweigh
their advantages.

### Polymorphic elements

Some of the shortcomings of composition can favour use of the programming
technique inheritance. Occasionally this technique is used in the
data model, however as this is not trivial to implement and makes it
harder to know which elements are available the usage is kept to minimum.
One of the places it is used is to define the different types of
publications. This has the advantage of making type-specific fields
available for each of the publication types.

## Files

The metadata of the files themselves (rather than the data they describe)
are found outside the two part model described above in a separate part
of the record see [here](files.md).

## Vocabularies

In certain places (like organisms) we rely on controlled vocabularies.
You can think of these like multi-field preset options. They are described
in detail [here](../vocabularies/intro.md).
