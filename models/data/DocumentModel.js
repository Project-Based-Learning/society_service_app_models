const mongoose = require('mongoose');
const {Schema} = mongoose;

const DOCUMENT = new Schema({
    id: String,
    identityId: String,
    submissionId: String,
    link: String,
    ext: String,
    documentDescription: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_document', DOCUMENT)