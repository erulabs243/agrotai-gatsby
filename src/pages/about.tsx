import { Heading, Box, Text, Stack, Image } from "@chakra-ui/react";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import Layout from "@layouts/layout";
import React from "react";
import { HeadFC } from "gatsby";
import Seo from "@components/seo";
import { SITETITLE } from "../../consts";

const About = () => {
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
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo
    title={`A propos de nous - ${SITETITLE}`}
    description="Agrotai est un société congolaise œuvrant
        dans l’agropastoral, dont l’élevage (l’aviculture et la pisciculture) 
        et l’agriculture produisant principalement des légumes et des céréales."
    url="/about"
  />
);

export default About;
