---
sidebar_position: 2
---
# App Issues
(list updates daily)

### Measurements are tedious to input 

 It is annoying to always repeat the same values in the case of the measurements. For example, the name is the same, the concentration of the target, the chemical environment and the ‘container’ ...

### Raw data illogically placed

Tester comment:
 I was expecting to deposit the raw data directly at the beginning of the form.


### Overlapping scrollbars

The scrollbar of the main window and scroll bar of the frame with items are overlapping, so you can drag it with a mouse.

OS: Linux/Ubuntu with Gnome 3
Browser: Firefox 120

### Why isn't the red icon disappearing 

If all the mandatory fields in the Record information are completed, the red alert icon show disappear (?). I think it happens in other fields.
![image](https://github.com/Molecular-Biophysics-Database/mbdb-app/assets/20229814/f2a09fd5-c568-4bcb-a265-47c6ef3a8239)

### MST datanalysis define Fhot and Fcold in single line 

In ‘Data analysis’, we believe that using Cold and Hot region a single line for each value would be more appropriate than F cold or F hot:
Cold region: start (field to fill) end (field to fill)
Hot region: start (field to fill) end (field to fill)

### Unclear location of derived parameters

 Derived parameters: why is this here? Why is it not introduced within ‘data analysis’? I think we are repeating information.

### Unclear if Quality controls is mandatory

General Parameters>Chemical information>Entities of interest>Quality controls: is this field mandatory? Because its ‘Parameter’ appears as a field required.

### ‘Collection start time’ is oddly positioned 

‘Collection start time’ field is in the middle of the deposit, which is a bit confusing, so we suggest including it in the ‘Raw measurements’ section because it is the date in which these measurements were taken. In addition, we think the field should not allow introducing dates after the current day.

### Group mandatory fields 

The mandatory fields should be as much together as possible. Access rights and Metadata access rights should be displayed before Project information (which is not mandatory). If not, it becomes a bit confusing, especially if I click on “do not provide this data”

### Include option reuse person information in more sections 

It could be great to include an option to indicate that the ‘principal contact’ is the same as the ‘depositor’ in order to not repeat information and reduce the number of fields the user has to complete manually.

### indication that user is logged in is missing 

We miss any indication that I am logged in under my account (username, icon, name of the depositor, orcid number) as a personal site bottom.

### Use the standard (*) instead of (■) for mandatory fields

We consider it more intuitive to use (*) instead of (■) for the mandatory fields because it is what is usually used in other websites.

### Change text for marking section as not provided 


Some fields contain the text “do not provide this data” which could be confusing to the user because it seems more like an order to the user than a statement from the user. It may be something more friendly like “ I don’t want to provide this data”. 


### Vocabulary API performance

Performance of the vocabulary API appears to be slow, particularly when a larger number of items is requested.

On the testing setup that I have available there are 1003 items present in the "organisms" vocabulary. mbdb-app is running in development mode in a VM form a mechanical disk. The VM is accessed via a guest-host network bridge. A request to fetch all 1003 items from the vocabulary often fails with a timeout error. The timeout is set 15 (fifteen) seconds, which should be more than enough to retrieve around ~1000 entries. If the timeout is reduced even further, (say to 1500 ms) even queries with the `?suggest` parameter begin to time out.
The "affiliations" vocabulary (with 1000 entries) fares a little better but a fetch of the entire vocabulary still takes over 5 secs. 

These results are very well reproducible.

The questions that should probably be asked:
- Why is there such a performance disparity between two vocabularies that have the same number of entries?
- Is this performance expected or is this some defect of the development setup?

### deposition form - unclear how to upload measured data

Tester comment

Measured data
No information that I can see for how the data should be inputted

Is it true that you need to have a field per value you need to upload? 

Googling I see that MST output can look like this! So are you asking that each curve is entered point by point? I think I must be missing something….


### deposition form - Server error when trying to save 


While trying to save after entering solvent details, I got this error message (09:00 23/11-2023)

500 error 

Trying again at 09:04 it appeared to have saved…

### Deposition form - Unrolled form and unclear indication of required fields

Tester comment:

When looking at the navigation tree, it is telling me that there are some parameters/information missing in the Chemical information section, however when looking at the entry area, there are no red field or indications that something is missing

If chemical environments and entities of interest are required, then I think there should be as default all the fields being shown that are needed. Same goes for all the sub-group entries required in these sections.

### Deposition form - Default of collection start time is dangerous 

Tester suggestion:

This doesn’t appear to be in any of the groups and doesn’t appear in the navigation tree either.

If you have the current date set as default, then chances are people are going to skip over it and therefore it won’t be accurate. Maybe better that no date is defined in a new entry, then force people to enter something before submission.

### Deposition form - autofilling owner infomation and usage information

Tester notes that:

Depositor and Principal Contact

Is it possible to have a button to autofill the information from the owner information? It would save time!

I wonder if people will really fill out all of these (owner, depositor, principal contact) with different information… how do you see this information being used?

Once someone is registered in the database, will they be searchable to include automatically, or are you relying on them entering orcid to be able to link all of the records associated with that person?

### Depostion form - Save button difficult to reach

Tester notes that:

It is possible to scroll down in the page so that you aren’t able to view the “Save” button at the top of the page, so you have to scroll all the way up to save, a bit annoying. Would be nicer if it is more easily accessed during the course of input, to ensure that people can do so regularly during the process.

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

### UI rebuild command no longer works

Issuing "build" command to "nrp develop" used to trigger automatic UI rebuild and server restart. With the latest code this no longer works because the rebuilding process attempts to reuse a docker container name without removing the old container. Relevant excerpt from the log

```
=======================================================================

Type: 

 server <enter> --- restart server
 ui <enter> --- restart ui watcher
 build <enter> --- stop server and watcher, 
 call ui build, then start again
 stop <enter> --- stop the server and ui and exit

Got command='build'
Running docker exec mbdb-site-repo-develop /nrp/bin/nrp develop --command stop --site mbdb-site
 inside /home/mbdb/mbdb-app/sites/mbdb-site
Got command='stop'
Stopping server
Going to kill [81, 17, 11]
Terminating 81 /invenio/venv/bin/python3 /invenio/venv/bin/invenio run --cert docker/nginx/test.crt --key docker/nginx/test.key -h 0.0.0.0
Terminating 17 /invenio/venv/bin/python3 /invenio/venv/bin/invenio run --cert docker/nginx/test.crt --key docker/nginx/test.key -h 0.0.0.0
Terminating 11 /nrp/bin/python /nrp/bin/nrp run --site mbdb-site --outside-docker
Finished running docker exec mbdb-site-repo-develop /nrp/bin/nrp develop --command stop --site mbdb-site
 inside /home/mbdb/mbdb-app/sites/mbdb-site
Running docker compose run --service-ports --rm --no-TTY --name mbdb-site-repo-develop repo develop --site mbdb-site --step DevelopStep
 inside /home/mbdb/mbdb-app/sites/mbdb-site
Error response from daemon: Conflict. The container name "/mbdb-site-repo-develop" is already in use by container "adccae1c70e20a692fec7e2f0dfa405f6d3237420b00de87db7b7475db5844ef". You have to remove (or rename) that container to be able to reuse that name.
Error running docker compose run --service-ports --rm --no-TTY --name mbdb-site-repo-develop repo develop --site mbdb-site --step DevelopStep
```

### Acquiring DOI 

Provide Invenio mechanism to trigger DOI generation through DataCite


