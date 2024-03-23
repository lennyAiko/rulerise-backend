module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const articles = await Articles.find({}).sort('createdAt DESC')

    // All done.
    return {
      status: 200,
      message: 'Successfully fetched articles',
      data: articles,
    }
  },
}
