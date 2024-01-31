/**
 * Facilitators.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fullName: {
      type: 'string',
      required: true,
      columnName: 'full_name',
    },

    image: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'string',
      required: true,
    },

    socials: {
      type: 'ref',
      defaultsTo: [],
    },

    courses: {
      collection: 'courses',
      via: 'facilitators',
    },
  },
}
