const mongoose = require('mongoose');
const {Schema} = mongoose;

const CHILD_IDENTITY = new Schema({
    id: String,
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    profileImage: String,
    filedBy: String,
    identityGroupId: String,
    deedOfBirthId: String,
    childIdentityStatus: Number,
    approvedById: String,
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