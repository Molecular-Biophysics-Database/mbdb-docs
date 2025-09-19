# App Issues
(list updates daily)

### Wavelength

Wavelength added to general parameters (Physical and chemical parameter objects), primary laser wavelength added to MP specific parameters, schema versions updated, all models compiled.

### Permissions for UI management of vocabularies

Add permissions for UI management of vocabularies to "administrators" group - incl. edit & new item.

### Measurements are tedious to input 

 It is annoying to always repeat the same values in the case of the measurements. For example, the name is the same, the concentration of the target, the chemical environment and the ‘container’ ...

### Include option reuse person information in more sections 

It could be great to include an option to indicate that the ‘principal contact’ is the same as the ‘depositor’ in order to not repeat information and reduce the number of fields the user has to complete manually.

### Vocabulary API performance

Performance of the vocabulary API appears to be slow, particularly when a larger number of items is requested.

On the testing setup that I have available there are 1003 items present in the "organisms" vocabulary. mbdb-app is running in development mode in a VM form a mechanical disk. The VM is accessed via a guest-host network bridge. A request to fetch all 1003 items from the vocabulary often fails with a timeout error. The timeout is set 15 (fifteen) seconds, which should be more than enough to retrieve around ~1000 entries. If the timeout is reduced even further, (say to 1500 ms) even queries with the `?suggest` parameter begin to time out.
The "affiliations" vocabulary (with 1000 entries) fares a little better but a fetch of the entire vocabulary still takes over 5 secs. 

These results are very well reproducible.

The questions that should probably be asked:
- Why is there such a performance disparity between two vocabularies that have the same number of entries?
- Is this performance expected or is this some defect of the development setup?

### Deposition form - autofilling owner infomation and usage information

Tester notes that:

Depositor and Principal Contact

Is it possible to have a button to autofill the information from the owner information? It would save time!

I wonder if people will really fill out all of these (owner, depositor, principal contact) with different information… how do you see this information being used?

Once someone is registered in the database, will they be searchable to include automatically, or are you relying on them entering orcid to be able to link all of the records associated with that person?


