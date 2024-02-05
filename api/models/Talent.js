/**
 * Talent.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    companyName: {
      type: 'string',
      columnName: 'company_name',
    },
    companyLocation: {
      type: 'string',
      columnName: 'company_location',
    },
    companyEmail: {
      type: 'string',
      columnName: 'company_email',
      isEmail: true,
    },
    companyWebsite: {
      type: 'string',
      columnName: 'company_website',
    },
    employmentType: {
      type: 'string',
      columnName: 'employment_type',
      isIn: ['Remote', 'Full-time', 'Contract', 'Hybrid', 'Internship'],
    },
    talentToHire: {
      type: 'string',
      columnName: 'talent_to_hire',
      isIn: [
        'Backend Engineer',
        'Frontend Engineer',
        'Business Analyst',
        'Agile Scrum Master',
        'Agile Product Owner',
        'UI/UX Designer',
      ],
    },
    talentToHireDescription: {
      type: 'ref',
    },
    comment: {
      type: 'string',
    },
  },
}
