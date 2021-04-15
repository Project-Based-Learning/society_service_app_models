const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

const DEPARTMENT = new Schema({
    id: String,
    departmentName: String,
    departmentLevel: Number,
    departmentAddress: String,
    departmentProvinceCode: Number,
    departmentCityCode: Number,
    departmentSubDistrictCode: Number,
    departmentKelurahanCode: Number,
    departmentVillageCode: Number,
    departmentIcon: String,
    departmentAdminUsers: [{
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_identity'
        }
    }],
    submissionTypeCode: [{
        id: {
            type: String
        },
        data: {
            type: Schema.Types.ObjectId,
            ref: 'doc_submission_type'
        }
    }],
    departmentStatus: Number,
    creator_id: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})


module.exports = mongoose.model('doc_department', DEPARTMENT)