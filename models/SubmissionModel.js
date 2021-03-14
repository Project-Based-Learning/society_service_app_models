const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const SUBMISSION = new Schema({
    identityId: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    submissionTypeCode: {
        type: Number
    },
    submissionStatus: {
        type: Number,
        default: 0
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

module.exports = mongoose.model('submission_model', SUBMISSION)