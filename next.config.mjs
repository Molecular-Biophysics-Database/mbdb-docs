import nextra from "nextra"

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
    latex: true
})

let config = {
  images: {
    unoptimized: true,
  },
  output: "export"

}


if (process.env.GITHUB_REPOSITORY) {
  config = {
    ...config,
    assetPrefix: "/mbdb-docs/",
    basePath: "/mbdb-docs",
  }
}
export default withNextra(config)

