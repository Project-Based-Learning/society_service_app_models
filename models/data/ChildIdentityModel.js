const mongoose = require('mongoose');
const {Schema} = mongoose;

const CHILD_IDENTITY = new Schema({
    firstName: {
        type: String, 
        default: ''
    },
    middleName: {
        type: String, 
        default: ''
    },
    lastName: {
        type: String, 
        default: ''
    },
    profileImage: {
        type: String,
        default: ''
    },
    filedBy: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    identityGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'identity_group_model'
    },
    deedOfBirthId: {
        type: Schema.Types.ObjectId,
        ref: 'deedofbirth_model'
    },
    approvedById: {
        type: Schema.Types.ObjectId,
        ref: 'department_model'
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

module.exports = mongoose.model('child_identity_model', CHILD_IDENTITY)