import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Layout from "@layouts/layout";
import { PageProps, graphql } from "gatsby";
import React from "react";
import { SERVER_HOST } from "../../consts";

export type BreakpointImage = {
  url: string;
  width: number;
  height: number;
};

export type GaleryImage = {
  formats: {
    thumbnail: BreakpointImage;
    large: BreakpointImage;
    medium: BreakpointImage;
    small: BreakpointImage;
    width: number;
    height: number;
  };
};

type ResultType = {
  strapiGallery: {
    updatedAt: string;
    title: string;
    images: GaleryImage[];
    description: string;
  };
};

const Galery: React.FC<PageProps<ResultType>> = ({ data }) => {
  const galery = data.strapiGallery;
  console.log(galery);

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
                  color="white"
                  fontWeight={700}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  {galery.title}
                </Heading>
                <Text textAlign={{ base: "center", lg: "left" }} fontSize="lg">
                  {galery.description}
                </Text>
              </Slide>
            </Fade>
          </Stack>
          <Stack flex={1} p={4}>
            <Zoom>
              <Image
                src={`${SERVER_HOST}${galery.images[0].formats.large.url}`}
                alt="Agrotai crowdfarming"
                rounded="lg"
                maxH={96}
              />
            </Zoom>
          </Stack>
        </Stack>
      </Box>
      <Box
        my={{ base: 8, lg: 20 }}
        w={{ base: "full", lg: "4xl" }}
        mx={{ base: 6, lg: "auto" }}
      >
        {/* TODO add lightbox to images */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} columnGap={4}>
          {galery.images.map((image, index) => (
            <Image
              key={index}
              src={`${SERVER_HOST}${image.formats.medium.url}`}
              alt={galery.title}
              my={2}
              objectFit="contain"
              objectPosition="center"
              alignSelf="center"
              rounded="lg"
            />
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query GaleryData($id: Int) {
    strapiGallery(strapi_id: { eq: $id }) {
      updatedAt
      title
      images {
        formats {
          thumbnail {
            url
            width
            height
          }
          large {
            url
            width
            height
          }
          medium {
            height
            url
            width
          }
          small {
            width
            url
            height
          }
        }
      }
      description
    }
  }
`;

export default Galery;
