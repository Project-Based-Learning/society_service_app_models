const mongoose = require('mongoose');
const {Schema} = mongoose;

const DOCUMENT = new Schema({
    identityId: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    submissionTypeId: {
        type: Schema.Types.ObjectId,
        ref: 'submission_model'
    },
    link: {
        type: String,
        default: ''
    },
    documentDescription: {
        type: String,
        default: ''
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

module.exports = mongoose.model('document_model', DOCUMENT)