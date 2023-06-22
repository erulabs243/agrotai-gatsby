import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Stack, Heading, Text, Box } from "@chakra-ui/react"
import { StatsCardProps } from "@propstypes/particles"
import { StatsCard } from "@components/particles"
import { HomeStatsInterface } from "@propstypes/home"

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
    <Container w="100%" maxW="100%" bg="green.500">
      <Stack
        as={Box}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        spacing={{ base: 16, md: 24 }}
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
          {stats.nodes.map(stat => (
            <StatsCard
              key={stat.amount}
              amount={stat.amount}
              description={stat.description}
              title={stat.title}
              metric={stat.metric}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default StatsHero
