module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // @ts-ignore
    const courses = await Courses.find({})

    // All done.
    return {
      status: 200,
      message: 'Successfully fetched courses',
      data: courses,
    }
  },
}
