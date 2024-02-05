module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch talent.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // @ts-ignore
    const talents = await Talent.find({})

    // All done.
    return sails.inertia.render('talent/index', { talents })
  },
}
