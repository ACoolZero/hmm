export type AccessModeType = 'PUBLIC' | 'PRIVATE';

export interface CreateMomentPayload {
  moment: {
    media: string;
    content: string;
    accessMode: AccessModeType;
    milestoneId?: string;
  };
}
