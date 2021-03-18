const mongoose = require('mongoose');
const {Schema} = mongoose;

const DRIVE_LICENSE_TYPE = new Schema({
    id: String,
    driveLicenseName: String,
    driveLicenseDescription: String,
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('drive_license_type_model', DRIVE_LICENSE_TYPE)