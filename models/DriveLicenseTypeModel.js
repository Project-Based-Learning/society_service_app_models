const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const DRIVE_LICENSE_TYPE = new Schema({
    driveLicenseId: {
        type: Number
    },
    driveLicenseName: {
        type: String,
        default: ''
    },
    driveLicenseDescription: {
        type: String,
        default: ''
    },
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('drive_license_type_model', DRIVE_LICENSE_TYPE)