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

module.exports = mongoose.model('doc_submission_identity', SUBMISSION)