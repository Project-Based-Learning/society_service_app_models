const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const IDENTITY = new Schema({
    firstName: {type: String, default: ''},
    middleName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('identity_model', IDENTITY);
