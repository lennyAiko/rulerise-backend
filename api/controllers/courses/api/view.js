module.exports = {
  friendlyName: 'View',

  description: 'View api.',

  inputs: {},

  exits: {
    success: {
      responseType: 'ok',
    },
    notFound: {
      responseType: 'notFound',
    },
  },

  fn: async function (inputs, exits) {
    // @ts-ignore
    const course = await Courses.findOne({ id: this.req.params.id }).populate(
      'facilitators'
    )
    if (!course) {
      return exits.notFound('Could not find course')
    }
    // All done.
    return exits.success(course)
  },
}
