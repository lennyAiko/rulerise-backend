module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch facilitators.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // @ts-ignore
    const facilitators = await Facilitators.find({})

    // All done.
    return sails.inertia.render('facilitators/index', {
      facilitators,
    })
  },
}
