const mongoose = require('mongoose');
const {Schema} = mongoose;

const DRIVE_LICENSE = new Schema({
    id: String,
    identityId: String,
    driveLicenseType: String,
    driveLicenseStatus: Number,
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

module.exports = mongoose.model('drive_license_model', DRIVE_LICENSE)