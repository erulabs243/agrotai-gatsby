import {
  Box,
  Center,
  Heading,
  Icon,
  Image,
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
            Faites un pas dans l'agriculture{" "}
            <Text as="span" color="green.700">
              participative
            </Text>
          </Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            unde corporis? Magni odio minima sit, dolore similique libero
            pariatur quaerat,
          </Text>
        </Stack>
        <Stack flex={1} p={4}>
          <Image
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Agrotai crowdfarming"
            rounded="lg"
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Hero
