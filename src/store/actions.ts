export * from '@screens/Auth/action';
export * from '@screens/Bottom/Chat/action';
export * from '@screens/Bottom/Home/action';
export * from '@screens/Bottom/Moments/action';
export * from '@screens/Common/Feedback.SubmitForm/action';
export * from '@screens/Common/Gadgets.Customization/action';
export * from '@screens/Common/Milestone/action';
export * from '@screens/Common/Moments/action';
export * from './general/action';

export const _onSuccess = (action: string) => action + '_SUCCESS';
export const _onFailure = (action: string) => action + '_FAILURE';
export const _onComplete = (action: string) => action + '_COMPLETE';
export const _onUnmount = (action: string) => action + '_UNMOUNT';
export const _onSearch = (action: string) => action + '_SEARCH';
