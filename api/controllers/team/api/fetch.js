module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let message
    let teams

    try {
      // @ts-ignore
      categories = await Teams.find({})
      message = 'Successfully fetched teams'
    } catch (err) {
      console.log(err)
      message = 'Failed to fetch teams'
    }
    // All done.
    return { message, data: teams }
  },
}
