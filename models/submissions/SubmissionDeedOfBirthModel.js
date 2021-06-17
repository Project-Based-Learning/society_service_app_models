const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: {
        type: String,
        default: ""
    },
    departmentId: {
        type: String,
        default: ""
    },
    name: {
        firstName: {
            type: String,
            default: ""
        },
        middleName: {
            type: String,
            default: ""
        },
        lastName: {
            type: String,
            default: ""
        },
    },
    sex: Number,
    birthDate: {
        type: Date,
        default: ""
    },
    birthCountry: Number,
    birthProvince: Number,
    birthCity: Number,
    sequenceOfChildren: Number,
    submissionRequirements: {
        birthCertificate: {
            type: String,
            default: ""
        },
        sptjm: {
            type: String,
            default: ""
        },
        marriageCertificate: {
            type: String,
            default: ""
        },
        husbandIdentityId: {
            type: String,
            default: ""
        },
        wifeIdentityId: {
            type: String,
            default: ""
        },
        identityGroupId: {
            type: String,
            default: ""
        },
        witnessIdentityId: {
            type: String,
            default: ""
        },
        powerOfAttorney: {
            type: String,
            default: ""
        },
        limitedStayPermitid: {
            type: String,
            default: ""
        },
        passport: {
            id: {
                type: String,
                default: ""
            },
            document: {
                type: String,
                default: ""
            },
        }
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

module.exports = mongoose.model('doc_submission_deedofbirth', SUBMISSION)