const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema();

const ADMIN = new Schema({
    identity_id: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    admin_email: {
        type: String,
        default: ''
    },
    admin_username: {
        type: String,
        default: ''
    },
    admin_password: {
        type: String,
        default: ''
    },
    admin_grant_level: {
        type: Number,
        default: 1
    },
    admin_grant_type: {
        type: Number,
        default: 1
    },
    admin_account_status: {
        type: Number,
        default: 1
    },
    admin_department: {
        type: Schema.Types.ObjectId,
        ref: 'department_model'
    },
    creator_id: {
        type: Schema.Types.ObjectId,
        ref: 'admin_model'
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


// generating a hash
schema.methods.generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
  
// checking if password is valid
schema.methods.validPassword = password => {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('admin_model', ADMIN)