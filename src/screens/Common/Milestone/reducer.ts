import {CREATE_MILESTONE, GET_MILESTONES, GET_MILESTONE_DETAILS, UPDATE_MILESTONE} from '@store/actions';
import {reducer} from '@store/general/common';

const milestoneList = (...args: any) => reducer.apply(null, [...args, GET_MILESTONES] as any);

const milestoneDetails = (...args: any) => reducer.apply(null, [...args, GET_MILESTONE_DETAILS] as any);

const updateMilestone = (...args: any) => reducer.apply(null, [...args, UPDATE_MILESTONE] as any);

const createMilestone = (...args: any) => reducer.apply(null, [...args, CREATE_MILESTONE] as any);

export default {milestoneList, milestoneDetails, updateMilestone, createMilestone};
