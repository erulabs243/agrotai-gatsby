import {
  CrowdfarmingHero,
  IndexHero,
  StatsHero,
  WorksHero,
} from "@components/index";
import Layout from "@layouts/layout";
import { PageProps } from "gatsby";
import React from "react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* INDEX HERO */}
      <IndexHero />

      {/* AREAS OF EXPERTISE */}
      <WorksHero />

      {/* SOME STATS */}
      <StatsHero />

      {/* CROWDFARMING HERO */}
      <CrowdfarmingHero />
    </Layout>
  );
};

export default IndexPage;
