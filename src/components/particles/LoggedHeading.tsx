import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  heading: string;
};

function LoggedHeading({ heading }: Props) {
  return (
    <Box w="70%" mx="auto" mb={8}>
      <Heading>{heading}</Heading>
    </Box>
  );
}

export default LoggedHeading;
