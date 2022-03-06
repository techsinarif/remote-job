import * as type from "../types";

const initialState = {
  job: {
    jobDescription: ''
  },
  loading: false,
  error: null
};

export default function job(state = initialState, action) {
  switch (action.type) {
    case type.JOB_CREATE:
      return {
        ...state,
        job: action.payload,
        loading: true
      }
    case type.JOB_CREATE_SUCCESS: 
      return {
        ...state,
        loading: false,
        job: action.payload
      }
    case type.JOB_CREATE_FAILURE: 
      return {
        ...state, 
        loading: false,
        error: action.message
      }
    default:
      return state;
  }
}
