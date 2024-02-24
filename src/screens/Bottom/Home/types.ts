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
  thumbnail: string;
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
  story: string;
  momentId: string;
}

export interface IReaction {
  id: number;
  icon: any;
  name: string;
  color: string;
  percent: number;
}
