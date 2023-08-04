import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Seo from "@components/seo";
import Layout from "@layouts/layout";
import { IGatsbyImage } from "@propstypes/particles";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { HeadProps, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { SERVER_HOST } from "../../consts";

type PostResult = {
  strapiPost: {
    title: string;
    updatedAt: string;
    subtitle: string;
    strapi_id: string;
    slug: string;
    excerpt: string;
    cover: IGatsbyImage;
    tags: {
      strapi_id: number;
      title: string;
    };
    content: {
      data: {
        content: string;
      };
    };
  };
};

const newTheme = {
  h1: props => {
    const { children } = props;
    return (
      <Text mb={2} fontSize="2xl" fontWeight="bold">
        {children}
      </Text>
    );
  },
  h2: props => {
    const { children } = props;
    return (
      <Text mb={2} fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    );
  },
  img: props => {
    const { src, alt } = props;
    return (
      <Image
        src={`${SERVER_HOST}${src}`}
        alt={alt}
        rounded="lg"
        w={{ base: "90vw", lg: "4xl" }}
        maxH={{ base: 72, lg: 96 }}
        mr={{ base: 8, lg: "auto" }}
        my={8}
      />
    );
  },
};

const Post: React.FC<PageProps<PostResult>> = ({ data }) => {
  const post = data.strapiPost;

  return (
    <Layout>
      <Stack
        my={{ base: 8, lg: 20 }}
        w={{ base: "full", lg: "4xl" }}
        mx={{ base: 6, lg: "auto" }}
      >
        <Stack as={Box} direction="column" w="full" mx="auto">
          <Heading as="h1" mb={2} size="2xl" w="full">
            {post.title}
          </Heading>
          <Text
            mb={4}
            w={{ base: "full", lg: "4xl" }}
            fontSize={{ base: "lg", lg: "2xl" }}
            color="gray.700"
            mx="auto"
          >
            {post.excerpt}
          </Text>
        </Stack>
        <Image
          as={GatsbyImage}
          image={getImage(post.cover.localFile)}
          style={{
            borderRadius: "6px",
            maxHeight: "50vh",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            marginTop: "2em",
            marginBottom: "4em",
          }}
        />
        <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
          {post?.content.data.content}
        </ReactMarkdown>
      </Stack>
    </Layout>
  );
};

export const query = graphql`
  query PostData($slug: String) {
    strapiPost(slug: { eq: $slug }) {
      title
      updatedAt
      subtitle
      strapi_id
      slug
      excerpt
      cover {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED)
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
      }
    }
  }
`;

export const Head: React.FC<HeadProps<PostResult>> = ({ data }) => (
  <Seo
    title={data.strapiPost.title}
    description={data.strapiPost.excerpt}
    url={`/actualites/${data.strapiPost.slug}`}
    image={data.strapiPost.cover.url}
  />
);

export default Post;
