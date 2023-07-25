import { Heading, Box, Text, Stack, Image, Icon, Show } from "@chakra-ui/react";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import Layout from "@layouts/layout";
import React from "react";
import { HeadFC } from "gatsby";
import Seo from "@components/seo";
import { SITETITLE } from "../../consts";
import { IconCheck, IconTarget } from "@tabler/icons-react";

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
          py={{ base: 32, md: 40 }}
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
                  Au sujet de{" "}
                  <Text as="span" color="white">
                    Agrotai
                  </Text>
                </Heading>
                <Text textAlign={{ base: "center", lg: "left" }} fontSize="lg">
                  Agrotai sarl est une société congolaise créée en mai 2023 et
                  œuvrant dans l'agropastoral, l'aviculture et la pisciculture ;
                  et la production des céréales et des produits maraîchers.
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
      <Box py={{ base: 20, lg: 40 }}>
        <Stack
          direction="column"
          gap={8}
          w={{ base: "full", lg: "7xl" }}
          mx="auto"
        >
          <Heading
            size="xl"
            my={8}
            pb={8}
            textAlign="center"
            textTransform="uppercase"
          >
            Pourquoi nous faire confiance ?
          </Heading>
          <Stack direction={{ base: "column", lg: "row" }} gap={8}>
            <Box position="relative" p={8} rounded="lg" bg="gray.100" flex={1}>
              <Text
                position="absolute"
                fontSize="5xl"
                color="green.500"
                top={6}
                left={6}
                zIndex={1}
              >
                01
              </Text>
              <Stack direction="column" zIndex={10} ml={12} px={4}>
                <Text fontSize="xl" fontWeight="bold" color="green.500">
                  Nous respectons nos engagements
                </Text>
                <Text>
                  Sur l’honneur et le respect des valeurs prônées par Agrotaï
                  sarl, nous nous engageons à respecter tout engagement fait à
                  votre encontre en nous rendant totalement disponible. Dans ce
                  cadre, nous vous offrons la possibilité de rentrer en contact
                  directe avec les managers grâce à notre nouvelle politique de
                  communication « plus proche de nos clients ».
                </Text>
              </Stack>
            </Box>

            <Box
              position="relative"
              p={8}
              rounded="lg"
              bg={{ base: "white", lg: "gray.100" }}
              flex={1}
            >
              <Text
                position="absolute"
                fontSize="5xl"
                color="green.500"
                top={6}
                left={6}
                zIndex={1}
              >
                02
              </Text>
              <Stack direction="column" zIndex={10} ml={12} px={4}>
                <Text fontSize="xl" fontWeight="bold" color="green.500">
                  Nous vous tenons informés tout au long de la campagne
                </Text>
                <Text>
                  Nous mettons un point d’honneur dans le suivi de nos campagnes
                  de crowdfunding et engageons à cet effet à vous envoyer
                  mensuellement un rapport mettant en exergue tous les encours
                  et évolutions des différentes campagnes dans lesquelles vous
                  avez souscrits.
                </Text>
              </Stack>
            </Box>

            <Box position="relative" p={8} rounded="lg" bg="gray.100" flex={1}>
              <Text
                position="absolute"
                fontSize="5xl"
                color="green.500"
                top={6}
                left={6}
                zIndex={1}
              >
                03
              </Text>
              <Stack direction="column" zIndex={10} ml={12} px={4}>
                <Text fontSize="xl" fontWeight="bold" color="green.500">
                  Nous vous assurons contre les dangers
                </Text>
                <Text>
                  Avec Agrotaï il y a absence réelle de tout danger à craindre.
                  Par son expertise, Agrotaï garanti l’éloignement de tout péril
                  par des stratégies qui concourent à la prévention contres les
                  atteintes volontaires et involontaires sur sa fortune.
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box py={{ base: 20, lg: 40 }} bg="green.100">
        <Stack
          direction="column"
          w={{ base: "full", lg: "5xl" }}
          mx="auto"
          gap={{ base: 8, lg: 20 }}
        >
          <Stack direction="row">
            <Show above="sm">
              <Icon as={IconTarget} w={20} h={20} flex={1} />
            </Show>
            <Box w={{ base: "full", lg: "xl" }} px={8} flex={2}>
              <Heading size="lg" textTransform="uppercase" mb={12}>
                Notre vision
              </Heading>
              <Text fontSize="lg">
                Atteindre et saisir la manifestation des opportunités et
                partenariats techniques et/ou financiers offerts par différents
                corps : privé (investisseurs), institutionnel (l’Etat et autres
                institutions de développement nationales et internationales).
              </Text>
            </Box>
          </Stack>
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 20, lg: 8 }}
          >
            <Box flex={1} px={8}>
              <Heading size="lg" textTransform="uppercase" mb={8}>
                Notre mission
              </Heading>
              <Stack direction="column" gap={4}>
                <Stack direction="column" gap={0}>
                  <Stack direction="row" alignItems="flex-start">
                    <Icon as={IconCheck} w={6} h={6} />
                    <Text fontSize="lg">
                      Valoriser l’agriculture en République Démocratique du
                      Congo
                    </Text>
                  </Stack>
                  <Text color="green.500" ml={8} fontSize="lg">
                    Zéro terre arable non cultivée
                  </Text>
                </Stack>
                <Stack direction="column" gap={0}>
                  <Stack direction="row" alignItems="flex-start">
                    <Icon as={IconCheck} w={6} h={6} />
                    <Text fontSize="lg">
                      Améliorer le quotidien des agriculteurs et éleveurs
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="column" gap={0}>
                  <Stack direction="row" alignItems="flex-start">
                    <Icon as={IconCheck} w={6} h={6} />
                    <Text fontSize="lg">
                      Inciter et accompagner les idées des jeunes entrepreneurs
                      dans l’agropastoral
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Box flex={1} px={8}>
              <Heading size="lg" textTransform="uppercase" mb={8}>
                Notre objectif
              </Heading>
              <Stack direction="column" gap={4}>
                <Stack direction="column" gap={0}>
                  <Stack direction="row" alignItems="flex-start">
                    <Icon as={IconCheck} w={6} h={6} />
                    <Text fontSize="lg">
                      Lutter contre la sous-alimentation
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="column" gap={0}>
                  <Stack direction="row" alignItems="flex-start">
                    <Icon as={IconCheck} w={6} h={6} />
                    <Text fontSize="lg">
                      Accroitre la sécurité alimentaire par un afflux des
                      denrées alimentaires sur le marché
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="column" gap={0}>
                  <Stack direction="row" alignItems="flex-start">
                    <Icon as={IconCheck} w={6} h={6} />
                    <Text fontSize="lg">
                      Occuper la sommité de grandes firmes productrices des
                      denrées alimentaires 100% bio sur le marché national
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
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
