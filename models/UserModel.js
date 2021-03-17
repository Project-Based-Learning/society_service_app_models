const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema();

const USER = new Schema({
    userId: {
        type: String,
        get: v => 'USR' + v,
        get: v => 'USR' + v,
    },
    identityId: {
        type: Schema.Types.ObjectId,
        ref: 'identity_model'
    },
    userEmail: {
        type: String,
        default: ''
    },
    userPassword: {
        type: String,
        default: ''
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

module.exports = mongoose.model('user_model', USER)