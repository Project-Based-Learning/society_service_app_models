const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const SUBMISSION_TYPE = new Schema({
    submissionName: {
        type: String,
        default: ''
    },
    submissionCode: {
        type: Number
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

module.exports = mongoose.model('submission_model', SUBMISSION_TYPE)