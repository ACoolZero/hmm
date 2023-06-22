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
  image: number;
  title: string;
}

export interface IMilestone {
  id: number;
  image: number;
  label: string;
  datetime: string;
}
