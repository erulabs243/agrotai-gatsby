/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "@components/header";
import { Container } from "@chakra-ui/react";
import Footer from "@components/footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  //FIXME remove console.log
  console.log(JSON.stringify(data, null, 2));

  return (
    <>
      <Container w="100vw" maxW="100vw" p={0}>
        <Header siteTitle="Agrotai" />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
