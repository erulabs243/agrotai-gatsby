// Expertise card
export type ExpertiseCardProps = {
  title: string
  icon: string
  subtitle: string
  description: string
}

// Stats card
export type StatsCardProps = {
  amount: number
  description: string
  title: string
  metric: string
}

// Tabs
export type HomeTabsProps = {
  heading: string
  image: string
  description: string
}

export type NavbarLinksProps = {
  label: string
  uri: string
  isButton: boolean
}

type ProductImage = {
  url: string
}

export type ProductsGraphProps = {
  name: string
  slug: string
  status: string
  strapi_id: number
  image: ProductImage[]
}
