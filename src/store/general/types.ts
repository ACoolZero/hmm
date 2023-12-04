export interface ActionPayload<T> {
  type: string;
  payload: T;
  callback?: any;
}
