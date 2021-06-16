const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: {
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
    driveLicenseType: Number,
    submissionRequirements: {
        identityId: {
            type: String,
            default: ""
        },
        healthCertificate: {
            type: String,
            default: ""
        },
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

module.exports = mongoose.model('doc_submission_drive_license', SUBMISSION)