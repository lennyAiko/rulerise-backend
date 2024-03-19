/**
 * Career.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'string',
      required: true,
    },

    jobType: {
      type: 'string',
      required: true,
      isIn: ['full-time', 'remote', 'hybrid'],
    },

    locationAndFormat: {
      columnName: 'location_and_format',
      type: 'string',
      required: true,
    },

    dayToDay: {
      columnName: 'day_to_day',
      type: 'string',
      required: true,
    },

    skillSet: {
      columnName: 'skill_set',
      type: 'string',
      required: true,
    },

    status: {
      type: 'string',
      isIn: ['open', 'closed'],
      default: 'open',
    },
  },
}
