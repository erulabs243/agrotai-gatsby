/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "@components/header"
import { Container } from "@chakra-ui/react"
import Footer from "@components/footer"
import { LoggedHeader } from "@components/particles"

type Props = {
  username: string;
  children: React.ReactNode
}

const LoggedLayout = ({ username, children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container w="100%" maxW="100%" p={0}>
        <LoggedHeader 
          siteTitle="Agrptai" 
          username={username} 
        />
        <Container 
          w={{base: 'full', md: '85vw'}}
          maxW={{base: 'full', md: '85vw'}}  
          p={{base: 4, md: 8}}
          mx="auto"
        >
          {children}
        </Container>
        <Footer />
      </Container>
    </>
  )
}

export default LoggedLayout
