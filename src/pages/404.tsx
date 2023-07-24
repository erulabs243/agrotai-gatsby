import * as React from "react";

import Layout from "@layouts/layout";
import Seo from "@components/seo";
import { HeadFC } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Oups" />;
