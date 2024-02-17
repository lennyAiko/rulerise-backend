module.exports = {
  friendlyName: 'Create',

  description: 'Create facilitators.',

  inputs: {
    fullName: {
      type: 'string',
      required: true,
      columnName: 'full_name',
    },

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

    socials: {
      type: 'ref',
      defaultsTo: [],
    },

    courses: {
      type: 'ref',
      defaultsTo: [],
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({
    fullName,
    image,
    description,
    socials,
    courses,
    title,
  }) {
    // @ts-ignore
    const facilitator = await Facilitators.create({
      fullName,
      image,
      description,
      socials,
      title,
    }).fetch()

    // @ts-ignore
    await Facilitators.addToCollection(facilitator.id, 'courses').members(
      courses
    )

    // All done.
    return '/facilitators'
  },
}
