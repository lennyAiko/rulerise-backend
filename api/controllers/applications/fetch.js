module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch applications.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // @ts-ignore
    const applications = await Application.find({})
    // All done.
    return sails.inertia.render('applications/index', { applications })
  },
}
