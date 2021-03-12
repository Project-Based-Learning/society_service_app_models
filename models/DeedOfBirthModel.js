const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const DEED_OF_BIRTH = new Schema({
    filed_by: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    dateModified: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('deedofbirth_model', DEED_OF_BIRTH)