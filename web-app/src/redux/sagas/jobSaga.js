import { call, put, takeEvery } from 'redux-saga/effects';
import jobService from '../../utils/services/jobService';

function* createJob(action) {
  try{
    const job = yield call(jobService.createJob(action.payload));
    yield put({ type: 'JOB_CREATE_SUCCESS', job: job })
  } catch(e) {
    yield put({ type: 'JOB_CREATE_FAILURE', message: e.msg })
  }
}

function* jobSaga() {
  yield takeEvery('JOB_CREATE', createJob);
}

export default jobSaga;