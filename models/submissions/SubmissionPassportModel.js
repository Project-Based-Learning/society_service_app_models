const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: {
        type: String,
        default: ""
    },
    applicantId: {
        type: String,
        default: ""
    },
    departmentid: {
        type: String,
        default: ""
    },
    isNewSubmission: {
        type: Boolean,
        default: true
    },
    passportType: Number,
    submissionRequirements: {
        identityId: {
            type: String,
            default: ""
        },
        identityGroupId: {
            id: {
                type: String,
                default: ""
            },
            document: String
        },
        marriageCertificate: String
    },
    submissionProgress: {
        type: Number,
        default: 0
    },
    submissionProgressDetail: [
        {
            progressName: {
                type: String,
                default: ""
            },
            date: {
                type: Date,
                default: ""
            }
        },
    ],
    submissionStatus: {
        type: Number,
        default: 1
    },
    note: {
        type: String,
        default: ""
    },
    dateModified: [{
        date: {
            type: Date, 
            default: Date.now()
        },
        modifierId: {
            type: String,
            default: ""
        },
        details: {
            type: String,
            default: "-"
        }
    }],
    dateCreated: {
        date: {
            type: Date, 
            default: Date.now()
        },
        applicantId: {
            type: String,
            default: ""
        },
    },
})

module.exports = mongoose.model('doc_submission_passport', SUBMISSION)