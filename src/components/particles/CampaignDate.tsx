import { Text } from '@chakra-ui/react'
import React from 'react'
import {DateTime, Duration, DurationObjectUnits} from 'luxon'

type Props = {
    date?: string
}

function CampaignDate({date}: Props) {

    const processingDate = () => {
        if(!date) return "-";

        const end = DateTime.fromISO(date).setLocale('fr');
        let interval = end.diffNow();
        const days = interval.as('days');

        if(days < 7) return interval.shiftTo('days').toHuman();
        else if(days > 7 && days <= 30) 
            return interval.shiftTo('weeks', 'days').toHuman();
        else if(days > 30 && days <= 365)
            return interval.shiftTo('months', 'weeks').toHuman();
        else return interval.shiftTo('years', 'months').toHuman();
    }

    //FIXME round date

  return (
    <Text>
        {processingDate()}
    </Text>
  )
}

export default CampaignDate