---
sidebar_position: 2
---

# Pubchem and InChI keys

In order to uniquely identify chemicals, we use InChI keys as the primary way of identifying chemicals. We're currently working on implementing Pubchem as a resource for extracting chemical compounds, however it's not available yet .

## How will the information accessed?   

We will be accessing Pubchem from within the MBDB by making calls to their [REST API](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest-tutorial).

## Why InChI keys? 

There's a number of advantages to using InChi keys.

### Only the chemical structure needs to be known 

InChi keys are directly derived from an InChI string which in turn is derived from the chemical structure. This means that even for chemical that has not been deposited anywhere we're able to generate a unique identifier. Furthermore when it later on get's deposited somewhere else.

### Searching across different isotope version of the same chemical

Even after being turned into InChI keys, it's still possible to identify that the only difference between two chemical is their isotopic composition. This is very useful if one wants to search for all records that contain a certain molecule, regardless of isotope. This feature would be very difficult to create otherwise.    

### Efficient searching

InChi keys has the advantage of being very well suited for being efficiently searched and stored in databases, it's part of how they were designed 


## Depositing new chemicals  

Whenever possible, we allow users to search for the name of chemicals through Pubchem, and then extract the required information automatically. However, this obviously requires that it's a known chemical, and not one that has been created for a specific study and therefore hasn't been deposited anywhere else yet. To accommodate this, we allow users to create a local record of their chemical, provided they're able to supply the basic information the chemicals.



  