const mongoose = require('mongoose');
const {Schema} = mongoose;

const LOG = new Schema({
    id: {
        type: String,
        default: ""
    },
    ip: String,
    country: String,
    HTTPRequestType: String,
    EndpointAccess: String,
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_logs', LOG)