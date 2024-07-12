# Data fitting

## model

**Description**: Description of the model (e.g. 1:1 binding)<br/>
**Required**: yes <br/>
**Type**: string <br/>

## software_name

**Description**: The name of the software that was used for 
doing the data fitting (e.g. Excel)<br/>
**Required**: no <br/>
**Type**: string <br/>

## software_name

**Description**: The version of the software that was used for the step<br/>
**Required**: no <br/>
**Type**: string (keyword) <br/>

## quality

**Description**: Numerical value representing the quality estimate of the result<br/>
**Required**: no <br/>
**Type**: number (float) <br/>

## quality_type

**Description**: Type of the quality estimate <br/>
**Required**: no <br/>
**Type**: enumerator (string) <br/>
**Options**: ('R^2', 'SEM', 'red. Chi^2', '1sigma', '2sigma',
              '3sigma', '5sigma', 'Skewness')
