import {GET_MOMENTS_LIST, GET_MOMENT_TAGS} from '@store/actions';
import {extraReducer, reducer} from '@store/general/common';

const momentTags = (...args: any) => reducer.apply(null, [...args, GET_MOMENT_TAGS] as any);

const momentsList = (...args: any) => extraReducer.apply(null, [...args, GET_MOMENTS_LIST] as any);

export default {momentsList, momentTags};
