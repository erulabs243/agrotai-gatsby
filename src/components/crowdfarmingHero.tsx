import React from "react"
import {
  Container,
  Box,
  Stack,
  Text,
  Heading,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Show,
} from "@chakra-ui/react"
import { HomeTabsProps } from "@propstypes/particles"
import { Zoom } from "react-awesome-reveal"

type Props = {}

const tabs: HomeTabsProps[] = [
  {
    heading: `Plus d'argent`,
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: `Vous pouvez gagner plus d'argent...`,
  },
  {
    heading: `Créer de l'emploi`,
    image:
      "https://images.unsplash.com/photo-1627920769842-6887c6df05ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description: `Offrir de l'emploi à plusieurs personnes`,
  },
  {
    heading: `Réduire la famine`,
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Contribuer à la réduction de la famine autour de vous",
  },
]

const CrowdfarmingHero = (props: Props) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0)

  const handleUpdateTabIndex = (idx: number) => {
    setTabIndex(idx)
  }

  return (
    <Container w="100%" maxW="100%">
      <Stack
        as={Box}
        py={{ base: 24, md: 32 }}
        textAlign="center"
        spacing={{ base: 16, md: 24 }}
      >
        <Heading textTransform="uppercase" fontWeight="bold">
          Avec notre système de{" "}
          <Text as="span" color="green.400">
            crowdfarming
          </Text>
        </Heading>

        <Show above="md">
          <Stack
            w={{ base: "100%", lg: "5xl" }}
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            alignSelf="center"
            spacing={8}
          >
            <Tabs
              isFitted
              orientation="vertical"
              w="full"
              colorScheme="green"
              isLazy
            >
              <TabPanels>
                {tabs.map((tab: HomeTabsProps, idx: number) => (
                  <TabPanel key={idx} px={8}>
                    <Zoom duration={2000}>
                      <Image
                        alt={tab.heading}
                        src={tab.image}
                        h={96}
                        w="full"
                        fit="cover"
                        rounded="lg"
                      />
                    </Zoom>
                  </TabPanel>
                ))}
              </TabPanels>
              <TabList w="xl">
                {tabs.map((tab: HomeTabsProps, idx: number) => (
                  <Tab key={idx} w="full">
                    <Stack direction="column" w="full" spacing={0}>
                      <Text
                        textAlign="left"
                        fontSize="2xl"
                        fontWeight="bold"
                        color="green.500"
                      >
                        {tab.heading}
                      </Text>
                      <Text textAlign="left" fontSize="lg" color="gray.700">
                        {tab.description}
                      </Text>
                    </Stack>
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </Stack>
        </Show>

        <Show below="md">
          <Stack
            w={{ base: "100%", lg: "5xl" }}
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            alignSelf="center"
            spacing={8}
          >
            <Box w="full">
              <Image
                alt={tabs[tabIndex].heading}
                src={tabs[tabIndex].image}
                h={96}
                w="full"
                fit="cover"
                rounded="lg"
              />
            </Box>
            <Tabs
              index={tabIndex}
              onChange={handleUpdateTabIndex}
              isFitted
              orientation="vertical"
              w="full"
              colorScheme="green"
              isLazy
            >
              <TabList w="xl">
                {tabs.map((tab: HomeTabsProps, idx: number) => (
                  <Tab key={idx} w="full">
                    <Stack direction="column" w="full" spacing={0}>
                      <Text
                        textAlign="center"
                        fontSize="2xl"
                        fontWeight="bold"
                        color="green.500"
                      >
                        {tab.heading}
                      </Text>
                      <Text textAlign="center" fontSize="lg" color="gray.700">
                        {tab.description}
                      </Text>
                    </Stack>
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </Stack>
        </Show>
      </Stack>
    </Container>
  )
}

export default CrowdfarmingHero
