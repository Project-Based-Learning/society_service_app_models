const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const IDENTITY = new Schema({
    firstName: {
        type: String, 
        default: ''
    },
    middleName: {
        type: String, 
        default: ''
    },
    lastName: {
        type: String, 
        default: ''
    },
    address: {
        type: String, 
        default: ''
    },
    addressProvince: {
        type: Number
    },
    addressCity: {
        type: Number
    },
    addressSubDistrict: {
        type: Number
    },
    addressKelurahan: {
        type: Number
    },
    addressVillage: {
        type: Number
    },
    addressRW: {
        type: Number
    },
    addressRT: {
        type: Number
    },
    profileImage: {
        type: String,
        default: ''
    },
    fingerPrint: {
        type: String,
        default: ''
    },
    bloodType: {
        type: String,
        default: ''
    },
    maritalStatus: {
        type: Number
    },
    profession: {
        type: String,
        default: ''
    },
    deedOfBirthId: {
        type: Schema.Types.ObjectId,
        ref: 'deedofbirth_model'
    },
    childIdentityId: {
        type: Schema.Types.ObjectId,
        ref: 'child_identity_model'
    },
    identityGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'identity_group_model'
    },
    driveLicenseId: {
        type: Schema.Types.ObjectId,
        ref: 'drive_license_model'
    },
    identityDocuments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'document_model'
        }
    ],
    approvedById: {
        type: Schema.Types.ObjectId,
        ref: 'department_model'
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

module.exports = mongoose.model('identity_model', IDENTITY);
