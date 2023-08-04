/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { SERVER_HOST } from "../../consts";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
  url?: string;
};

function Seo({ description, title, image, url, children }: Props) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const siteUrl = site.siteMetadata?.siteUrl;

  const img = image?.startsWith("http") ? image : `${SERVER_HOST}${image}`;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={img} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="og:locale" content="fr_FR" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:url"
        content={url ? `${siteUrl}${url}` : `${siteUrl}`}
      />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={img} />
      {children}
    </>
  );
}

export default Seo;
