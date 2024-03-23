module.exports = {
  friendlyName: 'View',

  description: 'View api.',

  inputs: {
    id: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    const _id = inputs.id
    // @ts-ignore
    const career = await Career.findOne({ id: _id })

    // All done.
    return career
  },
}
