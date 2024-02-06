---
sidebar_position: 5
---

# Associated publication    

**Path**: `metadata.general_parameters.associated_publication` <br/>
**Required**: yes <br/>
**Type**: polymorphic object <br/>
**Type_field** : type
**Contains**: see available fields <br/>
**Description**: If the data in this record is described in published literature (article, journal, thesis), information about the literature can be specified here

## Available fields 

## pid 

**Path**: `metadata.general_parameters.associated_publication.pid` <br/>
**Required**: yes <br/>
**Type**: string <br/>
**format**: ('doi:10.xxx', 'isbn:xxx', 'urn:xxx' ) <br/>
**Description**: Persistent identifier associated with the publication (e.g. DOI, ISBN, URN)

## title 

**Path**: `metadata.general_parameters.associated_publication.title` <br/>
**Required**: no <br/>
**Type**: string (fulltext) <br/>
**Description**: The title of the publication


## type 

**Path**: `metadata.general_parameters.associated_publication.type` <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options**: ('Article', 'Book', 'Thesis') <br/>
**Description**: The type of the publication

## One of the following 

## 1. available fields if type is Article 

## journal

**Path**: `metadata.general_parameters.associated_publication.journal` <br/>
**Required**: yes <br/>
**Type**: string (fulltext) <br/>
**Description**: The full name of the journal the article appears in'

## 2. available fields if type is Book 

## publisher

**Path**: `metadata.general_parameters.associated_publication.publisher` <br/>
**Required**: yes <br/>
**Type**: string (fulltext) <br/>
**Description**: The full name of the publisher of the book'


## 3. available fields if type is Thesis 

## degree_type

**Path**: `metadata.general_parameters.associated_publication.degree_type` <br/>
**Required**: yes <br/>
**Type**: Enumerator <br/>
**Options**: ("PhD", "Habilitation", "Master", "Bachelor") <br/>
**Description**: The full name of the publisher of the book'

