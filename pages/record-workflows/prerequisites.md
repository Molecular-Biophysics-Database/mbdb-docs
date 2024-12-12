# What to prepare for a deposition

To deposit raw data you will need to assemble the following information connected to each dataset:

## Record and personal information (Bibliographic information)
- A title for the record
- Bibliographic information for the associated publication (if any)
- Name, ORCID, affiliation of the depositor (person who performs the data
  deposition)
- Name, ORCID, affiliation of the Principal contact (principal investigator,
  laboratory head, i.e. the person responsible for the project to which the
  dataset belongs)
- You may also input information about other co-authors (contributors)
- Funding/grant information, MBDB relies on the OpenAire database, optionally
  you can add a new grant (grant title, name of the funder/grant agency,
  grant ID under which the agency awarded it)

## Identity and details about the studied molecules (Entities of interest)
- For proteins and nucleic acids: sequence, mutation information (variant),
  source (original) organism, expression organism, reference to external
  database (UniProt), MW, modifications (unnatural amino acids,
  post-translational, chemical), was purity checked? (SDS-PAGE or other), was
  identity checked? (MS or other), was homogeneity checked? (SEC, native gel,
  mass photometry)
- For molecular assemblies (oligomers, polymerases, ribosomes, virions, etc.):
  information about composition, assembly reference (if any existing) - e.g.
  to a structure in the PDB, number of copies of a particular subunit/molecule,
  details as above about each molecule
- For chemicals/small molecules: name (or CAS number, ChemBL id, you will be
  searching in the PubChem vocabulary), any additional information (optional,
  e.g. on purity or special treatment)
- For complex substances of biological, environmental, chemical or industrial
  origin (e.g. blood,  plant extract, foodstuffs) information about the origin
  and preparation of the sample (check the input form for details)

## Chemical environments (buffer, known components of measurement solution)
- Precise composition of the measurement environment, typically the components,
  concentration of  the components and pH of your measurement buffer, any
  additional components present at the time of measurement (chemical name or CAS
  number or ChemBL id, you will be searching in the PubChem vocabulary)
- Any additional information such as special preparation procedures or
  properties of the components  (RNase free, filtration, etc.)
- If more than one environment (buffer solution) was used, you can specify them
  separately and  distinguish by a different name (e.g. buffer A, buffer B, wash
  buffer, binding buffer)

## Raw measurement files
- Prepare the original files produced by the instrument that contain the raw
  data, ideally without  any processing (background subtraction, smoothing,
  etc.), if it is possible in the context of a given measurement software.
  Typically, these are files in a special format, defined by the instrument
  manufacturer (e.g. .moc, .itc, .blr, .dsx). If the instrument software allows,
  please, provide also data converted into one of the following formats: .csv,
  .xlsx, .txt. If you are aware of processing steps applied to the data by the
  software, prepare to shortly describe the processing steps.
- Once at least one raw measurement file is uploaded, you can also upload a file
  with derived  measurement data. Prepare to describe shortly the data
  processing steps that were applied.
- Files with quality control reports may be also uploaded, ideally annotated
  .pdf files (other  generally used formats are also accepted), containing gel
  images, mass spectrometry data, SEC profiles, etc.

## Results
- The type of result and its value, derived from your data, e.g. a KD -
  dissociation constant. You  may also report the estimated value error, either
  as lower error and upper error or as fractional uncertainty (e.g. 0.1
  corresponding to 10% error).
- Multiple results per data set may be reported (e.g.  KD and stoichiometry).

## Instrument information
- The particular type and version of the instrument used for your measurement
  (e.g. MicroCal ITC200). You will select from predefined types for a
  particular method. Contact us if you cannot find your instrument type.
- Date when the data collection was realized or started
- Method specific parameters (such as which type of experiment, which type of
  signal was collected  – e.g. Spectral shift; key parameter settings, e.g.
  laser power, time steps, titration volumes, cell volume, stirring speed,
  temperature)

## Sensors, plates, chips, measurement protocol
- For interaction techniques (BLI, SPR) information about used sensors (chips)
  and plates, including manufacturer
- Information about measurement cells/positions in the sensor
- Basic information about the individual steps of the measurement protocol
  (activation, wash,  association, dissociation, etc.)

 ## Measurements information
- Using your previous input (entities of interest, chemical environments,
  measurement positions)  you will identify individual measurements. A minimum
  of two measurement descriptions are required, so that the raw measurement file
  content can be re-interpreted and reused.

## Data analysis (optional)
- You are welcome to describe in basic terms the data fitting procedure applied
  to your data to  obtain your referred Result(s), i.e. the data model applied
  (1:1 binding), software and its version, quality criterion used ($R^2$ of
  regression, etc.).
- You may also describe the individual data processing steps (e.g. background
  subtraction,  smoothing, outliers removal).
