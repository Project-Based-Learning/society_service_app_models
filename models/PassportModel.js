const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const PASSPORT = new Schema({
    identityId: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('passport_model', PASSPORT)