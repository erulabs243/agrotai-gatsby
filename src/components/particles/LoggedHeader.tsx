import * as React from "react"
import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react"
import { NavbarLinksProps } from "@propstypes/particles"
import { Navlink } from "@components/particles"
import {  IconHome2, IconLogout2, IconMenu2, IconTable, IconUser } from "@tabler/icons-react"
import { navigate } from "gatsby"
import { useSetAtom } from "jotai"
import { authTokenAtom } from "../../atoms"

type Props = {
  siteTitle: string;
  username: string;
}

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
    label: "Mes campagnes",
    uri: "/about",
    isButton: false,
  },
]

const LoggedHeader = ({ siteTitle, username }: Props) => {

  const setAuthToken = useSetAtom(authTokenAtom)

  const logout = () => {
    setAuthToken('')
    localStorage.removeItem('agrotai-authToken')
    localStorage.removeItem('agrotai-lastLogged')
    navigate('/')
  }

  return(
  <Box
    as="header"
    w="full"
    py={4}
    position="sticky"
    top={0}
    backdropFilter="blur(7px) hue-rotate(60deg)"
    zIndex={1000}
  >
    <Container mx="auto" w="95vw" maxW="full" py={2}>
      <HStack>
        <Box>
          <Link href="/">
            <Text>{siteTitle}</Text>
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
            <Menu>
              <MenuButton
                as={Box}
                aria-label="Profile"
              >
                <Stack
                  direction="row-reverse"
                  alignItems="center"
                  gap={2}
                  bg="gray.100"
                  py={2}
                  px={4}
                  rounded="lg"
                  _hover={{cursor: 'pointer'}}
                >
                  <Avatar size="xs" />
                  <Text>{username}</Text>
                </Stack>
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem px={2}>
                    <Button
                      variant="ghost"
                      size="sm"
                      w="full"
                      justifyContent="flex-start"
                      leftIcon={
                        <Icon 
                          as={IconHome2} 
                        />
                      }
                      onClick={() => navigate(`/${username}/dashboard`)}
                    >
                      Tableau de bord
                    </Button>
                  </MenuItem>
                  <MenuItem px={2}>
                    <Button
                      variant="ghost"
                      size="sm"
                      w="full"
                      justifyContent="flex-start"
                      leftIcon={
                        <Icon 
                          as={IconTable} 
                        />
                      }
                    >
                      Mes campagnes
                    </Button>
                  </MenuItem>
                  <MenuItem px={2}>
                    <Button
                        variant="ghost"
                        w="full"
                        size="sm"
                        justifyContent="flex-start"
                        leftIcon={
                          <Icon 
                            as={IconUser} 
                          />
                        }
                      >
                        Mon compte
                      </Button>
                    </MenuItem>
                </MenuGroup>
                <MenuGroup>
                  <MenuItem px={2}>
                    <Button
                      variant="ghost"
                      w="full"
                      colorScheme="red"
                      size="sm"
                      justifyContent="flex-start"
                      leftIcon={
                        <Icon 
                          as={IconLogout2} 
                        />
                      }
                      onClick={logout}
                    >
                      Deconnexion
                    </Button>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
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
)}

export default LoggedHeader
