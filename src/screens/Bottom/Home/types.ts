export interface IArticle {
  id: number;
  image: number;
  title: string;
  short: string;
  content: string;
  views_count: number;
  rating: number;
}

export interface IStory {
  id: number;
  media: string;
  content: string;
  type: string;
  mediaType: string;
  isLiked: boolean;
  createdAt: string;
}

export interface IMilestone {
  id: string;
  icon: string;
  content: string;
  milestoneTime: string;
  location: string;
  momentId: string;
}

export interface IReaction {
  id: number;
  icon: string;
  name: string;
  color: string;
  percentage: number;
}
