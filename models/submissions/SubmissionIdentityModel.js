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
        identityGroupId: String,
        deedOfBirthId: String,
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