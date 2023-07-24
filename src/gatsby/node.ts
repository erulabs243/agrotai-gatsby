/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import { GatsbyNode } from "gatsby";
import path from "path";
import { SRCDIR } from "../../consts";
import { ICareerNode, IPost } from "@propstypes/particles";

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const dsgTemplate = path.resolve(`${SRCDIR}/templates/using-dsg.tsx`);
  const postTemplate = path.resolve(`${SRCDIR}/templates/post.tsx`);
  const careerTemplate = path.resolve(`${SRCDIR}/templates/career.tsx`);

  const results = await graphql(`
    query {
      allStrapiPost(sort: { updatedAt: ASC }) {
        nodes {
          strapi_id
          slug
        }
      }
      allStrapiCareer {
        nodes {
          strapi_id
          career
        }
      }
    }
  `);

  if (!results) {
    reporter.panicOnBuild("An error whilte building pages");
    return;
  }

  const posts = results.data.allStrapiPost.nodes;
  posts.forEach((post: IPost) => {
    createPage({
      path: `/actualites/${post.slug}`,
      component: postTemplate,
      context: {
        id: post.strapi_id,
        slug: post.slug,
      },
    });
  });

  const careers = results.data.allStrapiCareer.nodes;
  careers.forEach((career: ICareerNode) => {
    createPage({
      path: `/careers/${career.strapi_id}`,
      component: careerTemplate,
      context: {
        id: career.strapi_id,
      },
    });
  });

  createPage({
    path: "/using-dsg",
    component: dsgTemplate,
    context: {},
    defer: true,
  });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(`${SRCDIR}/components`),
        "@images": path.resolve(`${SRCDIR}/images`),
        "@pages": path.resolve(`${SRCDIR}/pages`),
        "@templates": path.resolve(`${SRCDIR}/templates`),
        "@layouts": path.resolve(`${SRCDIR}/layouts`),
        "@propstypes": path.resolve(`${SRCDIR}/propstypes`),
        "@services": path.resolve(`${SRCDIR}/services`),
      },
    },
  });
};
