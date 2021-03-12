const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const IDENTITY = new Schema({
    child_identity_id: {
        type: Schema.Types.ObjectId,
        ref: 'child_identity_model'
    },
    firstName: {type: String, default: ''},
    middleName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('identity_model', IDENTITY);
