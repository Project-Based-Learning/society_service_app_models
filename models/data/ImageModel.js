const mongoose = require('mongoose');
const {Schema} = mongoose;

const IMAGE = new Schema({
    id: String,
    identityId: String,
    submissionId: String,
    fileName: String,
    ext: String,
    imageDescription: String,
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_image', IMAGE)