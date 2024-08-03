# App Issues
(list updates daily)

### BLI deposit - type ... missing data?

Validation error
Type: Missing data for required field.

I checked all places where this could apply to EOIs but I could not find any type specification missing.

[phzb9-nj208.json](https://github.com/user-attachments/files/16471903/phzb9-nj208.json)

Also for previous BLI issues listed - this is the record that generated all the validation errors.

I have not managed to get to "Deposit" with not validation errors ...

### BLI deposit, EOI

Deposit
EOI
validation error
Deviation From Expected Mass: Missing data for required field.
Devitation From Expected Mass: Unknown field.

Even if I filled in values.
By the way these are not marked by asterisks ..yet the form seems to require them.

### EOI "Checked missing"

Deposit
Validation error:
Checked: Missing data for required field.

I tried fill in the Identity checked field by "No". Still the error stays ...
May be I am not looking the right place.


### BLI form EOI Modifications

Modification.
Filled value
Signal peptide cleavage

MBDB complains at Deposit
Unknown field


### Seaching all records on frontpage does not work

the /search endpoint doesn't invoke the global search and instead just gives a blank page

### Record view - width of the graphical representation

The width is now dynamically adjusted according to the content.
This is generally fine.
However, I would suggest that by default it should not shrink below a certain width.

NOT CRITICAL - JUST DISTURBING when I compare two or more records.


### Search results filter

The facet in the search results listing seems to be offering "all" of the possible values MBDB has rather than those in the already displayed results.

I can see that when I get only one result filtered out but still have e.g. three Journals available to pick from.
This may be intended?


### Record view - Results

The name of the result displayed takes the whole free text the depositor puts in.
There may be a good reason why the title is a longer sentence but we should display perhaps only the first 100 characters of it?

### Searching for a particular expression

Searching for an exact phrase - probably not implemented yet.

E.g. I have my favourite record and I want to use its title to get back to it, but the search actually regards individual words in the phrase as separate search items.
Tried " and '.


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

### Recordview - Results listing should show associated measurements 

Currently the gp.derived_parameters are iterated over to display results listing. It would be preferable to combine this with information found in msp.data_analysis.measurements, as msp.data_analysis have a derived_parameter that can be used establish the connection. 

### Searching across different types of records 

Configure searches to be across all types of records (currently MST, BLI, and SPR) 

### Extraction and loading metadata from files 

Extraction of metadata from instrument provided data files in away that can be accessed by the frontend 

### Acquiring DOI 

Provide Invenio mechanism to trigger DOI generation through DataCite


