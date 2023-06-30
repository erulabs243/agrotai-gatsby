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
    Tag
} from '@chakra-ui/react';
import { CampaignRow } from '@propstypes/particles'
import React from 'react'

const campaigns: CampaignRow[] = [
    {
        campaign: "Manger sain",
        slug: 'manger-sain',
        campaignStatus: 'current',
        total: 36521,
        perceived: 2564,
        dueDate: new Date(),
    }, {
        campaign: 'Que de poissons',
        slug: 'que-de-poissons',
        campaignStatus: 'current',
        total: 12345,
        perceived: 4093,
        dueDate: new Date()
    }, {
        campaign: 'Une grousse poullerie',
        slug: 'une-grosse-poullerie',
        campaignStatus: 'soon',
        total: 7234,
        perceived: 1233,
        dueDate: new Date()
    },
];

function DepositTable() {
  return (
    <Box>
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Campagne</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {campaigns.map(
                        (campaign, idx) => 
                            <Tr key={campaign.slug}>
                                <Td>{idx + 1}</Td>
                                <Td>
                                    <Box>
                                        <Text>
                                            {campaign.campaign}
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Tag>
                                        {campaign.campaignStatus}
                                    </Tag>
                                </Td>
                            </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default DepositTable