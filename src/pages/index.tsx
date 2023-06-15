import { PageProps } from "gatsby"
import React from "react"

type Props = {}

type City = "London"

const IndexPage: React.FC<PageProps> = (props: Props) => {
  let city: City = "London"
  console.log(city)

  return <div>IndexPage</div>
}

export default IndexPage
