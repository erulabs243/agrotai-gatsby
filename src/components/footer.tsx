import {
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react"
import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <Stack
      as={Box}
      bg="green.700"
      direction={{ base: "column-reverse", lg: "row" }}
      px={{ base: 12, lg: 64 }}
      py={{ base: 12, md: 24 }}
    >
      {/* INFOS GENERALES */}
      <Stack direction="column" spacing={4} flex={2}>
        <Box>
          <Link href="/" _hover={{ textDecor: "none" }}>
            <Text color="white" fontSize="4xl">
              Agrotai
            </Text>
          </Link>
          <Text fontSize="lg" color="white">
            Rendre meilleur l'agriculture
          </Text>
          <Text color="white">
            &copy; {`${new Date().getFullYear()} Agrotai`}
          </Text>
        </Box>
        <HStack>
          <IconButton
            variant="solid"
            colorScheme="facebook"
            size="lg"
            icon={<Icon as={IconBrandFacebookFilled} w={6} h={6} />}
            aria-label="Bouton Facebook"
            rounded="full"
          />
          <IconButton
            variant="solid"
            colorScheme="twitter"
            size="lg"
            icon={<Icon as={IconBrandTwitterFilled} w={6} h={6} />}
            aria-label="Bouton Facebook"
            rounded="full"
          />
          <IconButton
            variant="solid"
            colorScheme="red"
            size="lg"
            icon={<Icon as={IconBrandYoutube} w={6} h={6} />}
            aria-label="Bouton Facebook"
            rounded="full"
          />
        </HStack>
      </Stack>

      {/* LIENS UTILES */}
      <Stack as={Box} flex={1}>
        <Text fontSize="sm" textTransform="uppercase" color="white">
          Liens utiles
        </Text>
        <Stack direction="column" spacing={0}>
          <Link color="gray.200" _hover={{ textDecor: "none" }} href="/">
            <Text>Accueil</Text>
          </Link>
          <Link color="gray.200" _hover={{ textDecor: "none" }} href="/">
            <Text>Crowdfarming</Text>
          </Link>
          <Link color="gray.200" _hover={{ textDecor: "none" }} href="/">
            <Text>Boutique</Text>
          </Link>
          <Link color="gray.200" _hover={{ textDecor: "none" }} href="/">
            <Text>A propos de nous</Text>
          </Link>
          <Link color="gray.200" _hover={{ textDecor: "none" }} href="/">
            <Text>Contact</Text>
          </Link>
        </Stack>
      </Stack>

      {/* CONTACTS */}
      <Stack as={Box} flex={1}>
        <Text fontSize="sm" textTransform="uppercase" color="white">
          L'entreprise
        </Text>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" alignItems="center">
            <Icon as={IconPhone} w={4} h={4} color="gray.200" />
            <Text color="gray.200">=243 (0) 980 980 980</Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Icon as={IconMail} w={4} h={4} color="gray.200" />
            <Link href="mailto:contact@agrotai.com">
              <Text color="gray.200">contact@agrotai.com</Text>
            </Link>
          </Stack>
          <Stack direction="row" alignItems="flex-start">
            <Icon as={IconMapPin} w={4} h={4} mt={1} color="gray.200" />
            <Box>
              <Text color="gray.200">123 P.E.Lumumba, Bukavu</Text>
              <Text fontSize="sm" color="gray.200">
                Sud-KIvu, R.D.Congo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Footer
