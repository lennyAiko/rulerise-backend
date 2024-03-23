module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let message
    let faqs

    try {
      // @ts-ignore
      faqs = await Faqs.find({})
      message = 'Successfully fetched faqs'
    } catch (err) {
      console.log(err)
      message = 'Failed to fetch faqs'
    }

    // All done.
    return { message, data: faqs }
  },
}
