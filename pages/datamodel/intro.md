

# The two part model

![overview_img](/static/img/record_overview.svg "overview")

The data model for each record consist of two parts:

 1. General parameters
 2. Method specific parameters

# Overview of General parameters

General parameters describe both the metadata of the record (*e.g.* authors), as well biophysical properties expected to be present for all types biophysical measurement (*e.g* identities of measured species).

All records have the same fields in the general parameters section **Independent of measurement technique**, which means
that required fields in general parameters are present (and hence searchable) in all records.

More information about the general parameters can be found [here](general_params/intro.md)

# Overview of method specific parameters

The method specific parameters includes the detailed information about how data was measured and how it was analyzed (*e.g.* measurement protocol).
As this is inherently specific to the techniques used, the fields in method specific parameters should only be expected to exists in records using the same technique.

More information about the data model of each of the supported techniques can be found here:

- [MST/TRIC/Spectral shift](mst/intro.md)
- [Biolayer interferometry (BLI)](bli/intro.md)
- [Surface plasmon resonance (SPR)](spr/intro.md)

# Structure of the model

## Reusable elements

The model makes heavy use of the programming technique composition. This means that certain elements are reused as often possible, which has the advantages that you can find the same elements in many places. This makes comparisons easier as well as making it easier to gain intuition about which fields are available. A good example of the this is "concentration", whenever you see this field, it's subfields will all ways be the same. It also has the advantage that errors only has to be corrected in one place. The disadvantages is that increases nesting at makes the schema less flexible/specific. In some parts of the data models the shortcomings of composition outweighs it's advantages.

## Polymorphic elements

Some of the shortcomings of composition can favour use of the programming technique inheritance. Occasionally this technique is used in the data model, however as this is not trivially to implement and make it a harder to know which elements are available the usage kept to minimum. One of the places it is used is to define the  different types of publications. This has the advantages of making type specific fields available for each of the publication types.
