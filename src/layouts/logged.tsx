/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"

import Header from "@components/header"
import { Container } from "@chakra-ui/react"
import Footer from "@components/footer"
import { LoggedHeader } from "@components/particles"
import { useAtomValue } from "jotai"
import { authTokenAtom } from "../atoms"

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

  const authTokenValue = useAtomValue(authTokenAtom)

  const isLogged = () => {
    const authToken = localStorage.getItem('agrotai-authToken');
    return authToken && authTokenValue ? true : false;
  }

  if(isLogged()) 
    return (
      <>
        <Container w="100%" maxW="100%" p={0}>
          <LoggedHeader 
            siteTitle="Agrotai" 
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
  
    else
      navigate('/auth/login')
}

export default LoggedLayout
