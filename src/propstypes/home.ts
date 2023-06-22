import { ExpertiseCardProps, StatsCardProps } from "@propstypes/particles"

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
