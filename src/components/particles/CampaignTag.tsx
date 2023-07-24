import { Tag } from "@chakra-ui/react";
import React from "react";

type Props = {
  status: string;
};

function CampaignTag({ status }: Props) {
  return (
    <Tag
      textTransform="uppercase"
      size="sm"
      colorScheme={
        status === "current" ? "green" : status === "soon" ? "gray" : "red"
      }
    >
      {status === "current"
        ? "en cours"
        : status === "soon"
        ? "bientôt"
        : "achevée"}
    </Tag>
  );
}

export default CampaignTag;
