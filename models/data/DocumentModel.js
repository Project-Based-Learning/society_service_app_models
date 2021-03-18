const mongoose = require('mongoose');
const {Schema} = mongoose;

const DOCUMENT = new Schema({
    id: String,
    identityId: String,
    link: String,
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

module.exports = mongoose.model('document_model', DOCUMENT)