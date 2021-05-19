const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    departmentId: String,
    profileData: {
        name: {
            firstName: String,
            middleName: String,
            lastName: String,
        },
        birthCountry: String,
        birthCity: String,
        birthDate: Date,
        sex: Number,
        address: String,
        addressDetail: {
            addressProvince: Number,
            addressCity: Number,
            addressSubDistrict: Number,
            addressKelurahan: Number,
            addressVillage: Number,
            addressRW: Number,
            addressRT: Number,
        },
        religion: String,
        profession: String,
        nationality: String,
    },
    submissionRequirements: {
        coveringLetter: String,
        identityGroupId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity_group'
            }
        },
        deedOfBirthId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_deedofbirth'
            }
        },
        limitedStayPermitId: String,
        imageProfile: String
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
                ref: 'doc_child_identity'
            }
        },
    },
})

module.exports = mongoose.model('doc_submission_identity', SUBMISSION)