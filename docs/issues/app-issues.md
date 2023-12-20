---
sidebar_position: 2
---
# App Issues
(list updates daily)

### Library upgrade before rdm12

null

### Overlapping scrollbars

The scrollbar of the main window and scroll bar of the frame with items are overlapping, so you can drag it with a mouse.

OS: Linux/Ubuntu with Gnome 3
Browser: Firefox 120

### Id to default search

null

### Add context depended default values 

In order to make the input of the data by the user easy, we could preset some parameters by default. For instance, nanotemper usually use uM as concentrations and K as temperature. This unit should be preselected but allowed to change them if necessary.

### Record view not working due to missing values 

Several elements appear to have no default values which causes the record view to result in an internal error page rather than rendering the record view. 

This has been caused by editation allowing for incomplete data to be deposited as drafts .

 inside ui/mbdb-mst-ui/mbdb_mst_ui/templates/semantic-ui/mbdb_mst_ui/MBDB The following files are affected:
 
 LICENSE README.md babel.config.js docs docusaurus.config.js package-lock.json package.json sidebars.js src static Depositors.jinja
 LICENSE README.md babel.config.js docs docusaurus.config.js package-lock.json package.json sidebars.js src static PersonName.jinja
 LICENSE README.md babel.config.js docs docusaurus.config.js package-lock.json package.json sidebars.js src static Location.jinja 
 LICENSE README.md babel.config.js docs docusaurus.config.js package-lock.json package.json sidebars.js src static RawMeasurements.jinja

Likely more templates are affected by this 


### Why isn't the red icon disappearing 

If all the mandatory fields in the Record information are completed, the red alert icon show disappear (?). I think it happens in other fields.
![image](https://github.com/Molecular-Biophysics-Database/mbdb-app/assets/20229814/f2a09fd5-c568-4bcb-a265-47c6ef3a8239)

### MST datanalysis define Fhot and Fcold in single line 

In ‘Data analysis’, we believe that using Cold and Hot region a single line for each value would be more appropriate than F cold or F hot:
Cold region: start (field to fill) end (field to fill)
Hot region: start (field to fill) end (field to fill)

### Position field not clear 

 Inside ‘Measurements’, we think it is not clear what the users have to include in the ‘Position’ field.

###  ‘Excitation LED Power’ and ‘IR MST laser power’ per measurement instead of per experiment

It could be a good idea to introduce the ‘Excitation LED Power’ and ‘IR MST laser power’ fields in each measurement because they can change between them within a record.

### Dropdown menu in ‘IR MST laser power’ 

 in the ‘IR MST laser power’ field we could include a drop-down with 3 options (Low, Medium and High), in case the laser power of all MST equipment uses the same terms and not numerical values.


### Ability to write the new experiment type when other is chosen 

Related to method specific parameters, in the ‘Experiment type’ field, it is possible to choose between 3 options (Affinity, Concentration and Other). So, if we choose ‘Other’, a new field could appear to introduce by hand what kind of experiment is. 

### Unclear location of derived parameters

 Derived parameters: why is this here? Why is it not introduced within ‘data analysis’? I think we are repeating information.

### Unclear if Quality controls is mandatory

General Parameters>Chemical information>Entities of interest>Quality controls: is this field mandatory? Because its ‘Parameter’ appears as a field required.

### ‘Collection start time’ is oddly positioned 

‘Collection start time’ field is in the middle of the deposit, which is a bit confusing, so we suggest including it in the ‘Raw measurements’ section because it is the date in which these measurements were taken. In addition, we think the field should not allow introducing dates after the current day.

### Performance test could be another record in the MBDB

Many times, the performance test will be just another record in the MDBD, that option should be given in the interface by giving the recordID of the performance test

### The input form is generally too complicated

Generally speaking, it is very easy to get lost through the sections. Information with different levels of importance are presented at the same level in the interface and many times I don't know in which section and subsection I am

Reducing the fields or eliminating full sections should be considered.

Before eliminating fields we could try playing with the colors of the levels of the db. Another option could be that the third level of information should be shown only when it is dropped down. For instance: “Published test protocol” which is inside “Performance test” which is inside of “Instrument” should not be fully displayed and its background should be in yellow (this is just an example).

### Group mandatory fields 

The mandatory fields should be as much together as possible. Access rights and Metadata access rights should be displayed before Project information (which is not mandatory). If not, it becomes a bit confusing, especially if I click on “do not provide this data”

### "Performance test" takes to much attention

In the ‘Instrument’ section there is too much information about ‘Performance test’ which contributes to loss the focus. As an example of our confusion, we thought the “File” at the bottom of this section was the file with the raw data, but It was still related to the ‘performance test’. 

### Unclear what "Physical conditions at sample handling" refers to

The explanation of the section “Physical conditions at sample handling” claims that it refers to the BEFORE handling. It is confusing and it is not clear the difference with the storage section.

### More information about published work

There is a ‘Publisher’ field which refers to editorial or journal but there is no option to include volume, issue, page, etc. Maybe this is too much information that we could collect from the DOI or a ‘cite’ option in the APA format in order to make the data entry more user-friendly.

### Include option reuse person information in more sections 

It could be great to include an option to indicate that the ‘principal contact’ is the same as the ‘depositor’ in order to not repeat information and reduce the number of fields the user has to complete manually.

### Person identifiers should be renamed to ORCID

When we talk about ‘Identifiers’ of ‘Depositors’, ‘Principal Contact’ or other people, it is only available for ORCID numbers. So we should change ‘Identifier’ to ‘ORCID number’ to make the entry clearer. 


### Enter "Keywords" in one line

Allowing enter ‘Keywords’ in ‘Record information’ in one line, separated by commas.

### indication that user is logged in is missing 

We miss any indication that I am logged in under my account (username, icon, name of the depositor, orcid number) as a personal site bottom.

### Use the standard (*) instead of (■) for mandatory fields

We consider it more intuitive to use (*) instead of (■) for the mandatory fields because it is what is usually used in other websites.

### Redundant “Do not provide this data” in “Associated Publications”

Tester comment:
In section “Associated Publications” there are two “Do not provide this data”. I think one of them is unnecessary.

### Change text for marking section as not provided 


Some fields contain the text “do not provide this data” which could be confusing to the user because it seems more like an order to the user than a statement from the user. It may be something more friendly like “ I don’t want to provide this data”. 


### Too much secondary information, consider two stage release 

Tester comment:

Consider releasing the MDdb for beta testers in two-step process: a first step when only with “Minimal viable product MVP” is realized, showing only the more common parameters for MST deposit. 

This would allow us to focus the feedback on the important things and, more importantly, make the tester´s life easy and decrease the “learning curve” for the user. For instance, secondary (and more confusing) information for MST as Pressure, Humidity or Funding reference would not be available in the first release. I am bit worry that people (even “early-adopters”) will not use the database because it is too complicated to use.

### Vocabulary API performance

Performance of the vocabulary API appears to be slow, particularly when a larger number of items is requested.

On the testing setup that I have available there are 1003 items present in the "organisms" vocabulary. mbdb-app is running in development mode in a VM form a mechanical disk. The VM is accessed via a guest-host network bridge. A request to fetch all 1003 items from the vocabulary often fails with a timeout error. The timeout is set 15 (fifteen) seconds, which should be more than enough to retrieve around ~1000 entries. If the timeout is reduced even further, (say to 1500 ms) even queries with the `?suggest` parameter begin to time out.
The "affiliations" vocabulary (with 1000 entries) fares a little better but a fetch of the entire vocabulary still takes over 5 secs. 

These results are very well reproducible.

The questions that should probably be asked:
- Why is there such a performance disparity between two vocabularies that have the same number of entries?
- Is this performance expected or is this some defect of the development setup?

### Deposition form - file upload failure 

Tester bugreport: 
After trying to upload a pdf file to the record at 09:25 (23-11-2023) then refreshing the entry view for the database I got the following error:

![image](https://github.com/Molecular-Biophysics-Database/mbdb-app/assets/20229814/d9eb72a0-885c-45b3-a2e4-57ab6d43c61a)

After removing the pdf file (it was only small, 189 kb) the entry page could be viewed again.


