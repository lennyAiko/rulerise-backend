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
    facilitators: {
      type: 'ref',
      required: true,
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
      level: inputs.level,
      topics: inputs.topics,
      category: inputs.category,
    }).fetch()
    if (!course) {
      return exits.badCombo('Could not create course')
    }

    await Courses.addToCollection(
      course.id,
      'facilitators',
      inputs.facilitators
    )

    return exits.success('/courses')
  },
}
