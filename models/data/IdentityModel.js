const mongoose = require('mongoose');
const {Schema} = mongoose;

const IDENTITY = new Schema({
    id: String,
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    sex: Number,
    nationality: String,
    address: String,
    addressDetail: {
        addressProvince: Number,
        addressCity: Number,
        addressSubDistrict: Number,
        addressKelurahan: Number,
        addressVillage: Number,
        addressRW: Number,
        addressRT: Number,
    },
    profileImage: String,
    fingerPrint: String,
    signature: String,
    bloodType: String,
    maritalStatus: {
        type: Boolean,
        default: false
    },
    profession: String,
    contacts: {
        phone: String,
        mobile: String,
        email: String
    },
    linkedData: {
        deedOfBirthId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_deedofbirth'
            }
        },
        childidentityId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity'
            }
        },
        identityGroupId: {
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_identity_group'
            }
        },
        driveLicenseId: [{
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_drive_license'
            }
        }],
        passportId: [{
            id: String,
            data: {
                type: Schema.Types.ObjectId,
                ref: 'doc_passport'
            }
        }]
    },
    identityStatus: Number,
    documents: [
        String
    ],
    submissionId: {
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_submission_identity'
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    departmentApproverId: String,
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
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_identity', IDENTITY);
