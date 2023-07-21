import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Stack, Heading, Text, Box } from "@chakra-ui/react"
import { StatsCardProps } from "@propstypes/particles"
import { StatsCard } from "@components/particles"
import { HomeStatsInterface } from "@propstypes/home"
import { Fade, Slide } from "react-awesome-reveal"

const StatsHero = () => {
  const { stats } = useStaticQuery<HomeStatsInterface>(graphql`
    query {
      stats: allStrapiHomeStat(sort: { amount: ASC }) {
        nodes {
          amount
          metric
          title
          description
        }
      }
    }
  `)

  return (
    <Fade duration={2000} delay={500}>
    <Container w="100vw" maxW="100vw" bg="green.500">
      <Stack
        as={Box}
        mx={0}
        w="100vw"
        py={{ base: 24, md: 32 }}
        textAlign="center"
        spacing={{ base: 16, md: 24 }}
        backdropFilter="auto" backdropBlur="xs"
      >
        <Heading textTransform="uppercase" fontWeight="bold">
          En{" "}
          <Text as="span" color="white">
            chiffres
          </Text>
          <Text as="span">, Agrotai, c'est...</Text>
        </Heading>
        <Stack
          w={{ base: "100%", lg: "5xl" }}
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignSelf="center"
          spacing={8}
        >
          <Fade cascade>
            {stats.nodes.map(stat => (
              <StatsCard
                key={stat.amount}
                amount={stat.amount}
                description={stat.description}
                title={stat.title}
                metric={stat.metric}
              />
            ))}
          </Fade>
        </Stack>
      </Stack>
    </Container>
    </Fade>
  )
}

export default StatsHero
