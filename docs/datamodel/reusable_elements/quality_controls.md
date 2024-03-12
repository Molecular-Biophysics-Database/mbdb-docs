# Quality controls

## purity
**Description**: Information about if, and how purity was assessed<br/>
**Required**: no <br/>
**Type**: polymorphic object (Purity) <br/>
**Contains**: see [Fields available in purity](#fields-available-in-purity)

## Fields available in purity

### checked
**Description**: Wether or not purity was assessed<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: ("Yes", "No")

**The following fields are available only if "Yes" was chosen**

### method
**Description**: The method that was used to determine the purity<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: ("SDS-PAGE", "Capillary Electrophoresis", "Agarose Gel electrophoresis")

### purity_percentage
**Description**: The obtained purity (in percent)<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: ('\<90 %', '>90 %', '>95 %', '>99 %')

## homogeneity
**Description**: Information about if, and how homogeneity was assessed<br/>
**Required**: no <br/>
**Type**: polymorphic object (Homogeneity) <br/>
**Contains**: see [Fields available in homogeneity](#fields-available-in-homogeneity)

## Fields available in homogeneity

### checked
**Description**: Wether or not homogeneity was assessed<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: ("Yes", "No")

**The following fields are available only if "Yes" was chosen**

### method
**Description**: The method that was used to determine the homogeneity<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: ("Dynamic light scattering",
              "Size exclusion chromatography",
              "Native Gel Electrophoresis",
              "Mass photometry")

### expected_number_of_species
**Description**: The number of species that were expected to be present<br/>
**Required**: yes <br/>
**Type**: umber (integer) <br/>
**Minimum**: 1

### number_of_species_observed
**Description**: The number of species that was observed to be present<br/>
**Required**: yes <br/>
**Type**: umber (integer) <br/>
**Minimum**: 1


## identity
**Description**: Information about if, and how identity was assessed<br/>
**Required**: no <br/>
**Type**: polymorphic object (Identity) <br/>
**Contains**: see [Fields available in identity](#fields-available-in-identity)

## Fields available in identity

### checked
**Description**: Wether or not the identity was confirmed experimentally<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: ("Yes", "No")

**The following fields are available only if "Yes" was chosen**

### by_intact_mass
**Description**: How identity was determined by intact mass, if applicable'<br/>
**Required**: no <br/>
**Type**: object (Intact_mass) <br/>
**Contains**: see [Fields available in by intact mass](#fields-available-in-by-intact-mass)

### Fields available in by intact mass

#### method
**Description**: The method that was used to determine the intact mass<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: ("Mass spectrometry", "SDS-PAGE")

#### deviation_from_expected_mass
**Description**: The amount, including unit, the obtained intact mass deviated from the expected intact mass<br/>
**Required**: yes <br/>
**Type**: object (Molecular_weight) <br/>
**Contains**: see [Molecular weight](molecular_weight.md)


### by_sequencing
**Description**: How identity was determined by intact mass, if applicable'<br/>
**Required**: no <br/>
**Type**: object (Intact_mass) <br/>
**Contains**: see [Fields available in by intact mass](#fields-available-in-by-intact-mass)

### Fields available in by sequencing

#### method
**Description**: The method used to determine identity by sequence<br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: enum("Mass spectrometry-Mass spectrometry",
                  "Edman degradation",
                  "Sanger sequencing",
                  "Next generation sequencing")

#### coverage
**Description**: The amount of the total (expected) sequence that was actually observed by sequencing in percent<br/>
**Required**: yes <br/>
**Type**: number (float) <br/>
**Minimum**: 0
**Maximum**: 100

### by_fingerprinting
**Description**: How identity was determined by finger printing, if applicable'<br/>
**Required**: no <br/>
**Type**: object (Intact_mass) <br/>
**Contains**: see [Fields available in by fingerprinting](#fields-available-in-by-fingerprinting)

### Fields available in by fingerprinting

#### method
**Description**: The method used for determining identity by fingerprinting <br/>
**Required**: yes <br/>
**Type**: enumerator <br/>
**Options**: enum("Protease digest + Mass spectrometry",
                  "Restriction enzyme digest + Gel electrophoresis")



