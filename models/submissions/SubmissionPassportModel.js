const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    applicantId: {
        id: {
            type: String
        },
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
    passportType: Number,
    submissionRequirements: {
        identityId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        },
        identityGroupId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity_group'
            },
            document: String
        },
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