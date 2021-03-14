const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema();

const DEPARTMENT = new Schema({
    department_name: {
        type: String,
        default: ''
    },
    department_level: {
        type: Number,
    },
    department_address: {
        type: String,
        default: ''
    },
    department_province_code: {
        type: Number
    },
    department_city_code: {
        type: Number
    },
    department_sub_district_code: {
        type: Number
    },
    department_kelurahan_code: {
        type: Number
    },
    department_village_code: {
        type: Number
    },
    department_admin_users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'admin_model'
        }
    ],
    submission_type_code: {
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