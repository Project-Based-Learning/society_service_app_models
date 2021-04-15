const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    applicantId: {
        id: String,
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity'
        }
    },
    departmentId: String,
    submissionRequirements: {
        coveringLetter: String,
        identityId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        },
        identityGroupId: String,
    },
    submissionProgress: Number,
    submissionStatus: Number,
    note: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_submission_identity_group', SUBMISSION)