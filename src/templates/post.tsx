import Layout from '@layouts/layout'
import { PageProps, graphql } from 'gatsby'
import React from 'react'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

type PostResult = {
    strapiPost: {
        title: string;
        updatedAt: string;
        subtitle: string;
        strapi_id: string;
        slug: string;
        excerpt: string;
        cover: {
            localFile: {
                childImageSharp: {
                    fixed: {
                        src: string;
                    }
                }
            }
        }
        tags: {
            strapi_id: number;
            title: string;
        }
        content: {
            data: {
                content: string;
            }
        medias: {
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
}

const newThene = {
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

const Post: React.FC<PageProps<PostResult>> = ({data, pageContext}) => {

    const post = data.strapiPost

  return (
    <Layout>
        <Box w="full" bgGradient="linear(to-br, green.200, green.600)" mt={-24}>
            <Stack
                as={Box}
                direction="column"
                w={{ base: "90vw", lg: "6xl" }}
                mx="auto"
                py={{ base: 32, md: 48 }}
            >
                <Heading mb={2} textAlign="center" w="full">{post.title}</Heading>
                <Text 
                    mb={{base: 8, lg: 12}} 
                    textAlign="center" 
                    w={{base: "full", lg: "4xl"}}
                    fontSize={{base: "lg", lg: "2xl"}}
                    color="gray.700"
                    mx="auto"
                >{post.excerpt}</Text>
            </Stack>
        </Box>
            <Image 
                alt={post.title}
                src={post.cover.localFile.childImageSharp.fixed.src}
                h={{base: 72, lg: 96}}
                w={{base: '90vw', lg: '4xl'}}
                objectFit="cover"
                objectPosition="center"
                mx={{base: 6, lg: "auto"}}
                mt={{base: -24, lg: -48}}
                rounded="lg"
            />
            <Stack 
                my={{base: 8, lg: 20}} 
                w={{base: 'full', lg: '4xl'}} 
                mx={{base: 6, lg: "auto"}}
            >
                <ReactMarkdown 
                    children={post.content.data.content}  
                    components={ChakraUIRenderer(newThene)}
                    skipHtml
                />
            </Stack>
    </Layout>
  )
}

export const query = graphql`
    query PostData($slug: String) {
    strapiPost(slug: {eq: $slug}) {
        title
        updatedAt
        subtitle
        strapi_id
        slug
        excerpt
        cover {
        localFile {
            childImageSharp {
            fixed {
                src
            }
            }
        }
        }
        tags {
        strapi_id
        title
        }
        content {
        data {
            content
        }
        medias {
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
    }
`

export default Post