# Chemicals

In order to uniquely identify chemicals, we use InChI keys as the primary way
of identifying chemicals.

## Source

We rely on PubChem for information about chemistry as well as user inputs.

## How will the information accessed?

We will be accessing PubChem from within the MBDB by making calls to their
[REST API](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest-tutorial).

## Why InChI keys?

There's a number of advantages to using InChi keys.

### Only the chemical structure needs to be known

InChi keys are directly derived from an InChI string which in turn is derived
from the chemical structure. This means that even for chemicals that are not
deposited anywhere, we are still able to generate the same unique identifier
that it will eventually get when deposited to PubChem or similar resource.

### Searching across different isotope version of the same chemical

Even after being turned into InChI keys, it's still possible to identify
that the only difference between two chemical is their isotopic composition.
This is very useful if one wants to search for all records that contain a
certain molecule, regardless of isotope. This feature would be very difficult
to create otherwise.

### Efficient searching

InChI keys has the advantage of being very well suited for being efficiently
searched and stored in databases, it's part of how they were designed.

## I can't find my chemical, what should I do?

You can add your own chemical
[here](https://mbdb-data.org/vocabularies/chemicals/_new). Note that you
have to be logged in to create a new vocabulary item, and that it will be
available to everyone.

Furthermore, as we use InChI keys, you need to know the chemical structure.
Based on the structure, the InChI string can be generated, which in turn
can be converted to an InChI key. Most chemical software should be able to fo
this.

## Fields available

### id
The id prefix is `inchikey:`.

**Description**: The id of the chemical  in the form of an inchikey:XLYOFNOQVPJJNP-UHFFFAOYSA-N"<br/>
**Required**: yes <br/>
**Type**: string (keyword) <br/>

### title
**Description**: The systematic name of the chemical<br/>
**Required**: yes <br/>
**Type**: object (Title) <br/>
**Contains**: see [Vocabulary title](../datamodel/reusable_elements/vocabulary_title.md)

### additional_identifiers:
**Description**: Unique and persistent identifier from an external source; options of sources are CAS number (cas:), ChEMBL ID(chembl:), Pubchem Compound ID (pccid:), and Pubchem Substance ID (pcsid:)<br/>
**Required**: no <br/>
**Type**: array of string <br/>

### molecular_weight
**Description**: The molecular weight of the chemical <br/>
**Required**: yes <br/>
**Type**: object (Molecular weight)<br/>
**Contains**: See [Molecular weight](../datamodel/reusable_elements/molecular_weight.md)

### chemical_formula:
**Description**: The chemical formula (e.g H2O) of the chemical <br/>
**Required**: yes <br/>
**Type**: string (fulltext) <br/>