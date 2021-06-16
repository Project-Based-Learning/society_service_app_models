const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const DEPARTMENT = new Schema({
    id: {
        type: String,
        default: ""
    },
    departmentName: {
        type: String,
        default: ""
    },
    departmentLevel: Number,
    departmentAddress: {
        type: String,
        default: ""
    },
    departmentProvinceCode: Number,
    departmentCityCode: Number,
    departmentSubDistrictCode: Number,
    departmentKelurahanCode: Number,
    departmentVillageCode: Number,
    departmentIcon: {
        type: String,
        default: ""
    },
    submissionTypeCode: [{
        type: Schema.Types.ObjectId,
        ref: 'doc_submission_type'
    }],
    departmentStatus: Number,
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
        },
    },
})


module.exports = mongoose.model('doc_department', DEPARTMENT)