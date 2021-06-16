const mongoose = require('mongoose');
const {Schema} = mongoose;

const IDENTITY_GROUP = new Schema({
    id: {
        type: String,
        default: ""
    },
    headOfGroupId: {
        type: String,
        default: ""
    },
    members: [
        {
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
            identityId: {
                type: String,
                default: ""
            },
            sex: Number,
            deedOfBirtid: {
                type: String,
                default: ""
            },
            religion: {
                type: String,
                default: ""
            },
            lastEducation: {
                type: String,
                default: ""
            },
            profession: {
                type: String,
                default: ""
            },
            bloodType: {
                type: String,
                default: ""
            },
            maritalStatus: {
                type: Number,
                default: 1
            },
            memberStatus: {
                type: Number,
                default: 1
            },
            nationality: {
                type: String,
                default: ""
            },
        }
    ],
    departmentApproverId: {
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

module.exports = mongoose.model('doc_identity_group', IDENTITY_GROUP)