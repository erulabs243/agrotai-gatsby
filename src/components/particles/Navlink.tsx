import { Button, Link } from "@chakra-ui/react"
import { NavbarLinksProps } from "@propstypes/particles"
import React from "react"

function Navlink({ label, uri, isButton }: NavbarLinksProps) {
  return (
    <Link href={uri}>
      <Button
        variant={isButton ? "solid" : "ghost"}
        rounded="lg"
        colorScheme={isButton ? "green" : "gray"}
      >
        {label}
      </Button>
    </Link>
  )
}

export default Navlink
