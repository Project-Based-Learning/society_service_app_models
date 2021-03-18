const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const DEPARTMENT = new Schema({
    departmentName: {
        type: String,
        default: ''
    },
    departmentLevel: {
        type: Number,
    },
    departmentAddress: {
        type: String,
        default: ''
    },
    departmentProvinceCode: {
        type: Number
    },
    departmentCityCode: {
        type: Number
    },
    departmentSubDistrictCode: {
        type: Number
    },
    departmentKelurahanCode: {
        type: Number
    },
    departmentVillageCode: {
        type: Number
    },
    departmentAdminUsers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'admin_model'
        }
    ],
    submissionTypeCode: {
        type: Number
    },
    creator_id: {
        type: Schema.Types.ObjectId,
        ref: 'admin_model'
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


module.exports = mongoose.model('department_model', DEPARTMENT)