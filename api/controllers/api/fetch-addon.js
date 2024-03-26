module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let message
    let addOns

    try {
      // @ts-ignore
      addOns = await AddOn.find({})
      message = 'Successfully fetched addOns'
    } catch (err) {
      console.log(err)
      message = 'Failed to fetch addOns'
    }
    // All done.
    return { message, data: addOns }
  },
}
