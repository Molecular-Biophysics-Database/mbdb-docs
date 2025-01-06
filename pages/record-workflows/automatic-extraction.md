# Automatic extraction of metadata from raw measurement files

## Introduction

Automatic extraction of metadata from raw files is attempted whenever a file is
uploaded. **Existing information will get overwritten if a new raw
file is uploaded**. Note that the file is not uploaded until the draft is saved.

## Available extractors

### MST

Extraction is attempted for the following file types:

 * .moc
 * .moc2
 * .xlsx (exported raw data)

Note that the amount of extracted metadata might depend on the file type.