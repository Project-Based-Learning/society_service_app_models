const mongoose = require('mongoose');
const {Schema} = mongoose;

const DOCUMENT = new Schema({
    uploaderid: {
        type: String,
        default: ""
    },
    submissionid: {
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