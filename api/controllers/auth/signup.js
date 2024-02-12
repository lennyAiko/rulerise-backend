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
      responseType: 'ok',
    },
    badCombo: {
      responseType: 'badRequest',
    },
  },

  fn: async function ({ fullName, email, password }, exits) {
    console.log(fullName)
    const user = await User.create({ fullName, email, password }).fetch()

    if (!user) {
      return exits.badCombo('Could not create user')
    }

    // All done.
    return '/'
  },
}
