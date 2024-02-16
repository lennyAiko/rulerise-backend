module.exports = {
  friendlyName: 'Signin',

  description: 'Signin auth.',

  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      required: true,
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

  fn: async function (inputs, exits) {
    var user = await User.findOne({
      email: inputs.email.toLowerCase(),
    })

    if (!user) {
      throw 'badCombo'
    }

    await sails.helpers.passwords
      .checkPassword(inputs.password, user.password)
      .intercept('incorrect', 'badCombo')

    this.req.session.userId = user.id
    this.req.session.user = {
      fullName: user.fullName,
      email: user.email,
      status: user.status,
    }
    sails.inertia.share('loggedInUser', user)
    console.log(this.req.session.user)
    // All done.
    return '/'
  },
}
