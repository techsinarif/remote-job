import { combineReducers } from 'redux';
import job from './job';

const rootReducers = combineReducers({
  job: job,
});

export default rootReducers;