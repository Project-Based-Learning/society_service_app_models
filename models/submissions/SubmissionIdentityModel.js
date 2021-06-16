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
    profileData: {
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
        birthCountry: {
            type: String,
            default: ""
        },
        birthCity: {
            type: String,
            default: ""
        },
        birthDate: {
            type: Date,
            default: ""
        },
        sex: Number,
        address: {
            type: String,
            default: ""
        },
        addressDetail: {
            addressProvince: Number,
            addressCity: Number,
            addressSubDistrict: Number,
            addressKelurahan: Number,
            addressVillage: Number,
            addressRW: Number,
            addressRT: Number,
        },
        religion: {
            type: String,
            default: ""
        },
        profession: {
            type: String,
            default: ""
        },
        nationality: {
            type: String,
            default: ""
        },
    },
    submissionRequirements: {
        coveringLetter: {
            type: String,
            default: ""
        },
        identityGroupId: {
            type: String,
            default: ""
        },
        deedOfBirthId: {
            type: String,
            default: ""
        },
        limitedStayPermitid: {
            type: String,
            default: ""
        },
        imageProfile: {
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

module.exports = mongoose.model('doc_submission_identity', SUBMISSION)