import { Box, Stack, Text } from "@chakra-ui/react"
import { StatsCardProps } from "@propstypes/particles"
import React from "react"

const StatsCard = ({ amount, description }: StatsCardProps) => {
  return (
    <Stack
      as={Box}
      w={{ base: "full", md: "sm" }}
      px={{ base: 8, md: 8 }}
      py={{ base: 8, md: 16 }}
      spacing={4}
      shadow="lg"
      rounded="lg"
      bg="white"
    >
      <Text
        fontSize="5xl"
        textAlign="left"
        fontWeight="bold"
        color="green.500"
      >{`+ ${amount}`}</Text>
      <Text textAlign="left" fontSize="xl">
        {description}
      </Text>
    </Stack>
  )
}

export default StatsCard