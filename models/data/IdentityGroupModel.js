const mongoose = require('mongoose');
const {Schema} = mongoose;

const IDENTITY_GROUP = new Schema({
    id: String,
    headofGroupId: String,
    member: [
        {
            name: {
                firstName: String,
                middleName: String,
                lastName: String,
            },
            identityId: String,
            sex: Number,
            deedOfBirtId: String,
            religion: String,
            lastEducation: String,
            profession: String,
            bloodType: String,
            maritalStatus: String,
            memberStatus: String,
            nationality: String,
        }
    ],
    departmentApproverId: String,
    dateModified: {
        type: Date,
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_identity_group', IDENTITY_GROUP)