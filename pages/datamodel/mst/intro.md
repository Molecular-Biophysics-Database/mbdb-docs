# MST introduction

## Which types of instruments?

The MST model covers the output from Nanotemper's Monolith series and covers
MST/TRIC as well as spectral shift method.

## Note on initial intensity and spectral shifts

It's worth noting that data acquired in these modes formally are a type
of fluorescence spectroscopy, not MST. These types of measurements are not
exclusively measured using the Monolith series of instruments.

However, we're not currently supporting fluorescence spectroscopy as standalone model.
The metadata associated with these modes, and that they're derived from the
same instruments let us to include them in the MST model to make it easier for the user as
well as beginning to capture as much data as possible.

The records associated might later migrate to different model if
fluorescence spectroscopy will get its own model in the future.