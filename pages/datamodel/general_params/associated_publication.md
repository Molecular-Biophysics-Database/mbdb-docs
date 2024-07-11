

# Associated publication    

**Description**: If the data in this record is described in published literature (article, journal, thesis), information about the literature can be specified here <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.associated_publication` <br/>
**Type**: polymorphic object <br/>
**Type_field** : type
**Contains**: see available fields <br/>

## Available fields 

### pid 

**Description**: Persistent identifier associated with the publication (e.g. DOI, ISBN, URN) <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.associated_publication.pid` <br/>
**Type**: string <br/>
**format**: ('doi:10.xxx', 'isbn:xxx', 'urn:xxx' ) <br/>

### title 

**Description**: The title of the publication <br/>
**Required**: no <br/>
**Path**: `metadata.general_parameters.associated_publication.title` <br/>
**Type**: string (fulltext) <br/>


### type 

**Description**: The type of the publication <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.associated_publication.type` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Article', 'Book', 'Thesis') <br/>


## One of the following 

### Fields if type is Article 

#### journal

**Description**: The full name of the journal the article appears in <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.associated_publication.journal` <br/>
**Type**: string (fulltext) <br/>


### Fields if type is Book 

#### publisher

**Description**: The full name of the publisher of the book <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.associated_publication.publisher` <br/>
**Type**: string (fulltext) <br/>



### Fields if type is Thesis 

#### degree_type

**Description**: The full name of the publisher of the book <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.associated_publication.degree_type` <br/>
**Type**: Enumerator <br/>
**Options**: ("PhD", "Habilitation", "Master", "Bachelor") <br/>


