const mongoose = require('mongoose');
const {Schema} = mongoose;

const DOCUMENT = new Schema({
    id: String,
    identityId: String,
    submissionId: String,
    fileName: String,
    ext: String,
    documentDescription: String,
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_document', DOCUMENT)