const mongoose = require('mongoose');
const {Schema} = mongoose;

const LOG = new Schema({
    id: String,
    ip: String,
    country: String,
    HTTPRequestType: String,
    EndpointAccess: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_logs', LOG)