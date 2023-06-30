import { Box, Heading, Stack } from '@chakra-ui/react'
import { DashboardStats, DepositTable } from '@components/logged'
import LoggedLayout from '@layouts/logged'
import React from 'react'

const Dashboard = (props) => {

    console.log(props.params)

    return (
    <LoggedLayout username={props.params.username}>
      <DashboardStats />

      <Stack 
        direction="row" 
        gap={{base: 4, md: 12}}
        >
          <Box w="60%">
            <DepositTable />
          </Box>
      </Stack>
    </LoggedLayout>
  )
}

export default Dashboard