// @ts-nocheck
module.exports = {
  friendlyName: 'Update',

  description: 'Update career.',

  inputs: {
    title: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'string',
      required: true,
    },

    locationAndFormat: {
      type: 'string',
      required: true,
    },

    dayToDay: {
      type: 'string',
      required: true,
    },

    skillSet: {
      type: 'string',
      required: true,
    },
    jobType: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {},
  },

  fn: async function (
    { title, description, locationAndFormat, dayToDay, skillSet, jobType },
    exits
  ) {
    const category = await Career.updateOne({ id: this.req.params.id }).set({
      title,
      description,
      locationAndFormat,
      dayToDay,
      skillSet,
      jobType,
    })
    // All done.
    return sails.inertia.location('/career')
  },
}
