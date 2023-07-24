import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Hero, ProductCard } from "@components/store";
import Layout from "@layouts/layout";
import { StoreProductaInterface } from "@propstypes/store";
import { PageProps, graphql } from "gatsby";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Boutique: React.FC<PageProps<StoreProductaInterface>> = ({ data }) => {
  const products = data.products.nodes;

  return (
    <Layout>
      {/* Hero */}
      <Hero />

      <Container
        bg="gray.50"
        w={{ base: "90vw", md: "65vw" }}
        maxW={{ base: "90vw", md: "65vw" }}
        rounded="3xl"
        py={{ base: 8, md: 16 }}
        my={8}
        px={{ base: 4, md: 12 }}
      >
        <Box my={8} w="full">
          <Heading fontSize="4xl" textAlign="center">
            Découvrez notre boutique
          </Heading>
          <Text textAlign="center" fontSize="lg">
            Des produits frais disponibles dans notre boutique
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} columnGap={4}>
          <Fade damping={0.3} cascade>
            {products.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </Fade>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    products: allStrapiProduct(sort: { updatedAt: DESC }) {
      nodes {
        name
        slug
        status
        strapi_id
        image {
          url
        }
      }
    }
  }
`;

export default Boutique;
