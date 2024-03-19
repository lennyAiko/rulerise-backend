module.exports = {
  friendlyName: 'Create',

  description: 'Create career.',

  inputs: {
    title: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'string',
      required: true,
    },

    locationAndFormat: {
      type: 'string',
      required: true,
    },

    dayToDay: {
      type: 'string',
      required: true,
    },

    jobType: {
      type: 'string',
      required: true,
    },

    skillSet: {
      type: 'string',
      required: true,
    },

    status: {
      type: 'string',
      required: true,
      isIn: ['open', 'closed'],
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({
    title,
    description,
    locationAndFormat,
    dayToDay,
    skillSet,
    jobType,
    status,
  }) {
    // @ts-ignore
    await Career.create({
      title,
      description,
      locationAndFormat,
      dayToDay,
      skillSet,
      jobType,
      status,
    })

    // All done.
    return '/career'
  },
}
