# Titration

## number_injections

**Description**: Number of injections performed in the measurement <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.injection_mode.number_titration`<br/>
**Type**: number (float)<br/>
**Min**: 1 <br/>

## injection_parameters

**Description**: Characteristics of each injection (i. e. number of injections at a specific volume of 0.2 ml) <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.injection_mode injection_parameters`<br/>
**Type**: array of object (injection_parameters)<br/>
**Contains**: See [Fields available in injection_parameters](#fields-available-in-injection-parameters) <br/>

## Fields available in injection_parameters

## n_injections
**Description**: Number of injections measured at a specific volume <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.injection_mode.injection_parameters.n_injections`<br/>
**Type**: number (int)

## volume
**Description**: Titrant volume injected into the cell <br/>
**Required**: no <br/>
**Path**: `metadata.method_specific_parameters.injection_mode.injection_parameters.volume`<br/>
**Type**: object (Volume)<br/>
**Contains**: See [Volume](../reusable_elements/volume.md) <br/>
