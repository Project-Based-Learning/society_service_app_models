const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const ADMIN = new Schema({
    id: {
        type: String,
        default: ""
    },
    identityId: {
        type: Schema.Types.ObjectId,
        ref: 'doc_identity'
    },
    adminEmail: {
        type: String,
        default: ""
    },
    adminUsername: {
        type: String,
        default: ""
    },
    adminProfile: {
        type: String,
        default: ""
    },
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
    adminDepartmentId: {
        type: String,
        default: ""
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
        date: {
            type: Date, 
            default: Date.now()
        },
        creatorId: {
            type: String,
            default: ""
        }
    },
})


// generating a hash
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model('doc_admins', ADMIN)