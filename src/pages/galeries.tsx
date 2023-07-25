import {
  Heading,
  Box,
  Text,
  Stack,
  Image,
  Link,
  Card,
  CardBody,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import Layout from "@layouts/layout";
import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { GaleriesInterface } from "@propstypes/home";
import { SERVER_HOST, SITETITLE } from "../../consts";
import { formatDate } from "../utils";
import { IconAlbum } from "@tabler/icons-react";
import Seo from "@components/seo";

const Galeries: React.FC<PageProps<GaleriesInterface>> = ({ data }) => {
  const { galeries } = data;

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
                  as="h1"
                  mb={2}
                  fontWeight={700}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Dernières{" "}
                  <Text as="span" color="white">
                    images
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

      {galeries.nodes.length <= 0 && <Text>Aucun galerie</Text>}
      {galeries.nodes.length > 0 && (
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap={{ base: 4, lg: 8 }}
          maxW={{ base: "90vw", lg: "3xl" }}
          mx="auto"
          py={{ base: 4, lg: 12 }}
        >
          {galeries.nodes.map(galery => (
            <Card
              key={galery.strapi_id}
              my={2}
              shadow="none"
              bg="gray.100"
              as={Link}
              href={`/galeries/${galery.strapi_id}`}
              _hover={{ textDecoration: "none" }}
            >
              <CardBody>
                <Image
                  src={`${SERVER_HOST}${galery.images[0].formats.thumbnail.url}`}
                  alt={galery.images[0].formats.thumbnail.name}
                  objectFit="contain"
                  objectPosition="center"
                  alignSelf="center"
                  w="full"
                  rounded="lg"
                  bg="gray.50"
                  h={64}
                  p={2}
                />
                <Stack direction="column" px={4}>
                  <Heading
                    as={Link}
                    size="md"
                    mt={4}
                    href={`/galeries/${galery.strapi_id}`}
                  >
                    {galery.title}
                  </Heading>
                  <Text
                    as={Link}
                    noOfLines={2}
                    href={`/galeries/${galery.strapi_id}`}
                    _hover={{ textDecoration: "none" }}
                  >
                    {galery.description}
                  </Text>
                  <Stack direction="row" justifyContent="space-between" mt={2}>
                    <Box flex={1}>
                      <Text fontSize="sm" color="gray.500">
                        Dernière mise à jour
                      </Text>
                      <Text>{formatDate(galery.updatedAt)}</Text>
                    </Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      as={Link}
                      href={`/galeries/${galery.strapi_id}`}
                      _hover={{ textDecoration: "none" }}
                    >
                      <Icon as={IconAlbum} w={5} h={5} />
                      <Text as="span">{`${galery.images.length} images`}</Text>
                    </Stack>
                  </Stack>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    galeries: allStrapiGallery(sort: { updatedAt: DESC }) {
      nodes {
        images {
          formats {
            thumbnail {
              url
              name
            }
          }
        }
        title
        strapi_id
        updatedAt
        description
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <Seo
    title={`Nos galéries - ${SITETITLE}`}
    description="Découvrez dans notre galerie d'images 
      nos dernières réalisations et le travail accompli. 
      De l'équipe aux champs, tout est rendu en images..."
    url="/galeries"
  />
);

export default Galeries;
