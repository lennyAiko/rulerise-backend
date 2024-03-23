module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let message
    let careers

    try {
      // @ts-ignore
      careers = await Career.find({})
      message = 'Successfully fetched careers'
    } catch (err) {
      console.log(err)
      message = 'Failed to fetch careers'
    }
    // All done.
    return { message, data: careers }
  },
}
