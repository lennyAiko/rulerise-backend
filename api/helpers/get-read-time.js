module.exports = {
  friendlyName: 'Get read time',

  description: '',

  inputs: {
    text: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      outputFriendlyName: 'Read time',
    },
  },

  fn: async function ({ text }) {
    // Get read time.
    var readTime

    // TODO
    const wordMatchRegExp = /[^\s]+/g
    const htmlTagRegExp = /<\/?[^>]+(>|$)/g

    // Assuming 'text' is the HTML content
    const textWithoutHtml = text.replace(htmlTagRegExp, '') // Strip HTML tags

    const words = textWithoutHtml.matchAll(wordMatchRegExp)

    const wordCount = [...words].length
    readTime = Math.round(wordCount / 200)

    // Send back the result through the success exit.
    return readTime
  },
}
