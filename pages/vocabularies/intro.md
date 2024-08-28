# Vocabularies

## What are vocabularies

Each vocabulary type is a **global** collection of sets of values the can be
reused across multiple records.

An example of a collection could be chemicals, and an example of a set of
values (and item) could be table salt (NaCl). Table salt has certain information
associated with it that are the same across all records (chemical formula,
several database identifiers etc.). Vocabularies is a way to implement this
concept.

## How can use vocabulary items and when

As soon as a vocabulary item is created, it is available all users, and
**findable to everybody with an internet access, and it cannot be deleted**
by users (even their creators), and admins are only able to delete it in
the case that it is not used in any record.

## Why MBDB uses vocabularies

### Improved consistency

The main reason is data consistency which improves both the
searching and the ease of updating information across records.

Without vocabularies for *e.g* affiliations, the same institute
could be referred to by multiple names 1) the English name,
2) native language name, 3) abbreviated forms of both, 4) all the above with
typos. This makes searching complicated as it would have to include all
possible forms.

### Compatibility and accuracy

Whenever possible, we try to be compatible with other online resources such that
people can easier search across different resources, and ensure correctness of the
information. An example of this organisms. NCBI taxonomy IDs are already
established for this purpose, and NCBI have the expertise for deciding when
e.g. a name of an organism should be changed.


## Implementation

Vocabularies are conceptually similar to foreign keys in a relational
data model, with the exception that all types need to follow the same schema
(they exist as a single table in the relational model analogy).

### ID prefixes

To be able to distinguish the different vocabulary types from
each other, each type's ID has it's own prefix (e.g. `inchikey:`
for chemical IDs).

### Example

An example of a vocabulary item:

```json
{
  "@v": "f791f5fc-2f32-49ad-9b1d-0092a383f0aa::1",
  "additional_identifiers": [
    "cid:962"
  ],
  "chemical_formula": "H2O",
  "id": "inchikey:XLYOFNOQVPJJNP-UHFFFAOYSA-N",
  "molecular_weight": {
    "unit": "g/mol",
    "value": 18.02
  },
  "title": {
    "en": "Water"
  }
}
```

## Types

The following vocabulary types are defined in MBDB, and details
about them can be found by following the links below.

  1. [Affiliations](affiliations.md)
  2. [Chemicals](chemicals.md)
  3. [Grants](grants.md)
  4. [Instruments](instruments.md)
  5. [Languages](languages.md)
  6. [Organisms](organisms.md)