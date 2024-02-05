module.exports = {
  friendlyName: 'View',

  description: 'View talent.',

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
    const talent = await Talent.findOne({ id: this.req.params.id })

    if (!talent) {
      return exits.notFound({ message: "Couldn't find talent" })
    }
    // All done.
    return sails.inertia.render('talent/view', { talent })
  },
}
