module.exports = {
  friendlyName: 'Create',

  description: 'Create api.',

  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },
  },

  exits: {
    success: {
      responseType: 'ok',
    },
    error: {
      responseType: 'badRequest',
    },
  },

  fn: async function (inputs, exits) {
    const email = inputs.email.toLowerCase()

    const receivedEmail = await Emails.create({ email }).fetch()

    if (!receivedEmail) {
      return exits.error({
        status: 400,
        message: 'Failed to register email.',
      })
    }
    // All done.
    return exits.success({
      status: 200,
      message: 'Successfully registered an email.',
    })
  },
}
