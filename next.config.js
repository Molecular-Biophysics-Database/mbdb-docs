const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx"
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
    assetPrefix: "/mbdb-docs-nextra/",
    basePath: "/mbdb-docs-nextra",
  }
}
module.exports = withNextra(config)

