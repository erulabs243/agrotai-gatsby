import { Box, HStack, Heading, Stack } from '@chakra-ui/react'
import { CampaignsTable, DashboardStats, InvestingCampaigns, } from '@components/logged'
import LoggedLayout from '@layouts/logged'
import React from 'react'

const Dashboard = (props) => {

    console.log(props.params)

    return (
    <LoggedLayout username={props.params.username}>
      {/* Overall stats */}
      <DashboardStats />

      {/* List all campaigns */}
      <CampaignsTable />

      {/* List campaigns in which the user invested in */}
      <HStack
        my={{base: 4, md: 12}}
        mx="auto"
        w="70%"
        gap={8}  
      >
        <InvestingCampaigns />
        <InvestingCampaigns />
      </HStack>
    </LoggedLayout>
  )
}

export default Dashboard