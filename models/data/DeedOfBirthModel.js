const mongoose = require('mongoose');
const {Schema} = mongoose;

const DEED_OF_BIRTH = new Schema({
    id: {
        type: String,
        default: ""
    },
    applicantId: {
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
    sex: {
        type: Number,
        default: 0
    },
    birthDate: {
        type: Date,
        default: ""
    },
    birthCountry: {
        type: String,
        default: ""
    },
    birthProvince: {
        type: String,
        default: ""
    },
    birthCity: {
        type: String,
        default: ""
    },
    sequenceOfChildren: Number,
    motherIdentityId: {
        type: String,
        default: ""
    },
    departmentApproverId: {
        type: String,
        default: ""
    },
    submissionId: {
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
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_deedofbirth', DEED_OF_BIRTH)