/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import { GatsbyNode } from "gatsby"
import path from "path"
import { SRCDIR } from "../../consts"

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions

  const dsgTemplate = path.resolve(`${SRCDIR}/templates/using-dsg.tsx`)

  createPage({
    path: "/using-dsg",
    component: dsgTemplate,
    context: {},
    defer: true,
  })
}
