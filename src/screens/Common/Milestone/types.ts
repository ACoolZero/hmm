export interface CreateMileStonePayload {
  mileStone: {
    content: string;
    icon: string;
    location: string;
    milestoneTime: string;
  };
  hasMoment?: boolean;
}
