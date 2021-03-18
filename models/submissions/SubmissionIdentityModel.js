const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    identityId: String,
    departmentId: String,
    submissionTypeCode: String,
    submissionRequirements: {
        identityId: String,
        identityGroupId: String,
    },
    submissionProgress: Number,
    submissionStatus: Boolean,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_submission_identity', SUBMISSION)