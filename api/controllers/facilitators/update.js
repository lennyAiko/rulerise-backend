module.exports = {
  friendlyName: 'Update',

  description: 'Update facilitators.',

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

  exits: {},

  fn: async function ({ fullName, image, description, socials, courses }) {
    // @ts-ignore
    const facilitator = await Facilitators.updateOne({
      id: this.req.params.id,
    }).set({
      fullName,
      image,
      description,
      socials,
    })

    // @ts-ignore
    await Facilitators.addToCollection(facilitator.id, 'courses', courses)

    // All done.
    return sails.inertia.location('/facilitators')
  },
}
