import {
  BlogPost,
  ExpertiseCardProps,
  ICareer,
  IGallery,
  StatsCardProps,
} from "@propstypes/particles";

export interface HomeStatsInterface {
  stats: {
    nodes: StatsCardProps[];
  };
}

export interface HomeWorkInterface {
  works: {
    nodes: ExpertiseCardProps[];
  };
}

export interface BlogInterface {
  posts: {
    nodes: BlogPost[];
  };
}

export interface CareersInterface {
  careers: {
    nodes: ICareer[];
  };
}

export interface GaleriesInterface {
  galeries: {
    nodes: IGallery[];
  };
}
