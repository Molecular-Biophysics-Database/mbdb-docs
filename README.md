# mbdb-docs

The documentation website is built using [Nextra](https://nextra.site/) 3,
which is a modern static website generator.

## Requirements

 * Node.js (>= 20.11 )

### Install requirements

A guide to install Node.js can be found [here](https://nodejs.org/en/download/package-manager)

## Installation

Clone this repository. Inside the top level folder run:

```bash
npm install
```

## Local development

Inside the top level run:

```bash
npm run dev
```

This should start a local development server at http://localhost:3000/
which automatically picks up changes (it only compiles when you navigate to a
page).

## Local build

Generating a static webpage can be accomplished by running the `build` command
from inside the top level folder:

```bash
npm run build
```

The output (static webpage) is stored in the .out folder.

## Local serving

To locally serve a generated static webpage (from .out), the `start`
command is used:

```bash
npm run start
```

## Editing the docs

The content of the /pages folder is the source of
the documentation.

### Images

Images should be placed in public/static/img.

## Deployment

Updating the gh-pages in order to deploy it at
[github.io](https://molecular-biophysics-database.github.io/mbdb-docs/)
**should not be done manually!**.

Instead, it should be done through a pull requests to the main branch.
This is then automatically picked up and deployed by a
[GitHub action](https://github.com/Molecular-Biophysics-Database/mbdb-docs/blob/main/.github/workflows/deploy.yml)

## Automatic extraction of issues from mbdb-app

Note that there's a
[Github action](https://github.com/Molecular-Biophysics-Database/mbdb-docs/blob/main/.github/workflows/issues_from_app.yml)
that runs every day at midnight which
extracts issues from the mbdb-app and push the corresponding changes to the main
branch.