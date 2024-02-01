module.exports = {
  friendlyName: 'View create',

  description: 'Display "Create" page.',

  exits: {
    success: {},
  },

  fn: async function () {
    // @ts-ignore
    const facilitators = await Facilitators.find({})
    // @ts-ignore
    const categories = await Category.find({})
    // Respond with view.
    return sails.inertia.render('courses/create', { facilitators, categories })
  },
}
