export * from '@screens/Auth/action';
export * from './general/action';

export const _onSuccess = (action: string) => action + '_SUCCESS';
export const _onFail = (action: string) => action + '_FAIL';
export const _onComplete = (action: string) => action + '_COMPLETE';
export const _onUnmount = (action: string) => action + '_UNMOUNT';
export const _onSearch = (action: string) => action + '_SEARCH';
