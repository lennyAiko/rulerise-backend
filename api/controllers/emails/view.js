module.exports = {
  friendlyName: 'View',

  description: 'View emails.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const emails = await Emails.find({})

    // All done.
    return sails.inertia.render('emails/index', { emails })
  },
}
