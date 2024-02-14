module.exports = {
  friendlyName: 'Create',

  description: 'Create courses.',

  inputs: {
    image: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    overview: {
      type: 'string',
      required: true,
    },
    duration: {
      type: 'string',
      required: true,
    },
    learningMode: {
      type: 'string',
    },
    priceId: {
      type: 'string',
      required: true,
    },
    fee: {
      type: 'string',
      required: true,
    },
    level: {
      type: 'string',
      required: true,
    },
    topics: {
      type: 'ref',
      required: true,
    },
    facilitator: {
      type: 'ref',
      // required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
    serverError: {
      responseType: 'internalServerError',
    },
  },

  fn: async function (inputs, exits) {
    try {
      // @ts-ignore
      await Courses.create({
        image: inputs.image,
        title: inputs.title,
        description: inputs.description,
        overview: inputs.overview,
        duration: inputs.duration,
        learningMode: inputs.learningMode,
        priceId: inputs.priceId,
        fee: inputs.fee,
        level: inputs.level,
        topics: inputs.topics,
        facilitator: inputs.facilitator,
        category: inputs.category,
      })
    } catch (err) {
      sails.log(err)
      return exits.serverError('Could not create course')
    }
    // All done.
    return exits.success('/courses')
  },
}
