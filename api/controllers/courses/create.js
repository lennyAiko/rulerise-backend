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
    startDate: {
      type: 'string',
      required: true,
    },
    endDate: {
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
    facilitators: {
      type: 'ref',
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
    badCombo: {
      responseType: 'badRequest',
    },
  },

  fn: async function (inputs, exits) {
    // @ts-ignore
    const course = await Courses.create({
      image: inputs.image,
      title: inputs.title,
      description: inputs.description,
      overview: inputs.overview,
      duration: inputs.duration,
      learningMode: inputs.learningMode,
      priceId: inputs.priceId,
      fee: inputs.fee,
      startDate: inputs.startDate,
      endDate: inputs.endDate,
      level: inputs.level,
      topics: inputs.topics,
      category: inputs.category,
    }).fetch()
    if (!course) {
      return exits.badCombo('Could not create course')
    }

    if (!inputs.facilitators) {
      await Courses.addToCollection(
        course.id,
        'facilitators',
        inputs.facilitators
      )
    }

    // @ts-ignore

    return exits.success('/courses')
  },
}
