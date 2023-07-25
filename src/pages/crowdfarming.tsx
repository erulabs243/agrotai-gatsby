import { Heading, Container, Box, Text } from "@chakra-ui/react";
import { Hero, HowStepper } from "@components/crowdfarming";
import Seo from "@components/seo";
import Layout from "@layouts/layout";
import { HeadFC, PageProps } from "gatsby";
import React from "react";
import { SITETITLE } from "../../consts";

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

export const Head: HeadFC = () => (
  <Seo
    title={`Financement participati - ${SITETITLE}`}
    description="Avec le financement participatif chez Agrotai, 
      participez à l'amélioration des conditions de vie 
      de plusieurs personnes tout en gagnant de l'argent."
    url="/crowdfarming"
  />
);

export default Crowdframing;
