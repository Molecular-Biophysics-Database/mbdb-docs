# MP sample dilution

## dilution_buffer:

**Contains**: see [Field available in dilution_buffer](#field-available-in-dilution_buffer)

### Field available in dilution_buffer

#### chemical_environment
**Description**: Name (id) of the chemical environment of
the sample (from the chemical environments defined in the record)<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.sample_dilution.dilution_buffer.chemical_environment` <br/>
**Type**: link <br/>
**Link Target**: Chemical environment<br/>

## dilution_factor:
**Description**: F-fold dilution;<br/>F = Q_buffer / Q_sample,
where Q_buffer is buffer flowrate, Q_sample is sample flowrate.<br/>
For low dilution factors, use more  precise formula (Q_buffer + Q_sample) / (Q_sample)<br/>
**Required**: yes <br/>
**Path**: `metadata.method_specific_parameters.measurements.sample_dilution.dilution_factor` <br/>
**Type**: number (float)<br/>
**Minimum**: 1<br/>