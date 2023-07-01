import { Heading, Stack, Box } from '@chakra-ui/react';
import { CampaignProgress } from '@components/particles';
import { CampaignRow } from '@propstypes/particles';
import React from 'react'


const campaigns: CampaignRow[] = [
    {
        campaign: "Manger sain",
        slug: 'manger-sain',
        campaignStatus: 'current',
        total: 36521,
        perceived: 2564,
        dueDate: '2023-11-12',
    }, {
        campaign: 'Que de poissons',
        slug: 'que-de-poissons',
        campaignStatus: 'current',
        total: 12345,
        perceived: 4093,
        dueDate: '2023-09-07'
    }, {
        campaign: 'Une grousse poullerie',
        slug: 'une-grosse-poullerie',
        campaignStatus: 'soon',
        total: 7234,
        perceived: 5874,
    },
]

function InvestingCampaigns() {
  return (
    <Stack 
        flex={1}
        as={Box}
        direction="column"
        px={8}
        pt={4}
        py={8}
        pb={12}
        bg="gray.100"
        rounded="lg"
    >
        <Heading 
            fontSize="3xl"
            mb={8}
        >Vos campagnes</Heading>
        <Box
            bg="white"
            rounded="lg"
            py={8}
        >
            {campaigns.map(campaign => 
                <CampaignProgress key={campaign.slug} campaign={campaign} />    
            )}
        </Box>
    </Stack>
  )
}

export default InvestingCampaigns