module.exports = {
  friendlyName: 'Create',

  description: 'Create faqs.',

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

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({ question, answer }) {
    // @ts-ignore
    await Faqs.create({
      question,
      answer,
    })

    // All done.
    return '/faqs'
  },
}
