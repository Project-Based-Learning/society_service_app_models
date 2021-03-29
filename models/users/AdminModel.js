const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const ADMIN = new Schema({
    id: String,
    identityId: String,
    adminEmail: String,
    adminUsername: String,
    adminPassword: {
        type: String,
        set: generateHash
    },
    adminGrantLevel: {
        type: Number,
        default: 1
    },
    adminGrantType: {
        type: Number,
        default: 1
    },
    adminAccountStatus: {
        type: Number,
        default: 1
    },
    adminDepartmentId: String,
    creatorId: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})


// generating a hash
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model('doc_admins', ADMIN)