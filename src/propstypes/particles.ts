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

export interface StatCard {
  label: string;
  amount:number;
  helperText?: string;
}

export interface StatCardWithIndicator
  extends StatCard {
    statType: "increase" | "decrease";
    percentage: number;
}

export interface DepositRow {
  amount: number;
  date: Date;
  campaign: string;
  campaignStatus: string;
}

export interface CampaignRow {
  campaign: string;
  slug: string;
  campaignStatus: string;
  total: number;
  perceived: number;
  dueDate?: string;
}

export interface ITag {
  id: number;
  title: string;
  slug?: string;
}

export interface IPost {
  strapi_id: number;
  slug: number;
}

export interface BlogPost extends IPost {
  title: string;
  excerpt: string;
  updatedAt: string;
  tags: ITag[]
  cover : {
    localFile: {
      childImageSharp: {
        fixed: {
          src: string;
        }
      }
    }
  }
}

export interface IBlogPost extends BlogPost {
  subtitle: string;
  content: {
    data: {
      content: string;
    }
    medias: Array<{
      url: string;
    }>
  }
}