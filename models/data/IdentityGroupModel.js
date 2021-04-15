const mongoose = require('mongoose');
const {Schema} = mongoose;

const IDENTITY_GROUP = new Schema({
    id: String,
    headOfGroupId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity'
        }
    },
    member: [
        {
            name: {
                firstName: String,
                middleName: String,
                lastName: String,
            },
            identityId: {
                id: {
                    type: String
                },
                data: {
                    type: Schema.Types.ObjectId,
                    ref: 'doc_identity'
                }
            },
            sex: Number,
            deedOfBirtId: String,
            religion: String,
            lastEducation: String,
            profession: String,
            bloodType: String,
            maritalStatus: String,
            memberStatus: String,
            nationality: String,
        }
    ],
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
            ref: 'doc_submission_identity_group'
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

module.exports = mongoose.model('doc_identity_group', IDENTITY_GROUP)