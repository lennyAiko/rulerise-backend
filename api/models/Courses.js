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
      // unique: true
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
      isIn: ['remote', 'on-site'],
      defaultsTo: 'in-class',
    },
    fee: {
      type: 'string',
      required: true,
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
