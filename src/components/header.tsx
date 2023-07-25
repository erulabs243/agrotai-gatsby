import * as React from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavbarLinksProps } from "@propstypes/particles";
import { Navlink } from "@components/particles";
import { IconMenu2 } from "@tabler/icons-react";
import { SERVER_HOST } from "../../consts";

type Props = {
  siteTitle: string;
};

const navbarLinks: Array<NavbarLinksProps> = [
  {
    label: "Accuteil",
    uri: "/",
    isButton: false,
  },
  {
    label: "Boutique",
    uri: "/boutique",
    isButton: false,
  },
  {
    label: "Crowdfarming",
    uri: "/crowdfarming",
    isButton: false,
  },
  {
    label: "Qui sommes-nous",
    uri: "/about",
    isButton: false,
  },
  {
    label: "Participer à la campagne",
    uri: "/auth/login",
    isButton: true,
  },
];

const Header = ({ siteTitle }: Props) => (
  <Box
    as="header"
    w="full"
    py={4}
    position="sticky"
    top={0}
    bg="whiteAlpha.900"
    zIndex={1000}
  >
    <Container mx="auto" w={{ base: "95vw", lg: "70vw" }} maxW="full" py={2}>
      <HStack>
        <Box>
          <Link href="/">
            <HStack gap={4}>
              <Image
                src={`${SERVER_HOST}/uploads/logo_icon_685d01ff8a.png`}
                alt={siteTitle}
                w={6}
                h={6}
                objectFit="cover"
                objectPosition="center"
              />
              <Text fontSize="2xl">{siteTitle}</Text>
            </HStack>
          </Link>
        </Box>

        {/* Show menu on large screen */}
        <Show above="lg">
          <Stack
            as={Box}
            flex={1}
            alignItems="center"
            flexDir="row"
            justifyContent="flex-end"
          >
            {navbarLinks.map((link: NavbarLinksProps, idx: number) => (
              <Navlink
                uri={link.uri}
                label={link.label}
                isButton={link.isButton}
                key={`${link}-${idx}`}
              />
            ))}
          </Stack>
        </Show>

        {/* Show menu on mobile */}
        <Show below="lg">
          <Stack as={Box} mr={0} flex={1} justifyContent="flex-end">
            <Menu>
              <MenuButton
                as={Button}
                aria-label="Menu"
                alignSelf="flex-end"
                colorScheme="green"
                leftIcon={<Icon as={IconMenu2} w={5} h={5} />}
              >
                Menu
              </MenuButton>
              <MenuList px={4} py={2}>
                {navbarLinks.map((link: NavbarLinksProps, idx: number) => (
                  <MenuItem
                    my={2}
                    key={`${link.uri}-${idx}`}
                    as={Button}
                    variant={link.isButton ? "solid" : "ghost"}
                    colorScheme={link.isButton ? "green" : "gray"}
                    rounded="lg"
                  >
                    <Link
                      href={link.uri}
                      flex={1}
                      textAlign="right"
                      _hover={{ textDecor: "none" }}
                    >
                      {link.label}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Stack>
        </Show>
      </HStack>
    </Container>
  </Box>
);

export default Header;
