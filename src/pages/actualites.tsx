import { Box, Button, Icon, Image, Link, SimpleGrid, Stack, Tag, Text } from "@chakra-ui/react"
import Layout from "@layouts/layout"
import { BlogInterface } from "@propstypes/home"
import { IconArrowRight } from "@tabler/icons-react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { formatDate } from "../utils"

const Blog = () => {
    const {posts} = useStaticQuery<BlogInterface>(graphql`
        query {
            posts : allStrapiPost(sort: {updatedAt: DESC}) {
                nodes {
                    title
                    excerpt
                    updatedAt
                    tags {
                        title
                        strapi_id
                    }
                    strapi_id
                    slug
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
        }
    `)

    console.log(JSON.stringify(posts, null, 2))

    return (
        <Layout>
            {posts.nodes.length <= 0 && <Text>Aucune nouvel article</Text>}
            {posts.nodes.length > 0 && <SimpleGrid columns={{base: 1, md: 2}} 
                        columnGap={{base: 4, lg: 8}}
                        maxW={{base: "90vw", lg: '3xl'}}
                        mx="auto"
                        py={{base: 4, lg: 12}}>
                {
                    posts.nodes.map(post => <Stack 
                        key={post.slug} 
                        direction="column"
                        bg="gray.50"
                        _hover={{bg: 'gray.100'}}
                        px={{base: 4, lg: 8}}
                        py={{base: 2, lg: 4}}
                        rounded="lg"
                        my={2}
                        >
                        <Stack direction="column" gap={0} flex={1}>
                            <Link href={`/actualites/${post.slug}`}>
                                <Image 
                                    src={post.cover.localFile.childImageSharp.fixed.src}
                                    w="full"
                                    h={40}
                                    mb={{base: 2, lg: 4}}
                                    objectFit="cover"
                                    objectPosition="center"
                                    rounded="lg"
                                />
                            </Link>
                            <Stack direction="row" my={2}>
                                {post.tags.map(tag => <Tag 
                                        key={tag.id} 
                                        fontWeight="semibold"
                                        colorScheme="blackAlpha" 
                                        borderRadius="lg"
                                        as={Link}
                                        href="#"
                                        _hover={{textDecoration: 'none'}}
                                    >
                                    {tag.title}
                                </Tag>)}
                            </Stack>
                            <Link 
                                href={`/actualites/${post.slug}`}
                                fontSize="lg"
                                fontWeight="bold"
                                noOfLines={2}
                            >
                                {post.title}
                            </Link>
                            <Link
                                _hover={{textDecoration: 'none'}}
                                href={`/actualites/${post.slug}`}
                                noOfLines={2}
                                color="gray.700"
                            >{post.excerpt}</Link>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Text fontSize="sm" color="gray.600">{formatDate(post.updatedAt)}</Text>
                            <Button 
                                rightIcon={<Icon as={IconArrowRight} />}
                                variant="ghost"
                            >Lire l'article</Button>
                        </Stack>
                    </Stack>)
                }
            </SimpleGrid>}
        </Layout>
    )
}

export default Blog