import JobStepper from './JobStepper';
// import AboutPosition from './AboutPosition';
// import AboutCompany from './AboutCompany';
import './PostJob.scss';

const PostJob = () => {
  return (
    <div className='post-job-container'>
      <h1 className='job-post-title'>Post a job</h1>
      <JobStepper />
      {/* <AboutPosition />
      <AboutCompany /> */}
    </div>
  )
};

export default PostJob;