const mongoose = require('mongoose');
const {Schema} = mongoose;

const DEED_OF_BIRTH = new Schema({
    filedBy: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    departmentId: {
        type: Schema.Types.ObjectId,
        ref: 'department_model'
    },
    firstName: {
        type: String,
        default: ''
    },
    middleName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    birthDate: {
        type: Date
    },
    birthCountry: {
        type: String,
        default: ''
    },
    birthProvince: {
        type: String,
        default: ''
    },
    birthCity: {
        type: String,
        default: ''
    },
    sequenceOfChildren: {
        type: Number
    },
    motherIdentityId: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('deedofbirth_model', DEED_OF_BIRTH)