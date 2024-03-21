// @ts-nocheck
module.exports = {
  friendlyName: 'Update',

  description: 'Update teams.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },

    title: {
      type: 'string',
      required: true,
    },

    img: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {},
  },

  fn: async function ({ name, img, title }, exits) {
    const category = await Teams.updateOne({ id: this.req.params.id }).set({
      name,
      img,
      title,
    })

    return sails.inertia.location('/teams')
  },
}
