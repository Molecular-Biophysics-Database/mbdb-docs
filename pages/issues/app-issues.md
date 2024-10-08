# App Issues
(list updates daily)

### SPR Data analysis, tooltip

In SPR
Data Analysis
The first drop-down Data analysis 1 Measurement 1 has tooltip
"List of measurement links that was analyzed together"

Should this read rather
"Measurements that were analyzed together" ?

NOT Critical

### SPR Meas protocol Flow Path - graphics misbehaviour

When adding under SPR method
Measurement protocol
Flow
Path
Picking a path from the list, OK, then click into the next field and the title of the Path field goes back into the main field instead of staying minimized on the top frame.

NOT Critical 

### CommunityInclusionComponent has to be manually removed on model rebuilds

Currently we're using communities due to missing functionality, however they will eventually be used, and workflows currently assumes their presences, so communities are partly incorporated backend. 

However, to make this partly implemented state work, the `CommunityInclusionComponent` has to be commented out inside
<model>/services/records/config.py as shown below:

```python

 components = [
 *PermissionsPresetsConfigMixin.components,
 *InvenioRecordDraftsServiceConfig.components,
 AuthorityComponent,
 CommunityDefaultWorkflowComponent,
 #CommunityInclusionComponent,
 OwnersComponent,
 DraftFilesComponent,
 CustomFieldsComponent,
 FilesComponent,
 WorkflowComponent,
 ]


```

### Record view - width of the graphical representation

The width is now dynamically adjusted according to the content.
This is generally fine.
However, I would suggest that by default it should not shrink below a certain width.

NOT CRITICAL - JUST DISTURBING when I compare two or more records.


### Search results filter

The facet in the search results listing seems to be offering "all" of the possible values MBDB has rather than those in the already displayed results.

I can see that when I get only one result filtered out but still have e.g. three Journals available to pick from.
This may be intended?


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

### Recordview - Results listing should show associated measurements 

Currently the gp.derived_parameters are iterated over to display results listing. It would be preferable to combine this with information found in msp.data_analysis.measurements, as msp.data_analysis have a derived_parameter that can be used establish the connection. 

### Extraction and loading metadata from files 

Extraction of metadata from instrument provided data files in away that can be accessed by the frontend 


