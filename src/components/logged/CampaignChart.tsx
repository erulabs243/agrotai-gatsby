import { Box, Heading, Stack } from "@chakra-ui/react";
import { LineChart } from "@components/charts";
import React from "react";

function CampaignChart() {
  return (
    <Stack as={Box} w="70%" mx="auto" p={12} bg="gray.100" rounded="lg">
      <Stack direction="row" pb={12}>
        <Heading>Contributions pour la campagne</Heading>
      </Stack>
      <Box>
        <LineChart />
      </Box>
    </Stack>
  );
}

export default CampaignChart;
