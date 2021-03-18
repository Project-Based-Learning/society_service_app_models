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
    bloodType: String,
    maritalStatus: Boolean,
    profession: String,
    contacts: {
        phone: String,
        mobile: String,
        email: String
    },
    linkedData: {
        deedOfBirthId: String,
        childIdentityId: String,
        identityGroupId: String,
        driveLicenseId: String,
    },
    isentityStatus: Number,
    documents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'doc_document'
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

module.exports = mongoose.model('doc_identity', IDENTITY);
