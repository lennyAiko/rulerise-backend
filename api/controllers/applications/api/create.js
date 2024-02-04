module.exports = {
  friendlyName: 'Create',

  description: 'Create api.',

  inputs: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
    },
    email: {
      type: 'string',
      isEmail: true,
    },
    location: {
      type: 'string',
    },
    experience: {
      type: 'string',
    },
    educationalBackground: {
      type: 'string',
    },
    reference: {
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
      firstName,
      lastName,
      phoneNumber,
      email,
      location,
      experience,
      educationalBackground,
      reference,
    },
    exits
  ) {
    // @ts-ignore
    const application = await Application.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      location,
      experience,
      educationalBackground,
      reference,
    }).fetch()

    if (!application) {
      return exits.error({
        status: 400,
        message: 'Failed to create an application.',
      })
    }
    // All done.
    return exits.success({
      status: 200,
      message: 'Successfully created an application.',
    })
  },
}
