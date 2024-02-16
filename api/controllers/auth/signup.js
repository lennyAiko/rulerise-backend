module.exports = {
  friendlyName: 'Signup',

  description: 'Signup auth.',

  inputs: {
    fullName: {
      type: 'string',
      required: true,
    },

    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },

    password: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
    badCombo: {
      responseType: 'badRequest',
    },
  },

  fn: async function ({ fullName, email: userEmail, password: hash }, exits) {
    const email = userEmail.toLowerCase()

    const password = await sails.helpers.passwords.hashPassword(hash)

    const user = await User.create({ fullName, email, password }).fetch()

    if (!user) {
      return exits.badCombo({
        status: 400,
        message: 'Failed to create a user.',
      })
    }

    this.req.session.userEmail = user.email

    // All done.
    return exits.success('/')
  },
}
