---
sidebar_position: 2
---
# App Issues
(list updates daily)

### Record view - instrument displayed twice

The information about the instrument at the top of the record should be removed 

### Search listing - Display entities of interest directly

Iterate over general_parameters.chemical_information_chemicals directly instead of going over method_specific_parameters.measurements.samples

### Search listing - Use source organism from all of the entities of interest 

display source organism from all of the entities of interest instead of only the first one

### Search behaviour - record id

I tried using record id in searches but it does not seem to work.

### Search behaviour - partial match of word 

It may be a current feature but searching for a partial word 
SCV 
(SCV50) is present in the inhibitor name
gave nothing
so I had to search for SCV50 to find the records ..

### Search behaviour - More meaningful link when no results are found

When I did not find the search key and pressed start over - it put me to the complete listing instead of the search page.

### User Interface items

Please add the "All entries" button at the top menu line before Documentation.
Moving into testing this should appear there..

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


