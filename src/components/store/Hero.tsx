import {
  Box,
  Center,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  IconCarrot,
  IconFish,
  IconMoodHappy,
  IconShoppingCartDiscount,
} from "@tabler/icons-react";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { SERVER_HOST } from "../../../consts";

function Hero() {
  return (
    <Fade>
      <Box
        w="100vw"
        backgroundImage={`${SERVER_HOST}/uploads/large_pexels_archie_binamira_708798_92bc86bb21.jpg`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        mt={-24}
      >
        <Box w="100vw" bg="gray.700" opacity={0.7}>
          <Stack
            as={Box}
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 8, md: 16 }}
            w={{ base: "90vw", lg: "6xl" }}
            mx="auto"
            py={{ base: 32, md: 64 }}
            alignItems="center"
          >
            <Stack as={Box} spacing={4} w={{ base: "full", md: "40%" }}>
              <Fade delay={1000}>
                <Slide delay={500} cascade damping={0.75}>
                  <Heading fontWeight={700} as="h1">
                    Des aliments{" "}
                    <Text as="span" color="green.700">
                      frais
                    </Text>
                  </Heading>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, unde corporis? Magni odio minima sit, dolore
                    similique libero pariatur quaerat,
                  </Text>
                </Slide>
              </Fade>
            </Stack>

            <Stack flex={1}>
              <SimpleGrid columns={2} columnGap={8} rotate="75deg">
                <Fade cascade damping={0.75}>
                  <Center
                    h={32}
                    w={32}
                    bg="green.100"
                    ml="auto"
                    my={4}
                    rounded="3xl"
                  >
                    <Icon as={IconFish} w={24} h={24} />
                  </Center>
                  <Center
                    h={32}
                    w={32}
                    bg="orange.100"
                    mr="auto"
                    my={4}
                    rounded="3xl"
                  >
                    <Icon as={IconCarrot} w={24} h={24} color="gray.700" />
                  </Center>
                  <Center
                    h={32}
                    w={32}
                    bg="gray.100"
                    ml="auto"
                    my={4}
                    rounded="3xl"
                  >
                    <Icon as={IconShoppingCartDiscount} w={24} h={24} />
                  </Center>
                  <Center
                    h={32}
                    w={32}
                    bg="yellow.100"
                    mr="auto"
                    my={4}
                    rounded="3xl"
                  >
                    <Icon as={IconMoodHappy} w={24} h={24} />
                  </Center>
                </Fade>
              </SimpleGrid>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Fade>
  );
}

export default Hero;
