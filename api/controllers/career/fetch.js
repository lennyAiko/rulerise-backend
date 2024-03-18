// @ts-nocheck
module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch career.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const careers = await Career.find({})

    // All done.
    return sails.inertia.render('career/index', {
      careers,
    })
  },
}
