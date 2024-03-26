// @ts-nocheck
module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch addon.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const addons = await AddOn.find({})

    // All done.
    return sails.inertia.render('addon/index', {
      addons,
    })
  },
}
