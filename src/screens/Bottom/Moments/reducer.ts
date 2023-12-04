import {GET_MOMENTS_LIST, GET_USER_MOMENTS_LIST} from '@store/actions';
import {extraReducer} from '@store/general/common';

const momentsList = (...args: any) => extraReducer.apply(null, [...args, GET_MOMENTS_LIST] as any);

const userMomentsList = (...args: any) => extraReducer.apply(null, [...args, GET_USER_MOMENTS_LIST] as any);

export default {momentsList, userMomentsList};
