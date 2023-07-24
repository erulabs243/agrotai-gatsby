import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Heading,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { CampaignDate, CampaignTag } from "@components/particles";
import { CampaignRow } from "@propstypes/particles";
import { IconTable } from "@tabler/icons-react";
import React from "react";

const campaigns: CampaignRow[] = [
  {
    campaign: "Manger sain",
    slug: "manger-sain",
    campaignStatus: "current",
    total: 36521,
    perceived: 2564,
    dueDate: "2023-11-12",
  },
  {
    campaign: "Que de poissons",
    slug: "que-de-poissons",
    campaignStatus: "current",
    total: 12345,
    perceived: 4093,
    dueDate: "2023-09-07",
  },
  {
    campaign: "Une grousse poullerie",
    slug: "une-grosse-poullerie",
    campaignStatus: "soon",
    total: 7234,
    perceived: 1233,
  },
];

function CampaignsTable() {
  return (
    <Box
      my={{ base: 4, md: 12 }}
      mx="auto"
      px={8}
      pt={4}
      pb={12}
      w="70%"
      bg="gray.100"
      rounded="lg"
    >
      <HStack alignItems="center" justifyContent="space-between" my={12} mx={4}>
        <Heading fontSize="3xl">Nos campagnes</Heading>
        <Button colorScheme="green" mr={4} rightIcon={<Icon as={IconTable} />}>
          Plus de campagnes
        </Button>
      </HStack>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Campagne</Th>
              <Th>Fin de la campagne</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {campaigns.map((campaign, idx) => (
              <Tr
                key={campaign.slug}
                onClick={() => console.log(campaign.slug)}
                _hover={{
                  bg: "white",
                  cursor: "pointer",
                }}
              >
                <Td>{idx + 1}</Td>
                <Td>
                  <Text>{campaign.campaign}</Text>
                </Td>
                <Td>
                  <CampaignDate />
                </Td>
                <Td>
                  <CampaignTag status={campaign.campaignStatus} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CampaignsTable;
