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
    fileName: String,
    ext: String,
    documentDescription: String,
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_document', DOCUMENT)