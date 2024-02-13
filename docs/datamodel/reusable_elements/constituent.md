# Constituents

## value 
**Description**: Short descriptive name (id) of the constituent, must be unique within a record <br/>
**Required**: yes <br/>
**Type**: string (full text)  <br/>

## type
**Description**: The type of the constituent, options are Chemical <br/>
**Required**: yes <br/>
**Type**: enumerator (string) <br/>
**Contains**: ('Polymer', 'Chemical', 'Molecular assembly',
                'Complex substance of biological origin',
                'Complex substance of environmental origin',
                'Complex substance of chemical origin',
                'Complex substance of industrial origin')

## concentration
**Description**: Concentration of the constituent including its relative concentration related to the collected sample or absolute concentration of the constituent <br/>
**Required**: yes <br/>
**Type**: objects (Concentration) <br/>
**Contains**: see [Concentration](concentration.md) <br/> 
