export interface IMomentTag {
  id: string;
  tag: string;
  tintColor?: string;
}
export interface IMoment {
  id: number;
  media: string;
  content: string;
  type: string;
  mediaType: string;
  isLiked: boolean;
  createdAt: string;
}
