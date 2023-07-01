import { Heading } from '@chakra-ui/react';
import { CampaignChart } from '@components/logged';
import { LoggedHeading } from '@components/particles';
import LoggedLayout from '@layouts/logged';
import React from 'react'

type Props = {}

const Campaign = (props) => {

    const {username, campaign} = props.params;

    return (
    <LoggedLayout username={username}>
      <LoggedHeading heading={campaign} />

      {/* Chart for dates */}
      <CampaignChart />
    </LoggedLayout>
  )
}

export default Campaign