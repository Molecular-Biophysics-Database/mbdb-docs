# mbdb-docs 

This website is built using [Nextra](https://nextra.site/), a modern static website generator.

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

Updating th gh-pages in order to deploy it at 
[github.io](https://molecular-biophysics-database.github.io/mbdb-docs/) 
is automatically triggered by pull request to the main branch.   