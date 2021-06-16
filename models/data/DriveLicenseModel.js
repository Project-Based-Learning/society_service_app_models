const mongoose = require('mongoose');
const {Schema} = mongoose;

const DRIVE_LICENSE = new Schema({
    id: {
        type: String,
        default: ""
    },
    identityId: {
        type: String,
        default: ""
    },
    driveLicenseType: Number,
    driveLicenseStatus: {
        type: Number,
        default: 1
    },
    profileImage: {
        type: String,
        default: ""
    },
    validUntil: {
        type: Date,
        default: ""
    },
    departmentApproverid: {
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

module.exports = mongoose.model('doc_drive_license', DRIVE_LICENSE)