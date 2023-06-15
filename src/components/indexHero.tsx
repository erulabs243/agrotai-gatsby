import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"

type Props = {}

const IndexHero = (props: Props) => {
  return (
    <Container w="100%" maxW="100%" bg="green.100">
      <Stack as={Box} textAlign="center" spacing={8} py={{ base: 24, md: 36 }}>
        <Heading>Agrotai</Heading>
        <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
          Rendre l'agriculture meilleure en RDC
        </Text>
        <Button size="lg" alignSelf="center">
          Rejoignez-nous
        </Button>
      </Stack>
    </Container>
  )
}

export default IndexHero
