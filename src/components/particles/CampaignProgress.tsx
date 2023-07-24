import { Link, Progress, Stack, Text } from "@chakra-ui/react";
import { CampaignRow } from "@propstypes/particles";
import React from "react";

type Props = {
  campaign: CampaignRow;
};

const computePercentage = (total: number, perceived: number) =>
  perceived / total;

const formatPercentage = (percentage: number) =>
  percentage.toLocaleString("fr-FR", {
    style: "percent",
  });

const formatCurrency = (amount: number, currency = "USD") =>
  amount.toLocaleString("fr-FR", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

const percentColor = (percent: number): string =>
  percent <= 0.3 ? "red" : percent <= 0.75 ? "blue" : "green";

function CampaignProgress({ campaign }: Props) {
  const username = "ligantoine02";

  const percent = computePercentage(campaign.total, campaign.perceived);

  return (
    <Link href={`/${username}/${campaign.slug}`} _hover={{ textDecor: "none" }}>
      <Stack direction="column" py={4} px={8}>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Text fontWeight={700} _hover={{ textDecor: "underline" }}>
            {campaign.campaign}
          </Text>
          <Stack direction="row">
            <Text>{formatCurrency(campaign.perceived)}</Text>
            <Text color={percentColor(percent)}>
              {formatPercentage(percent)}
            </Text>
          </Stack>
        </Stack>
        <Progress
          value={percent * 100}
          rounded="lg"
          size="sm"
          colorScheme={percentColor(percent)}
        />
      </Stack>
    </Link>
  );
}

export default CampaignProgress;
