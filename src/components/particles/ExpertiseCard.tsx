import { Box, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { ExpertiseCardProps } from "@propstypes/particles";
import { IconCarrot, IconCherry, IconFish } from "@tabler/icons-react";
import React from "react";

const ExpertiseCard = ({
  title,
  subtitle,
  description,
  icon,
}: ExpertiseCardProps) => {
  return (
    <Stack
      as={Box}
      alignContent="flex-start"
      px={{ base: 16, md: 8 }}
      shadow="lg"
      py={12}
      spacing={12}
      rounded="lg"
      w={{ sm: "full", md: "xs" }}
    >
      {
        {
          poissons: <Icon as={IconFish} w={24} h={24} color="green.500" />,
          legumes: <Icon as={IconCarrot} w={24} h={24} color="green.700" />,
          cereales: <Icon as={IconCherry} w={24} h={24} color="green.900" />,
        }[icon]
      }
      <Box w="full">
        <Heading textAlign="left" fontSize="2xl" textTransform="uppercase">
          {title}
        </Heading>
        <Text textAlign="left" color="gray.700" fontSize="sm" fontWeight="bold">
          {subtitle}
        </Text>
        <Text textAlign="left" color="gray.700" mt={4}>
          {description}
        </Text>
      </Box>
    </Stack>
  );
};

export default ExpertiseCard;
