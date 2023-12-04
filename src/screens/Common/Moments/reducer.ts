import {GET_MOMENT_DETAILS, GET_USER_MOMENTS_LIST, SET_ACTIVE_MOMENT} from '@store/actions';
import {extraReducer, reducer} from '@store/general/common';

const userMomentsList = (...args: any) => extraReducer.apply(null, [...args, GET_USER_MOMENTS_LIST] as any);

const momentDetails = (...args: any) => reducer.apply(null, [...args, GET_MOMENT_DETAILS] as any);

const activeMoment = (...args: any) => reducer.apply(null, [...args, SET_ACTIVE_MOMENT] as any);

export default {userMomentsList, momentDetails, activeMoment};
