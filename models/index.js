// Importing ...
const USER = require('./users')
const SUBMISSION = require('./submissions')
const DATA = require('./data');
const LOG = require('./logs');

module.exports = {

    // USER
    AdminModel: USER.AdminModel,
    UserModel: USER.UserModel,

    // SUBMISSION
    SubmissionIdentityModel: SUBMISSION.SubmissionIdentityModel,
    SubmissionIdentityGroupModel: SUBMISSION.SubmissionIdentityGroupModel,
    SubmissionChildIdentityModel: SUBMISSION.SubmissionChildIdentityModel,
    SubmissionDeedOfBirthModel: SUBMISSION.SubmissionDeedOfBirthModel,
    SubmissionPassportModel: SUBMISSION.SubmissionPassportModel,
    SubmissionDriveLicenseModel: SUBMISSION.SubmissionDriveLicenseModel,
    SubmissionTypeModel: SUBMISSION.SubmissionTypeModel,

    // DATA
    IdentityModel: DATA.IdentityModel,
    IdentityGroupModel: DATA.IdentityGroupModel,
    ChildIdentityModel: DATA.ChildIdentityModel,
    DeedOfBirthModel: DATA.DeedOfBirthModel,
    PassportModel: DATA.PassportModel,
    DriveLicenseModel: DATA.DriveLicenseModel,
    DocumentModel: DATA.DocumentModel,
    ImageModel: DATA.ImageModel,
    DepartmentModel: DATA.DepartmentModel,

    // LOG
    LogModel: LOG.LogModel
}