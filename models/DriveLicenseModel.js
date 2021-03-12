const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const DRIVE_LICENSE = new Schema({
    identity_id: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('drive_license_model', DRIVE_LICENSE)