import {
  CrowdfarmingHero,
  IndexHero,
  StatsHero,
  WorksHero,
} from "@components/index";
import Seo from "@components/seo";
import Layout from "@layouts/layout";
import { HeadFC, PageProps } from "gatsby";
import React from "react";
import { SITETITLE } from "../../consts";

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

export const Head: HeadFC = () => (
  <Seo
    title={SITETITLE}
    description="Agrotai est un société congolaise œuvrant
        dans l’agropastoral, dont l’élevage (l’aviculture et la pisciculture) 
        et l’agriculture produisant principalement des légumes et des céréales."
  />
);
