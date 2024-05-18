---
sidebar_position: 2
---
# App Issues
(list updates daily)

### Languages vocabulary fixed

null

### Provide the users with information about which fields are required

Currently, the users have no way of knowing which fields are optional and which are required. This should be clearly stated, likely as a fixed object

### Show model on input form

It should be visible (possibly fixed position) which type of data is currently being deposited.

### File upload no longer works

null

### Model choice page 

In order to make it clear to user which type of deposition they're making (in terms of method), the deposition button should direct users to an intermediate where the choice would occur. 

### Measurements are tedious to input 

 It is annoying to always repeat the same values in the case of the measurements. For example, the name is the same, the concentration of the target, the chemical environment and the ‘container’ ...

### MST datanalysis define Fhot and Fcold in single line 

In ‘Data analysis’, we believe that using Cold and Hot region a single line for each value would be more appropriate than F cold or F hot:
Cold region: start (field to fill) end (field to fill)
Hot region: start (field to fill) end (field to fill)

### Unclear location of derived parameters

 Derived parameters: why is this here? Why is it not introduced within ‘data analysis’? I think we are repeating information.

### Include option reuse person information in more sections 

It could be great to include an option to indicate that the ‘principal contact’ is the same as the ‘depositor’ in order to not repeat information and reduce the number of fields the user has to complete manually.

### indication that user is logged in is missing 

We miss any indication that I am logged in under my account (username, icon, name of the depositor, orcid number) as a personal site bottom.

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

### Search listing - Use source organism from all of the entities of interest 

display source organism from all of the entities of interest instead of only the first one

### Search behaviour - partial match of word 

It may be a current feature but searching for a partial word 
SCV 
(SCV50) is present in the inhibitor name
gave nothing
so I had to search for SCV50 to find the records ..

### Search behaviour - More meaningful link when no results are found

When I did not find the search key and pressed start over - it put me to the complete listing instead of the search page.

### Button Download entry functionality

It would be ice if the button Download would actually call the usual download window .. to make life easier for us now.

### Record view - record id not visible

In the record view I cannot see the actual id of the record.
Should be in the top line I think.


### Recordview - Results listing should show associated measurements 

Currently the gp.derived_parameters are iterated over to display results listing. It would be preferable to combine this with information found in msp.data_analysis.measurements, as msp.data_analysis have a derived_parameter that can be used establish the connection. 

### Searching across different types of records 

Configure searches to be across all types of records (currently MST, BLI, and SPR) 

### Extraction and loading metadata from files 

Extraction of metadata from instrument provided data files in away that can be accessed by the frontend 

### Acquiring DOI 

Provide Invenio mechanism to trigger DOI generation through DataCite


