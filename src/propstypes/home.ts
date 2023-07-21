import { BlogPost, ExpertiseCardProps, StatsCardProps } from "@propstypes/particles"

export interface HomeStatsInterface {
  stats: {
    nodes: StatsCardProps[]
  }
}

export interface HomeWorkInterface {
  works: {
    nodes: ExpertiseCardProps[]
  }
}

export interface BlogInterface {
  posts: {
    nodes: BlogPost[]
  }
}