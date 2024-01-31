module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let message
    let facilitators

    try {
      // @ts-ignore
      facilitators = await Facilitators.find({})
      message = 'Successfully fetched facilitators'
    } catch (err) {
      console.log(err)
      message = 'Failed to fetch facilitators'
    }

    // All done.
    return { message, data: facilitators }
  },
}
