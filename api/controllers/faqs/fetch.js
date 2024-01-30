module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch faqs.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const faqs = await Faqs.find({})

    // All done.
    return sails.inertia.render('faqs/index', {
      faqs,
    })
  },
}
