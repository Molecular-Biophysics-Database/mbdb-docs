# App Issues
(list updates daily)

### Render a full-view of the record

null

### Changing type of linkable object results in unsaveable record


An invalid draft that cannot be saved occurs if the user changes the type of a linkable object (f.ex., changing an entity of interest from `Chemical` to `Polymer`) when they have already linked to the linkable object somewhere else in the record (f.ex., in results.entities_involved) 

Short-term workaround: Delete the object and create a new one (preferably with a different name) of the correct type and in re-establish link in all the places that it is linked to. 

### Auto save functionality

We might consider auto saving the record every 5-10 minutes to prevent data loss

### Make validation errors links

It should be made easier for the user to navigate to where particular validation error has occurred. This could be done by turning the errors into links 

### Undo functionality

It would be useful with undo functionality in case of accidentally deleting element or similar 

### Extract name from ORCID

If an ORCID is given for a person, the given name and family name can be extracted:

REQUEST: `GET` 
HEADER: `"Accept: application/json"`
URL: ` "https://pub.orcid.org/v3.0/<ORCID>"`

The required information can be obtained from response to the request in the fields:

`person.name.given-names.value`
`person.name.family-name.value`

### Add state as a tag to the record listing

It would be useful display the status of the records that are not publicly visible (draft, submitted, accepted, retracting) in the search result record listing.

The `state` field is at the top level in the record

### File extraction only sporadically work

It appears the save file functionality will usually overwrite the extracted record metadata with empty metadata (previous version of the record).

The solution requires multiple rewrites: 

 1. `save()` should not be called within `useEffect`
 2. Saving a record in order to allow for file upload should use the id from the record, currently it tries to look in the file metadata object
 3. The revision id should be checked before overwriting a record and only be done if ids match or the incoming is newer than the existing record 

### copy_number is not clear nomenclature

considering using a different word or longer description.

### The user doesn't know when file uploading has completed

When attaching a 73 MB binary file, everything worked fine (an .mtz type but I guess it does not matter here). 
It could provide back the file upon request.

When attaching a ~ 50 MB binary file (.mrc type), it "saved" not saying a word but then in preview when attempting to download, it says
status	404
message	"Record 'qan39-t3775' has no file 'run_class001_jakoStateII.mrc'."

Is there an internal frontend, backend check in place which filters "dangerous" files, i.e. with code in it?
This does not seem to be connected to file size but rather perhaps to its typ/content?
Do we have a size limit? If yes, the tooltip should mention that.

NOT CRITICAL NOW - I did not see this with the usual file sizes we produce ...

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


