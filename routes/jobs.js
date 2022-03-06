// We are using express router, which helps us to manage the api routing files in more structured way.

const router = require('express').Router();
const jobs = require('../models/jobs');

router.post('/add', async (req, res) => {
  const {jobDescription} = req.body;
  try{
    const createJob = await jobs.create({jobDescription});
    console.log('Contacts created successfully', createJob);
  } catch(err) {
    console.log(err);
    return res.status(400).json({status: 'FAILURE', error: err});
  }
  return res.status(200).json({status: 'SUCCESS', msg: 'Job has been added'});
});

router.get('/all', async (req, res) => {
  let allJobs;
  try {
    allJobs = await jobs.find();
  } catch(err) {
    console.log(err);
    return res.status(400).json({status: 'FAILURE', error: err});
  }
  return res.status(200).json({status: 'SUCCESS', jobs: allJobs});
});

module.exports = router;