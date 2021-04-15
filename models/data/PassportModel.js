const mongoose = require('mongoose');
const {Schema} = mongoose;

const PASSPORT = new Schema({
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
    passportType: Number,
    passportStatus: Number,
    profileImage: String,
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
            ref: 'doc_submission_passport'
        }
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

module.exports = mongoose.model('doc_passport', PASSPORT)