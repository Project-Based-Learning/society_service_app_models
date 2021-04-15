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
    submissionRequirements: {
        birthCertificate: String,
        sptjm: String,
        marriageCertificate: String,
        husbandidentityId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        },
        wifeidentityId: {
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

module.exports = mongoose.model('doc_submission_deedofbirth', SUBMISSION)