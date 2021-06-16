const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const USER = new Schema({
    id: {
        type: String,
        default: ""
    },
    identityId: {
        type: Schema.Types.ObjectId,
        ref: 'doc_identity'
    },
    userEmail: {
        type: String,
        default: ""
    },
    userPassword: {
        type: String,
        set: generateHash
    },
    userAccountStatus: {
        type: Number,
        default: 1
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
    dateModified: [{
        date: {
            type: Date, 
            default: Date.now()
        },
        modifierId: {
            type: String,
            default: ""
        },
        details: {
            type: String,
            default: "-"
        }
    }],
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