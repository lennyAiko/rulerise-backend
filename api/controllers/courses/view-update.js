module.exports = {
  friendlyName: 'View update',

  description: 'Display "Update" page.',

  exits: {
    success: {},
  },

  fn: async function () {
    // @ts-ignore
    const course = await Courses.findOne({
      id: this.req.params.id,
    }).populate('facilitators')

    // @ts-ignore
    const facilitators = await Facilitators.find({})
    // @ts-ignore
    const categories = await Category.find({})
    // Respond with view.
    return sails.inertia.render('courses/view', {
      course,
      facilitators,
      categories,
    })
  },
}
