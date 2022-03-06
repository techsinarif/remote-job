import * as type from '../types';

const createJob = (job) => {
  return {
    type: type.JOB_CREATE,
    payload: job,
  }
}

export default createJob;