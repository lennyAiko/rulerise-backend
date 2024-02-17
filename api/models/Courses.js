/**
 * Courses.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    image: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
      unique: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    overview: {
      type: 'string',
      required: true,
    },
    duration: {
      type: 'string',
      required: true,
    },
    learningMode: {
      type: 'string',
      required: true,
    },
    fee: {
      type: 'string',
      required: true,
    },
    priceId: {
      type: 'string',
      required: true,
      columnName: 'price_id',
    },
    level: {
      type: 'string',
      required: true,
    },
    topics: {
      type: 'ref',
      required: true,
    },

    // associations
    facilitators: {
      collection: 'facilitators',
      via: 'courses',
    },
    category: {
      model: 'category',
    },
  },
}
