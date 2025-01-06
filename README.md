# mbdb-docs

The documentation website is built using [Nextra](https://nextra.site/), which
is a modern static website generator.

## Requirements

 * Node.js (>= 20.11 )

### Install requirements

A guide to install node can be found [here](https://nodejs.org/en/download/package-manager)

## Installation

Inside the top level mbdb-docs folder run

```bash
npm install
```

## Starting local development

Inside the top mbdb-docs run:

```bash
npm run dev
```

This should start a local development server at http://localhost:3000/
which live updates

## Local building and running:

```bash
npm run build
npm run start
```

## Editing the docs

The content of the /pages folder is used to
generate documentation itself.

### images

Images should be placed in public/static/img.

## Deployment

Updating the gh-pages in order to deploy it at
[github.io](https://molecular-biophysics-database.github.io/mbdb-docs/)
is automatically triggered by pull request to the main branch.
