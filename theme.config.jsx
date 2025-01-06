import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export default {
    logo: <span>MBDB</span>,
    logoLink: "https://mbdb.test.du.cesnet.cz/",
    project: {
      link: "https://github.com/Molecular-Biophysics-Database/mbdb-app"
    },
    sidebar: {
      defaultMenuCollapseLevel: 1
    },
    footer: {
      content: (
        <a href="https://mbdb.test.du.cesnet.cz/" target="_blank">
        © {new Date().getFullYear()} MBDB
        </a>
      )
    },
    docsRepositoryBase: "https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",
    // place things into the head tag
    head: () => {
      const config = useConfig()
      const title = config.title || ''
      const finalTitle = `MBDB Docs - ${title}`
      return (
        <>
          <title>{finalTitle}</title>
          <meta property="og:title" content={config.frontMatter.title || 'MBDB Docs'} />
          <meta
            property="og:description"
            content={config.frontMatter.description || 'The documentation for MBDB'}
          />
        </>
      )
    }
  }
