const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const IDENTITY_GROUP = new Schema({
    identity_id: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('identity_group_model', IDENTITY_GROUP)