/**
 * Contact.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fullName: {
      type: 'string',
      columnName: 'full_name',
    },

    email: {
      type: 'string',
      isEmail: true,
    },

    request: {
      type: 'string',
    },
  },
}
