import { CampaignChart } from "@components/logged";
import { LoggedHeading } from "@components/particles";
import LoggedLayout from "@layouts/logged";
import { PageProps } from "gatsby";
import React from "react";

const Campaign: React.FC<PageProps> = props => {
  const { username, campaign } = props.params;

  return (
    <LoggedLayout username={username}>
      <LoggedHeading heading={campaign} />

      {/* Chart for dates */}
      <CampaignChart />
    </LoggedLayout>
  );
};

export default Campaign;
