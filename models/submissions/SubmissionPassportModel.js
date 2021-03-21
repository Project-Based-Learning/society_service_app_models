const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    applicantId: String,
    departmentId: String,
    isNewSubmission: {
        type: Boolean,
        default: true
    },
    passportType: Number,
    submissionRequirements: {
        identityId: String,
        identityGroupId: String,
        marriageCertificate: String
    },
    submissionProgress: Number,
    submissionStatus: Number,
    note: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_submission_passport', SUBMISSION)