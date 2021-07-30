/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
let path = require("path")
// You can delete this file if you're not using it
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/fac-report/)) {
    page.matchPath = "/fac-report/*"
    page.component = path.resolve(`src/pages/fac-report.js`)
    // Update the page.
    createPage(page)
  }
}
