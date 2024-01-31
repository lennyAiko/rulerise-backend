module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch courses.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // @ts-ignore
    const courses = await Courses.find({})

    // All done.
    return sails.inertia.render('courses/index', { courses })
  },
}
