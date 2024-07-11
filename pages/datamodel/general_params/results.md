
# Results 

## Result

**Description**: List of the results (parameter) that were derived by analyzing the raw data, and which steps were taken to obtain them <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results` <br/>
**Type**: array of polymorphic object (Result) <br/>
**Type_field**: type 
**Contains**: see [Fields available result](#fields-available-in-result)

## Fields available in result

## id 

**Description**: Unique ID for the result to be used as a link <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.id` <br/>
**Type**: string (keyword) <br/>

## name 

**Description**: Descriptive name (id) of the result (e.g. Kd of Lysozyme and VHH2). Must be unique within a record <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.name` <br/>
**Type**: string (fulltext) <br/>

## type

**Description**: The type of physical parameter the result represents <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.type` <br/>
**Type**: enumerator (string) <br/>
**options**: ('Concentration',
            'Stoichiometry',
            'Constant of association KA',
            'Constant of dissociation KD',
            'Half maximal effective concentration EC50',
            'Hill coefficient',
            'Association rate kOn',
            'Dissociation rate kOff',
            'Change in enthalpy deltaH',
            'Change in entropy deltaS',
            'Change in Gibbs free energy deltaG',
            'Molecular weight')

## value 

**Description**: Numerical value of the result <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.value` <br/>
**Type**: number (float) <br/>

## value_error

**Description**: The expected error of the result in terms of a 95 % confidence interval <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.value_error` <br/>
**Type**: object (Value_error) <br/>
**Contains** see [Value error](../reusable_elements/value_error.md)

## unit

### One of the following depending on the result type 

### Concentration 

**Description**: Unit of the concentration <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('M', 'mM', 'µM', 'nM', 'pM', 'fM', 'aM',
            'g/L', 'mg/mL', 'µg/mL', 'ng/mL',
            'mol/kg', 'mmol/kg',
            'v/v %','w/w %', 'v/w %', 'w/v %',
            'U/ml','% saturated')

### Stoichiometry 

**Description**: Unit of the stoichiometry<br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('per complex')


### Constant of association 

**Description**: Unit of the constant of association<br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('M^-1', 'M^-2',
              'mM^-1', 'mM^-2',
              'µM^-1', 'µM^-2',
              'nM^-1', 'nM^-2')

### Constant of dissociation 

**Description**: Unit of the constant of association<br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('M', 'M^2',
            'mM', 'mM^2',
            'µM', 'µM^2',
            'nM', 'nM^2')

### Association rate constant

**Description**: Unit of the association rate constant <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('M^-1 s^-1', 'M^-2 s^-1',
            'mM^-1 s^-1', 'mM^-2 s^-1',
            'µM^-1 s^-1', 'µM^-2 s^-1',
            'nM^-1 s^-1', 'nM^-2 s^-1')


### Dissociation rate constant

**Description**: Unit of the dissociation rate constant <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('s^-1')

### Change in enthalpy

**Description**: Unit of the change in enthalpy <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('kcal/mol','kJ/mol')

### Change in entropy

**Description**: Unit of the change in entropy <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('kcal/molK','kJ/molK')

### Change in Gibbs free energy

**Description**: Unit of the change in Gibbs free energy <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('kcal/mol','kJ/mol')

### Molecular weight

**Description**: Unit of the molecular weight <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('g/mol', 'Da', 'kDa', 'MDa')

### Half maximal effective concentration 

**Description**: Unit of the molecular weight <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('g/mol', 'Da', 'kDa', 'MDa')

### Hill coefficient 

**Description**: Unit of the molecular weight <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.unit` <br/>
**Type**: enumerator (string) <br/>
**Options**: ('unitless')

## entities_involved

**Description**: List of chemical or molecular assemblies the result describes and how many copies of each are involved <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.entities_involved` <br/>
**Type**: array of object (Entity_and_stoichiometry) <br/>
**contains**: see [Fields available in entity and stoichiometry](#fields-available-in-entity-and-stoichiometry)

## Fields available in entity and stoichiometry

### entity

**Description**: Name (ids) of the entity (from the entities of interest defined in the general parameters) <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.entities_involved.entity` <br/>
**Type**: string (fulltext) <br/>

### copy_number

**Description**: Number of copies of the entity that contribute to the result, -1 if unknown (e.g. if two individual copies of a polymer binds to another, the copy number would be 2) <br/>
**Required**: yes <br/>
**Path**: `metadata.general_parameters.results.entities_involved.entity` <br/>
**Type**: number (float) <br/>
**Minimum**: -1
