const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const ADMIN = new Schema({
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
            id: {
                type: String
            },
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_admins'
            }
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
            id: {
                type: String
            },
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_admins'
            }
        }
    },
})


// generating a hash
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model('doc_admins', ADMIN)