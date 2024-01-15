export interface IMoodHistory {
  id: number;
  date: string;
  userMoodHistories: IMoodHistoryState[];
}

export interface IMoodHistoryState {
  moodId: number;
  icon: string;
  name: string;
  time: string;
}
