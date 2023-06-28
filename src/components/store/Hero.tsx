import {
  Box,
  Center,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  IconCarrot,
  IconFish,
  IconMoodHappy,
  IconShoppingCartDiscount,
} from "@tabler/icons-react"
import React from "react"

type Props = {}

function Hero({}: Props) {
  return (
    <Box w="full">
      <Stack
        as={Box}
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: 8, md: 16 }}
        w={{ base: "90vw", lg: "6xl" }}
        mx="auto"
        py={{ base: 12, md: 36 }}
        alignItems="center"
      >
        <Stack as={Box} spacing={4} w={{ base: "full", md: "40%" }}>
          <Heading as="h2" fontWeight={700}>
            Des aliments{" "}
            <Text as="span" color="green.700">
              frais
            </Text>
          </Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            unde corporis? Magni odio minima sit, dolore similique libero
            pariatur quaerat,
          </Text>
        </Stack>
        <Stack flex={1}>
          <SimpleGrid columns={2} columnGap={8} rotate="75deg">
            <Center h={32} w={32} bg="green.100" ml="auto" my={4} rounded="3xl">
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
            <Center h={32} w={32} bg="gray.100" ml="auto" my={4} rounded="3xl">
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
          </SimpleGrid>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Hero
