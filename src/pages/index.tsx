import { Box, Heading, Text } from "@chakra-ui/react"
import { PageProps } from "gatsby"
import React from "react"

type Props = {}

const IndexPage: React.FC<PageProps> = (props: Props) => {
  return (
    <Box>
      <Heading textTransform="uppercase">This is the header</Heading>
      <Text textTransform="uppercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum
        mollitia a assumenda ut qui nulla nemo sunt vitae hic odit aspernatur
        impedit sapiente voluptas, officiis doloremque placeat aliquam deserunt?
      </Text>
    </Box>
  )
}

export default IndexPage
