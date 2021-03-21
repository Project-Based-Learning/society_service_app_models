const mongoose = require('mongoose');
const {Schema} = mongoose;

const SUBMISSION = new Schema({
    id: String,
    applicantId: String,
    departmentId: String,
    submissionRequirements: {
        birthCertificate: String,
        sptjm: String,
        marriageCertificate: String,
        husbandIdentityId: String,
        wifeIdentityId: String,
        identityGroupId: String,
        witnessIdentityId: [String],
        powerOfAttorney: String,
        limitedStayPermitId: String,
        passport: {
            id: String,
            document: String
        }
    },
    submissionProgress: Number,
    submissionStatus: Number,
    note: String,
    dateModified: {
        type: Date, 
        default: Date.now()
    },
    dateCreated: {
        type: Date, 
        default: Date.now()
    },
})

module.exports = mongoose.model('doc_submission_deedofbirth', SUBMISSION)