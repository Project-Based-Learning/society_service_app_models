const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION_TYPE = new Schema({
    submissionName: String,
    submissionCode: Number,
    submissionDescription: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_submission_type', SUBMISSION_TYPE)