/**
 * Logs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'logDB',

  attributes: {
    log: {
      type: 'string',
      required: true,
    },
  },
}
