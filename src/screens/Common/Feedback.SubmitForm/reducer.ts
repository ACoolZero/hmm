import {SEND_FEEDBACK} from '@store/actions';
import {reducer} from '@store/general/common';

const feedback = (...args: any) => reducer.apply(null, [...args, SEND_FEEDBACK] as any);

export default {feedback};
