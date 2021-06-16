const mongoose = require('mongoose');
const {Schema} = mongoose;

const IDENTITY = new Schema({
    id: {
        type: String,
        default: ""
    },
    name: {
        firstName: {
            type: String,
            default: ""
        },
        middleName: {
            type: String,
            default: ""
        },
        lastName: {
            type: String,
            default: ""
        },
    },
    sex: Number,
    nationality: {
            type: String,
            default: ""
        },
    address: {
            type: String,
            default: ""
        },
    addressDetail: {
        addressProvince: Number,
        addressCity: Number,
        addressSubDistrict: Number,
        addressKelurahan: Number,
        addressVillage: Number,
        addressRW: Number,
        addressRT: Number,
    },
    profileImage: {
        type: String,
        default: ""
    },
    fingerPrint: {
        type: String,
        default: ""
    },
    signature: {
        type: String,
        default: ""
    },
    bloodType: {
        type: String,
        default: ""
    },
    maritalStatus: {
        type: Boolean,
        default: false
    },
    profession: {
        type: String,
        default: ""
    },
    contacts: {
        phone: {
            type: String,
            default: ""
        },
        mobile: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: ""
        },
    },
    linkedData: {
        deedOfBirthId: {
            type: String,
            default: ""
        },
        childidentityId: {
            type: String,
            default: ""
        },
        identityGroupId: {
            type: String,
            default: ""
        },
        driveLicenseId: [
            {
                id: {
                    type: String,
                    default: ""
                },
            }
        ],
        passportId: [
            {
                id: {
                    type: String,
                    default: ""
                },
            }
        ]
    },
    identityStatus: {
        type: Number,
        default: 1
    },
    documents: [
        {
            id: {
                type: String,
                default: ""
            },
        }
    ],
    submissionId: {
        type: String,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    departmentApproverid: {
        type: String,
        default: ""
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

module.exports = mongoose.model('doc_identity', IDENTITY);
