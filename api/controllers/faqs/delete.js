// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete faqs.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Faqs.destroyOne({ id: this.req.params.id })

    const faqs = await Faqs.find({})

    // All done.
    // return sails.inertia.render('faqs', { faqs, deleted })
    return sails.inertia.location('/faqs')
  },
}
