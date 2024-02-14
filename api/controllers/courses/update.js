module.exports = {
  friendlyName: 'Update',

  description: 'Update courses.',

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
    priceId: {
      type: 'string',
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
      responseType: 'myRedirect',
    },
  },

  fn: async function (inputs) {
    // @ts-ignore
    const course = await Courses.updateOne({ id: this.req.params.id }).set({
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
      facilitators: inputs.facilitator,
      category: inputs.category,
    })

    // All done.
    return sails.inertia.location('/courses')
  },
}
