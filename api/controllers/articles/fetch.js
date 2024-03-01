module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch blog.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const articles = await Articles.find({})

    // All done.
    return sails.inertia.render('articles/index', { articles })
  },
}
