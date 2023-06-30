import { Stack, Box, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import { StatCard } from '@propstypes/particles';
import React from 'react';

const stats: StatCard[] = [
    {
        label: '# de campagnes',
        amount: 4,
        helperText: 'Le nombre de campages en cours'
    }, {
        label: 'Valides',
        amount: 3,
        helperText: 'Campagnes deja confirmees'
    }, {
        label: 'En attente',
        amount: 1,
        helperText: 'Campagnes en cours de traitement'
    }
]

function DashboardStats() {
  return (
    <Stack 
        as={Box}
        direction='row'
        gap={{base: 4, md: 12}}
        my={{base: 4, md: 12}}
        mx="auto"
        w="70%"
    >
        {stats.map(stat => 
            <Stat 
                key={stat.label}
                borderWidth={1}
                py={2}    
                px={4}
                rounded="lg"
            >
                <StatLabel>{stat.label}</StatLabel>
                <StatNumber>{stat.amount}</StatNumber>
                <StatHelpText>{stat.helperText}</StatHelpText>
            </Stat>
        )}
    </Stack>
  );
};

export default DashboardStats;