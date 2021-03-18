const mongoose = require('mongoose');
const {Schema} = mongoose;

const PASSPORT = new Schema({
    id: String,
    identityId: String,
    passportType: Number,
    passportStatus: Number,
    validUntil: Date,
    departmentApproverId: String,
    dateModified: {
        type: Date,
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_passport', PASSPORT)