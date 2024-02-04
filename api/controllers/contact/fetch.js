module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch contact.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // @ts-ignore
    const contacts = await Contact.find({})

    // All done.
    return sails.inertia.render('contact/index', { contacts })
  },
}
