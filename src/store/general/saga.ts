import {showMessage} from '@components/common/ToastMessage';
import {_onComplete} from '@store/actions';
import {call, delay, put, race} from 'redux-saga/effects';

const OPTION = {title: null, message: null, isToast: true, callback: null};

export const guard = (saga: any, config?: any) =>
  function* (action: any) {
    const CONFIG = {...OPTION, ...config};
    try {
      const {timeout} = yield race({
        res: call(saga, action),
        timeout: delay(10 * 1000),
      });
      if (timeout) throw new Error('Request Timeout');
    } catch (error: any) {
      console.log("ERROR: ", error.response?.data);
      if (CONFIG.message) {
        showMessage({type: 'error', message: CONFIG.message});
      } else {
        CONFIG.isToast && showMessage({type: 'error', message: error.response.data.message || String(error)});
      }
      CONFIG.callback && CONFIG.callback();
    } finally {
      yield put({type: _onComplete(action?.type)});
    }
  };
