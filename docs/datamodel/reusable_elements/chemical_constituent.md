# Chemical constituent

## value 
**Description**: Short descriptive name (id) of the constituent, must be unique within a record <br/>
**Required**: yes <br/>
**Type**: string (full text)  <br/>

## type
**Description**: The type of the constituent, options are Chemical <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Contains**: ('Chemical') <br/>

## concentration
**Description**: Concentration of the constituent including its relative concentration related to the collected sample or absolute concentration of the constituent <br/>
**Required**: yes <br/>
**Type**: objects (Concentration) <br/>
**Contains**: see [Concentration](concentration.md) <br/>

## The fields from one of the following objects

### Polymer

See [Polymer](polymer.md)  

### Chemical

See [Chemical](chemical.md)  

### Molecular assembly

See [Molecular assembly](molecular_assembly.md)  

### Complex substance of biological origin

See [Complex substance of biological origin](biological_origin.md)  

### Complex substance of environmental origin

See [Complex substance of environmental origin](environmental_origin.md) 

### Complex substance of chemical origin

See [Complex substance of chemical origin](chemical_origin.md) 

### Complex substance of industrial origin

See [Complex substance of industrial origin](industrial_origin.md)