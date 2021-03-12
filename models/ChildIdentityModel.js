const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const CHILD_IDENTITY = new Schema({
    filed_by: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    identity_group_id: {
        type: Schema.Types.ObjectId,
        ref: 'identity_group_model'
    },
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('child_identity_model', CHILD_IDENTITY)