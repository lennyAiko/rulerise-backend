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
  }) {
    // @ts-ignore
    await Career.create({
      title,
      description,
      locationAndFormat,
      dayToDay,
      skillSet,
      jobType,
    })

    // All done.
    return '/career'
  },
}
