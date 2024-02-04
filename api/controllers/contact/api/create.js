module.exports = {
  friendlyName: 'Create',

  description: 'Create api.',

  inputs: {
    fullName: {
      type: 'string',
      columnName: 'full_name',
    },

    email: {
      type: 'string',
      isEmail: true,
    },

    request: {
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

  fn: async function ({ fullName, email, request }, exits) {
    // @ts-ignore
    const details = await Contact.create({
      fullName,
      email,
      request,
    }).fetch()

    if (!details) {
      return exits.error({
        status: 400,
        message: 'Failed to create a contact application.',
      })
    }
    // All done.
    return exits.success({
      status: 200,
      message: 'Successfully created a contact application.',
    })
  },
}
