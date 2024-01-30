/**
 * Faqs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    question: {
      type: 'string',
      required: true,
    },

    answer: {
      type: 'string',
      required: true,
    },
  },
}
