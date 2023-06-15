import React from "react"
import { Container, Box, Stack, Text, Heading } from "@chakra-ui/react"

type Props = {}

const CrowdfarmingHero = (props: Props) => {
  return (
    <Container w="100%" maxW="100%">
      <Stack
        as={Box}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        spacing={{ base: 16, md: 24 }}
      >
        <Heading textTransform="uppercase" fontWeight="bold">
          Avec notre système de{" "}
          <Text as="span" color="green.400">
            crowdfarming
          </Text>
        </Heading>
      </Stack>
    </Container>
  )
}

export default CrowdfarmingHero
