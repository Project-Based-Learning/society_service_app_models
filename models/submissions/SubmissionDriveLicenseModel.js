const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    departmentId: String,
    isNewSubmission: {
        type: Boolean,
        default: true
    },
    driveLicenseType: Number,
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
    submissionProgressDetail: [
        {
            progressName: String,
            date: Date
        },
    ],
    submissionStatus: Number,
    submissionIsPaid: {
        type: Boolean,
        default: false
    },
    note: String,
    dateModified: [{
        date: {
            type: Date, 
            default: Date.now()
        },
        modifierId: {
            id: {
                type: String
            },
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_admins'
            }
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
            id: {
                type: String
            },
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        },
    },
})

module.exports = mongoose.model('doc_submission_drive_license', SUBMISSION)