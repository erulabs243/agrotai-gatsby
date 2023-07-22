import { Box, Heading, Stack, Text, Image } from '@chakra-ui/react';
import Layout from '@layouts/layout';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { PageProps, graphql } from 'gatsby'
import React from 'react'
import ReactMarkdown from 'react-markdown'

type ResultType = {
  strapiCareer: {
  career: string;
    description: string;
    isAvailable: boolean;
    updatedAt: string;
    requirements: {
      data: {
        requirements: string;
      }
    }
    cover: {
      localFile: {
        childImageSharp: {
          fixed: {
            src: string;
          }
        }
      }
    }
  }
}

const Career: React.FC<PageProps<ResultType>> = ({data}) => {

  const career = data.strapiCareer
  
  const newTheme = {
      h1: props => {
          const {children} = props
          return <Text mb={2} fontSize="2xl" fontWeight="bold">{children}</Text>
      },
      h2: props => {
          const {children} = props
          return <Text mb={2} fontSize="lg" fontWeight="bold">{children}</Text>
      },
      img: props => {
          const {src, alt} = props
          return <Image 
              src={src} 
              alt={alt} 
              rounded="lg"
              w={{base: '90vw', lg: '4xl'}} 
              h={{base: 64, lg: 96}} 
              mr={{base: 8, lg: "auto"}}
              my={8} 
              />
      }
  }

  return (
    <Layout>
      <Box 
        my={{base: 8, lg: 20}} 
        w={{base: 'full', lg: '4xl'}} 
        mx={{base: 6, lg: "auto"}}>
          <Stack direction="column" gap={{base: 8, lg: 20}}>
            <Heading
              size="2xl"
              textAlign="center"
            >Rejoindre l'équipe</Heading>
            <Heading
              size="xl"
              textAlign="center"
            >{career.career}</Heading>
          </Stack>
          <Stack direction="column" gap={8} mt={{base: 8, lg: 12}}>
            <Stack direction="column">
              <Text 
                fontSize="2xl"
                fontWeight="bold"
              >Description</Text>
              <Text
                fontSize="lg"
                color="gray.700"
              >{career.description}</Text>
            </Stack>
            <Stack direction="column">
              <Text
                fontSize="2xl"
                fontWeight="bold"
              >Détails</Text>
              <ReactMarkdown 
                components={ChakraUIRenderer(newTheme)}
                children={career.requirements.data.requirements}
                skipHtml
              />
            </Stack>
          </Stack>
        </Box>
    </Layout>
  )
}

export const query = graphql`
  query CareerData($id: Int) {
  strapiCareer(strapi_id: {eq: $id}) {
    career
    description
    isAvailable
    updatedAt
    requirements {
      data {
        requirements
      }
    }
    cover {
      localFile {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
}
`

export default Career