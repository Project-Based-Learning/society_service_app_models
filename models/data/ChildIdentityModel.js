const mongoose = require('mongoose');
const {Schema} = mongoose;

const CHILD_IDENTITY = new Schema({
    id: String,
    departmentId: String,
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    profileImage: String,
    applicantId: String,
    identityGroupId: String,
    deedOfBirthId: String,
    childIdentityStatus: Number,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_child_identity', CHILD_IDENTITY)