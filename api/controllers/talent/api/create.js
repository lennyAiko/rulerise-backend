module.exports = {
  friendlyName: 'Create',

  description: 'Create api.',

  inputs: {
    companyName: {
      type: 'string',
    },
    companyLocation: {
      type: 'string',
    },
    companyEmail: {
      type: 'string',
      isEmail: true,
    },
    companyWebsite: {
      type: 'string',
    },
    employmentType: {
      type: 'string',
      isIn: ['Remote', 'Full-time', 'Contract', 'Hybrid', 'Internship'],
    },
    talentToHire: {
      type: 'string',
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

  exits: {
    success: {
      description: 'Successfully created application.',
    },
    error: {
      responseType: 'badRequest',
      description: 'Failed to create application.',
    },
  },

  fn: async function (
    {
      companyName,
      companyLocation,
      companyEmail,
      companyWebsite,
      employmentType,
      talentToHire,
      talentToHireDescription,
      comment,
    },
    exits
  ) {
    // @ts-ignore
    const details = await Talent.create({
      companyName,
      companyLocation,
      companyEmail,
      companyWebsite,
      employmentType,
      talentToHire,
      talentToHireDescription,
      comment,
    }).fetch()

    if (!details) {
      return exits.error({
        status: 400,
        message: 'Failed to create a talent request.',
      })
    }
    // All done.
    return exits.success({
      status: 200,
      message: 'Successfully created a talent request.',
    })
  },
}
