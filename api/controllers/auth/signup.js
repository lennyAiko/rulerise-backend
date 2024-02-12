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

  fn: async function ({ fullName, email, password }, exits) {
    await User.create({ fullName, email, password })

    // All done.
    return '/category'
  },
}
