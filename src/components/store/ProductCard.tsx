import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Tag,
} from "@chakra-ui/react"
import { ProductsGraphProps } from "@propstypes/particles"
import React from "react"
import { SERVER_HOST } from "../../../consts"

export type ProductStatus = "instock" | "outstock" | "soon"

type Props = {
  product: ProductsGraphProps
}

function ProductCard({ product }: Props) {
  return (
    <Card rounded="lg" my={4} shadow="none">
      <CardBody>
        <Box w="full" mx="auto" h={36} bg="gray.100" p={2} rounded="lg">
          <Image
            src={`${SERVER_HOST}${product.image[0].url}`}
            alt={product.name}
            objectPosition="center"
            objectFit="contain"
            h="full"
            w="full"
          />
        </Box>
        <Stack pt={2}>
          <Heading as="h4" fontSize="2xl">
            {product.name}
          </Heading>
          <Box>
            <Tag
              size="sm"
              colorScheme={
                product.status === "instock"
                  ? "green"
                  : product.status === "outofstock"
                  ? "red"
                  : "gray"
              }
              textTransform="uppercase"
            >
              {product.status === "instock"
                ? "En stock"
                : product.status === "outofstock"
                ? "Indisponible"
                : "Bientôt"}
            </Tag>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button colorScheme="green" variant="ghost">
          Commander
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
