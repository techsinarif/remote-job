const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobDescription: {type: String, required: true}
}, {collection: 'jobs'});

const model = mongoose.model('jobs', jobSchema);

module.exports = model;