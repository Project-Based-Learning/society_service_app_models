const mongoose = require('mongoose');
const {Schema} = mongoose;

const IMAGE = new Schema({
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
    imageDescription: {
        type: String,
        default: ""
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_image', IMAGE)