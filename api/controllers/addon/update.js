// @ts-nocheck
module.exports = {
  friendlyName: 'Update',

  description: 'Update addon.',

  inputs: {
    title: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {},
  },

  fn: async function ({ title }, exits) {
    const addon = await AddOn.updateOne({ id: this.req.params.id }).set({
      title,
    })
    // All done.
    // return sails.inertia.render('addon/view', { addon, updated })
    return sails.inertia.location('/addon')
  },
}
