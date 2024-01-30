// @ts-nocheck
module.exports = {
  friendlyName: 'Delete',

  description: 'Delete faqs.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Faqs.destroyOne({ id: this.req.params.id })

    const faqs = await Faqs.find({})
    const deleted = true

    // All done.
    return sails.inertia.render('faqs', { faqs, deleted })
  },
}
