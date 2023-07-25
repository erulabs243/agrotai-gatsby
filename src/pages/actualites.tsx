import {
  Box,
  Button,
  Icon,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Layout from "@layouts/layout";
import { BlogInterface } from "@propstypes/home";
import { IconArrowRight } from "@tabler/icons-react";
import { HeadFC, graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { formatDate } from "../utils";
import Seo from "@components/seo";
import { SITETITLE } from "../../consts";

const Blog = () => {
  const { posts } = useStaticQuery<BlogInterface>(graphql`
    query {
      posts: allStrapiPost(sort: { updatedAt: DESC }) {
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
  `);

  return (
    <Layout>
      <Box w="full" bgGradient="linear(to-br, green.200, green.600)" mt={-24}>
        <Stack
          as={Box}
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 8, md: 16 }}
          w={{ base: "90vw", lg: "6xl" }}
          mx="auto"
          py={{ base: 20, md: 40 }}
          alignItems="center"
        >
          <Stack as={Box} spacing={4} w={{ base: "full", md: "40%" }}>
            <Fade delay={1000}>
              <Slide cascade>
                <Heading
                  as="h2"
                  mb={2}
                  fontWeight={700}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Dernières{" "}
                  <Text as="span" color="white">
                    nouvelles
                  </Text>
                </Heading>
                <Text textAlign={{ base: "center", lg: "left" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, unde corporis? Magni odio minima sit, dolore
                  similique libero pariatur quaerat,
                </Text>
              </Slide>
            </Fade>
          </Stack>
          <Stack flex={1} p={4}>
            <Zoom>
              <Image
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Agrotai crowdfarming"
                rounded="lg"
              />
            </Zoom>
          </Stack>
        </Stack>
      </Box>
      {posts.nodes.length <= 0 && <Text>Aucune nouvel article</Text>}
      {posts.nodes.length > 0 && (
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap={{ base: 4, lg: 8 }}
          maxW={{ base: "90vw", lg: "3xl" }}
          mx="auto"
          py={{ base: 4, lg: 12 }}
        >
          {posts.nodes.map(post => (
            <Stack
              key={post.slug}
              direction="column"
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              px={{ base: 4, lg: 8 }}
              py={{ base: 2, lg: 4 }}
              rounded="lg"
              my={2}
            >
              <Stack direction="column" gap={0} flex={1}>
                <Link href={`/actualites/${post.slug}`}>
                  <Image
                    src={post.cover.localFile.childImageSharp.fixed.src}
                    w="full"
                    h={40}
                    mb={{ base: 2, lg: 4 }}
                    objectFit="cover"
                    objectPosition="center"
                    rounded="lg"
                  />
                </Link>
                <Stack direction="row" my={2}>
                  {post.tags.map(tag => (
                    <Tag
                      key={tag.id}
                      fontWeight="semibold"
                      colorScheme="blackAlpha"
                      borderRadius="lg"
                      as={Link}
                      href="#"
                      _hover={{ textDecoration: "none" }}
                    >
                      {tag.title}
                    </Tag>
                  ))}
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
                  _hover={{ textDecoration: "none" }}
                  href={`/actualites/${post.slug}`}
                  noOfLines={2}
                  color="gray.700"
                >
                  {post.excerpt}
                </Link>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="sm" color="gray.600">
                  {formatDate(post.updatedAt)}
                </Text>
                <Button
                  rightIcon={<Icon as={IconArrowRight} />}
                  variant="ghost"
                >
                  Lire l'article
                </Button>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      )}
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo
    title={`Nos dernières nouvelles - ${SITETITLE}`}
    description="Découvrez les dernières informations au sujet de 
      Agrotai et de ses activités."
    url="/actualites"
  />
);

export default Blog;
