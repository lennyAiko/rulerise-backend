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
      this.req.flash('error', 'User not found')
      exits.success('/signin')
    }

    try {
      await sails.helpers.passwords
        .checkPassword(inputs.password, user.password)
        // @ts-ignore
        .intercept('incorrect', 'badCombo')
    } catch (err) {
      this.req.flash('error', 'Incorrect password')
      exits.success('/signin')
    }

    this.req.session.userId = user.id
    this.req.session.me = {
      id: user.id,
      fullName: user.fullName,
      status: user.status,
    }

    this.req.flash('message', 'Login successful')

    sails.inertia.share('loggedInUser', user)
    // All done.
    return exits.success('/')
  },
}
