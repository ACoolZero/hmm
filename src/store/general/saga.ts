import {showMessage} from '@components/common/ToastMessage';
import {_onComplete, _onFailure} from '@store/actions';
import { TOKEN_EXPIRED } from '@utils/constants';
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
      if (!error.response) {
        // Network or server down error
        yield put({ type: _onFailure(action.type), error: 'Network connection error' });
        CONFIG.isToast && showMessage({type: 'error', message: 'Network connection error' });
      }
      const statusCode = error?.response?.status;
      if (statusCode !== TOKEN_EXPIRED) { // Show error message but not 401. To view 401, look for services/api.ts file
        if (CONFIG.message) {
          showMessage({type: 'error', message: CONFIG.message});
        } else {
          CONFIG.isToast && showMessage({type: 'error', message: error.response.data.message || String(error)});
        }
      }
      CONFIG.callback && CONFIG.callback();    
    } finally {
      yield put({type: _onComplete(action?.type)});
    }
  };
