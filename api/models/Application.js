/**
 * Application.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      columnName: 'first_name',
    },
    lastName: {
      type: 'string',
      columnName: 'last_name',
    },
    phoneNumber: {
      type: 'string',
      columnName: 'phone_number',
    },
    email: {
      type: 'string',
      isEmail: true,
    },
    status: {
      type: 'string',
      isIn: ['pending', 'accepted', 'rejected'],
      defaultsTo: 'pending',
    },
    // location: {
    //   type: 'string',
    // },
    // experience: {
    //   type: 'string',
    // },
    // educationalBackground: {
    //   type: 'string',
    //   columnName: 'educational_background',
    // },
    // reference: {
    //   type: 'string',
    // },
  },
}
