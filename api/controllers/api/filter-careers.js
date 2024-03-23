module.exports = {
  friendlyName: 'Filter',

  description: 'Filter api.',

  inputs: {
    filter: {
      type: 'string',
      required: true,
      isIn: ['full-time', 'remote', 'hybrid'],
    },
  },

  exits: {},

  fn: async function (inputs) {
    const careers = await Career.find({ jobType: inputs.filter })

    // All done.
    return { message: 'Successfully fetched filter careers', data: careers }
  },
}
