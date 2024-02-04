module.exports = {
  friendlyName: 'View',

  description: 'View contact.',

  inputs: {},

  exits: {
    success: {
      description: 'All done.',
    },
    notFound: {
      description: 'No application found with the specified ID.',
      responseType: 'notFound',
    },
  },

  fn: async function (inputs, exits) {
    // @ts-ignore
    const contact = await Contact.findOne({ id: this.req.params.id })

    if (!contact) {
      return exits.notFound({ message: "Couldn't find contact" })
    }
    // All done.
    return sails.inertia.render('contact/view', { contact })
  },
}
