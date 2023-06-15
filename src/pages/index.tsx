import { Box, Heading, Text } from "@chakra-ui/react"
import {
  CrowdfarmingHero,
  IndexHero,
  StatsHero,
  WorksHero,
} from "@components/index"
import Layout from "@layouts/layout"
import { PageProps } from "gatsby"
import React from "react"

type Props = {}

const IndexPage: React.FC<PageProps> = (props: Props) => {
  return (
    <Layout>
      {/* INDEX HERO */}
      <IndexHero />

      {/* AREAS OF EXPERTISE */}
      <WorksHero />

      {/* SOME STATS */}
      <StatsHero />

      {/* CROWDFARMIN HERO */}
      <CrowdfarmingHero />
    </Layout>
  )
}

export default IndexPage
