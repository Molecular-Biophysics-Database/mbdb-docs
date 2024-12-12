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
      text: (
        <a href="https://mbdb.test.du.cesnet.cz/" target="_blank">
        © {new Date().getFullYear()} MBDB
        </a>
      )
    },
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s - MBDB Docs'
        }
      }
    },

    docsRepositoryBase: "https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main",
    // place things into the head tag
    head: () => {
      const { frontMatter } = useConfig()
      return (
        <>
          <meta property="og:title" content={frontMatter.title || 'MBDB Docs'} />
          <meta
            property="og:description"
            content={frontMatter.description || 'The documentation for MBDB'}
          />
        </>
      )
    }
  }
