import { Box, HStack, Heading, Stack } from '@chakra-ui/react'
import { CampaignsTable, DashboardStats, InvestingCampaigns, } from '@components/logged'
import LoggedLayout from '@layouts/logged'
import React from 'react'
import { getCampaignsData } from '../../api/campaign'

const Dashboard = ({serverData}) => {


    return (
    <LoggedLayout username="Tableau de bord">
      {/* Overall stats */}
      <DashboardStats />

      {/* List all campaigns */}
      <CampaignsTable />
      <h1>dfgfg</h1>

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

export async function getServerData() {
  return {
    props: {},
    status: 200
  }
}
/* 
export async function getServerData(){
  try{
    return {
      props: {campaigns: await getCampaignsData()},
      status: 200
    }
  }catch(e){
    return {
      props: {
        campaigns: []
      },
      status: 500
    }
  }
} */


export default Dashboard