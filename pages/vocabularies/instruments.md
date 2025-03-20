# Instruments

## Source
The instrument vocabulary is currently being maintained by the MBDB.

## I can't find my instrument, what should I do?

Please contact [MBDB]. Make sure to include the information described in
[Fields available](#fields-available), and a link to the
manufacture's/distributor's webpage where the instrument is described.

## Fields available

### id
The id prefix is `ins:`.

**Description**: The instrument id. Note that this is from a local
                 database<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

### title
**Description**: Title of the instrument<br/>
**Required**: yes <br/>
**Type**: object (Title) <br/>
**Contains**: see [Vocabulary title](../datamodel/reusable_elements/vocabulary_title.md)

### manufacturer
**Description**: The (company) name of the manufacturer of the instrument'<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

### technique
**Description**: The model type of the instrument<br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Options** ("MST", "BLI", "SPR", "ITC", "MP")


[MBDB]: mailto:mbdb@ibt.cas.cz?subject=New%20Instrument&body=Instrument%20name%3A%0AManufacturer%3A%0ATechnique%3A