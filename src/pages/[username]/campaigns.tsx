import { PageProps } from "gatsby";
import React from "react";

const Campaigns: React.FC<PageProps> = props => {
  console.log(props.params);

  return <div>Campaigns</div>;
};

export default Campaigns;
