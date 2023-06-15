import { Box, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { ExpertiseCardProps } from "@propstypes/particles"
import { IconCarrot, IconCherry, IconFish } from "@tabler/icons-react"
import React from "react"

const ExpertiseCard = ({ heading, subheading, icon }: ExpertiseCardProps) => {
  return (
    <Stack
      as={Box}
      alignContent="flex-start"
      px={{ base: 16, md: 8 }}
      shadow="lg"
      py={12}
      spacing={12}
      rounded="lg"
      maxW={{ base: "full", md: "xs" }}
    >
      {
        {
          fish: <Icon as={IconFish} w={24} h={24} color="green.500" />,
          vegetables: <Icon as={IconCarrot} w={24} h={24} color="green.700" />,
          cereals: <Icon as={IconCherry} w={24} h={24} color="green.900" />,
        }[icon]
      }
      <Box>
        <Text textAlign="left" color="gray.700">
          {subheading}
        </Text>
        <Heading
          textAlign="left"
          fontSize="2xl"
          textTransform="uppercase"
          my={4}
        >
          {heading}
        </Heading>
      </Box>
    </Stack>
  )
}

export default ExpertiseCard
