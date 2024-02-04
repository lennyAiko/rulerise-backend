module.exports = {
  friendlyName: 'View',

  description: 'View applications.',

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
    const application = await Application.findOne({ id: this.req.params.id })
    if (!application) {
      return exits.notFound({ message: "Couldn't find application" })
    }

    // All done.
    return sails.inertia.render('application/view', { application })
  },
}
