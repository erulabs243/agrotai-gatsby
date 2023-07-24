import { PageProps } from "gatsby";
import React from "react";

const JoinCampaign: React.FC<PageProps> = props => {
  const { username } = props.params;
  console.log(username);

  return <div>JoinCampaign</div>;
};

export default JoinCampaign;
