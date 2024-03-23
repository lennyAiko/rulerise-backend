module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    let message
    let categories

    try {
      // @ts-ignore
      categories = await Category.find({})
      message = 'Successfully fetched categories'
    } catch (err) {
      console.log(err)
      message = 'Failed to fetch categories'
    }
    // All done.
    return { message, data: categories }
  },
}
