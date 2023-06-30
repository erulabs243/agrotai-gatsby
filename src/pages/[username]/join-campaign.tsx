import React from 'react'

type Props = {}

const JoinCampaign = (props) => {
    const {username} = props.params;
    console.log(username)

  return (
    <div>JoinCampaign</div>
  )
}

export default JoinCampaign