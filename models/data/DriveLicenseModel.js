const mongoose = require('mongoose');
const {Schema} = mongoose;

const DRIVE_LICENSE = new Schema({
    id: String,
    identityId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity'
        }
    },
    driveLicenseType: String,
    driveLicenseStatus: Number,
    profileImage: {
        type: Schema.Types.ObjectId,
        ref: 'doc_image'
    },
    validUntil: Date,
    departmentApproverId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_department'
        }
    },
    submissionId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_submission_drive_license'
        }
    },
    dateModified: [{
        date: {
            type: Date, 
            default: Date.now()
        },
        modifierId: {
            id: {
                type: String
            },
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_admins'
            }
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