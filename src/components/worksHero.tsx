import { Container, Stack, Box, Heading, Text } from "@chakra-ui/react"
import { ExpertiseCard } from "@components/particles"
import { ExpertiseCardProps } from "@propstypes/particles"
import React from "react"

type Props = {}

const expertises: ExpertiseCardProps[] = [
  {
    heading: "Pisciculture",
    subheading: "Des poissons, Tilapia, sambaza, dans des étangs",
    icon: "fish",
  },
  {
    heading: "Maraîchers",
    subheading: "des produits maraichers,des légumes, frais et bio",
    icon: "vegetables",
  },
  {
    heading: "Céréales",
    subheading: "produits céréaliers, sorgho, mais, arachide,...",
    icon: "cereals",
  },
]

const WorksHero = (props: Props) => {
  return (
    <Container w="100%" maxW="100%">
      <Stack
        as={Box}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        spacing={{ base: 16, md: 24 }}
      >
        <Heading textTransform="uppercase" fontWeight="bold">
          Nos{" "}
          <Text as="span" color="green.400">
            domaines d'intervention
          </Text>
        </Heading>
        <Stack
          w={{ base: "100%", lg: "5xl" }}
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignSelf="center"
          spacing={8}
        >
          {expertises.map(expertise => (
            <ExpertiseCard
              key={expertise.heading}
              heading={expertise.heading}
              subheading={expertise.subheading}
              icon={expertise.icon}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default WorksHero
