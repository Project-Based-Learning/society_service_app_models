const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    departmentId: String,
    submissionRequirements: {
        birthCertificate: String,
        sptjm: String,
        marriageCertificate: String,
        husbandIdentityId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        },
        wifeIdentityId: {
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
            }
        },
        witnessIdentityId: [{
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        }],
        powerOfAttorney: String,
        limitedStayPermitId: String,
        passport: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_passport'
            },
            document: String
        }
    },
    submissionProgress: Number,
    submissionProgressDetail: [
        {
            progressName: String,
            date: Date
        },
    ],
    submissionStatus: Number,
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

module.exports = mongoose.model('doc_submission_deedofbirth', SUBMISSION)