import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  IconCarrot,
  IconFish,
  IconMoodHappy,
  IconShoppingCartDiscount,
} from "@tabler/icons-react"
import React from "react"
import { Fade, Slide, Zoom } from "react-awesome-reveal"

type Props = {}

function Hero({}: Props) {
  return (
    <Fade>
    <Box w="full" bgGradient="linear(to-br, green.200, green.600)" mt={-24}>
      <Stack
        as={Box}
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: 8, md: 16 }}
        w={{ base: "90vw", lg: "6xl" }}
        mx="auto"
        py={{ base: 32, md: 64 }}
        alignItems="center"
      >
        <Stack as={Box} spacing={4} w={{ base: "full", md: "40%" }}>
          <Fade delay={1000}>
          <Slide cascade >
          <Heading as="h2" fontWeight={700} textAlign={{base: 'center', lg: 'left'}}>
            Faites un pas dans l'agriculture{" "}
            <Text as="span" color="white">
              participative
            </Text>
          </Heading>
          <Text textAlign={{base: 'center', lg: 'left'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            unde corporis? Magni odio minima sit, dolore similique libero
            pariatur quaerat,
          </Text>
          <Button colorScheme="gray" alignSelf={{base: "center", lg: "flex-start"}} my={4}
            as={Link}
            _hover={{textDecor: 'none'}}
            href="#"
          >Participer aux campagnes</Button>
          </Slide>
          </Fade>
        </Stack>
        <Stack flex={1} p={4}>
          <Zoom>
          <Image
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Agrotai crowdfarming"
            rounded="lg"
          />
          </Zoom>
        </Stack>
      </Stack>
    </Box>
    </Fade>
  )
}

export default Hero
