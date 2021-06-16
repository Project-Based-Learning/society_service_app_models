const mongoose = require('mongoose');
const {Schema} = mongoose;

const CHILD_IDENTITY = new Schema({
    id: {
        type: String,
        default: ""
    },
    name: {
        firstName: {
            type: String,
            default: ""
        },
        middleName: {
            type: String,
            default: ""
        },
        lastName: {
            type: String,
            default: ""
        },
    },
    profileImage: String,
    applicantId: {
        type: String,
        default: ""
    },
    identityGroupId: {
        type: String,
        default: ""
    },
    deedOfBirthId: {
        type: String,
        default: ""
    },
    childIdentityStatus: {
        type: Number,
        default: 1
    },
    departmentApproverId:  {
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

module.exports = mongoose.model('doc_child_identity', CHILD_IDENTITY)