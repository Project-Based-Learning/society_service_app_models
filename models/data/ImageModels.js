const mongoose = require('mongoose');
const {Schema} = mongoose;

const IMAGE = new Schema({
    id: String,
    identityId: String,
    link: String,
    ext: String,
    imageDescription: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_image', IMAGE)