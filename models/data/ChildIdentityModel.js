const mongoose = require('mongoose');
const {Schema} = mongoose;

const CHILD_IDENTITY = new Schema({
    id: String,
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    profileImage: {
        type: Schema.Types.ObjectId,
        ref: 'doc_image'
    },
    applicantId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity'
        }
    },
    identityGroupId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity_group'
        }
    },
    deedOfBirthId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_deedof_birth'
        }
    },
    childIdentityStatus: Number,
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
            ref: 'doc_submission_child_identity'
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

module.exports = mongoose.model('doc_child_identity', CHILD_IDENTITY)