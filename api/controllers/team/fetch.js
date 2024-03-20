// @ts-nocheck
module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch teams.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const teams = await Teams.find({})

    // All done.
    return sails.inertia.render('teams/index', {
      teams,
    })
  },
}
