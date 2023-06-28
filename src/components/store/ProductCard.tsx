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
import React from "react"

export type ProductStatus = "instock" | "outstock" | "soon"

type ProductProps = {
  id: number
  name: string
  slug: string
  image: string
  status: string
}

type Props = {
  product: ProductProps
}

function ProductCard({ product }: Props) {
  return (
    <Card rounded="lg" my={4} shadow="none">
      <CardBody>
        <Image
          src={product.image}
          alt={product.name}
          objectPosition="center"
          objectFit="cover"
          h={36}
          w="full"
        />
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
