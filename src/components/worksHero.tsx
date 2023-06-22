import { Container, Stack, Box, Heading, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import { ExpertiseCard } from "@components/particles"
import React from "react"
import { HomeWorkInterface } from "@propstypes/home"

const WorksHero = () => {
  const { works } = useStaticQuery<HomeWorkInterface>(graphql`
    query {
      works: allStrapiService {
        nodes {
          title
          subtitle
          description
          icon
        }
      }
    }
  `)

  console.log(works)

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
          {works.nodes.map(work => (
            <ExpertiseCard
              key={work.title}
              title={work.title}
              subtitle={work.subtitle}
              description={work.description}
              icon={work.icon}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default WorksHero
