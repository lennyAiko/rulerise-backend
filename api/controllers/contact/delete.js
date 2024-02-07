module.exports = {
  friendlyName: 'View',

  description: 'View contacts.',

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

    await Contact.destroyOne({ id: this.req.params.id })

    // All done.
    return sails.inertia.location('/contact')
  },
}
