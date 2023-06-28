import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { Hero, ProductCard } from "@components/store"
import Layout from "@layouts/layout"
import { PageProps } from "gatsby"
import React from "react"

type Props = {}

type ProductProps = {
  id: number
  name: string
  slug: string
  image: string
  status: string
}

const products: ProductProps[] = [
  {
    id: 1,
    name: "Tilapia blanc",
    slug: "tilapia-blanc",
    image: "https://picsum.photos/id/237/200/300",
    status: "instock",
  },
  {
    id: 2,
    name: "Carottes",
    slug: "carottes",
    image: "https://picsum.photos/id/123",
    status: "instock",
  },
  {
    id: 3,
    name: "Bananes",
    slug: "bananes",
    image: "https://picsum.photos/id/234",
    status: "soon",
  },
  {
    id: 4,
    name: "Poules",
    slug: "poules",
    image: "https://picsum.photos/id/345",
    status: "outofstock",
  },
  {
    id: 4,
    name: "Oignons",
    slug: "oignons",
    image: "https://picsum.photos/id/456?grayscale",
    status: "soon",
  },
]

const Boutique: React.FC<PageProps> = (props: Props) => {
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
          {products.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Boutique
