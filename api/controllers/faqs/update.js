module.exports = {
  friendlyName: 'Update',

  description: 'Update faqs.',

  inputs: {
    question: {
      type: 'string',
      required: true,
    },
    answer: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function ({ question, answer }) {
    const faq = await Faqs.updateOne({ id: this.req.params.id }).set({
      question,
      answer,
    })

    // All done.
    return sails.inertia.location('/faqs')
  },
}
