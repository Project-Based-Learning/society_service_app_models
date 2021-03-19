const mongoose = require('mongoose');
const {Schema} = mongoose;

const DEED_OF_BIRTH = new Schema({
    id: String,
    filedBy: String,
    departmentId: String,
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    birthDate: Date,
    birthCountry: String,
    birthProvince: String,
    birthCity: String,
    sequenceOfChildren: Number,
    motherIdentityId: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_deedofbirth', DEED_OF_BIRTH)