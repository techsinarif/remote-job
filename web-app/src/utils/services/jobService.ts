import axios from 'axios';

function apiService(){
  const createJob = async (data: any) => {
    const url = '/api/job/add';
    return axios.post(url, {jobDescription: data},{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res: any) => {
      return res
    }).catch((err: any) => {
      return err
    })
  };
  return {createJob}
}

const jobService = apiService();
export default jobService;