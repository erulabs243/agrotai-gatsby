import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SERVER_HOST } from "../../consts";
import { Fade, Slide } from "react-awesome-reveal";

const IndexHero = () => {
  return (
    <Fade>
      <Container
        w="100%"
        maxW="100%"
        backgroundImage={`${SERVER_HOST}/uploads/large_pexels_rdne_stock_project_7414284_45919ee0a8.jpg`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        mt={-24}
      >
        <Box
          w="100vw"
          backdropFilter="auto"
          backdropBlur="4px"
          backdropContrast="70%"
          backdropBrightness="70%"
        >
          <Stack
            as={Box}
            textAlign="center"
            spacing={8}
            py={{ base: 48, md: 64 }}
          >
            <Slide direction="down">
              <Heading as="h1" color="white">
                Agrotai
              </Heading>
            </Slide>
            <Slide cascade damping={0.3} direction="up" duration={1000}>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="white"
              >
                Pour une agriculture moderne et durable
              </Text>
              <Button size="lg" alignSelf="center" as={Link} href="#">
                Rejoignez-nous
              </Button>
            </Slide>
          </Stack>
        </Box>
      </Container>
    </Fade>
  );
};

export default IndexHero;
