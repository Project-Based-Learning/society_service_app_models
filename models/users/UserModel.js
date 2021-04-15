const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const USER = new Schema({
    id: String,
    identityId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity'
        }
    },
    userEmail: String,
    userPassword: {
        type: String,
        set: generateHash
    },
    options: {
        notifications: {
            isEmail: {
                type: Boolean,
                default: true,
            },
            isWhatsApp: {
                type: Boolean,
                default: true
            }
        }
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
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model('doc_users', USER)