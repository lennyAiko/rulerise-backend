module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let message
    let testimonials

    try {
      // @ts-ignore
      testimonials = await Testimonials.find({})
      message = 'Successfully fetched testimonials'
    } catch (err) {
      console.log(err)
      message = 'Failed to fetch testimonials'
    }
    // All done.
    return { message, data: testimonials }
  },
}
