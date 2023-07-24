import { Heading, Container, Box, Text } from "@chakra-ui/react";
import { Hero, HowStepper } from "@components/crowdfarming";
import Layout from "@layouts/layout";
import { PageProps } from "gatsby";
import React from "react";

const Crowdframing: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* HERO */}
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
            Comment ça marche ?
          </Heading>
          <Text textAlign="center" fontSize="lg">
            Notre manière de procéder en quatre étapes
          </Text>

          <HowStepper />
        </Box>
      </Container>
    </Layout>
  );
};

export default Crowdframing;
