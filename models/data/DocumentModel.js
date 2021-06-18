const mongoose = require('mongoose');
const {Schema} = mongoose;

const DOCUMENT = new Schema({
    uploaderId: {
        type: String,
        default: ""
    },
    submissionId: {
        type: String,
        default: ""
    },
    fileName: {
        type: String,
        default: ""
    },
    ext: {
        type: String,
        default: ""
    },
    documentDescription: {
        type: String,
        default: ""
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_document', DOCUMENT)