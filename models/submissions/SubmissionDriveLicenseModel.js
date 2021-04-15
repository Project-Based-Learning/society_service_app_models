const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    applicantId: {
        id: String,
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity'
        }
    },
    departmentId: String,
    isNewSubmission: {
        type: Boolean,
        default: true
    },
    driveLicenseType: String,
    submissionRequirements: {
        identityId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        },
        healthCertificate: String,
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

module.exports = mongoose.model('doc_submission_drive_license', SUBMISSION)