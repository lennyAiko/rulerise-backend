module.exports = {
  friendlyName: 'Fetch',

  description: 'Fetch logs.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // @ts-ignore
    const logs = await Logs.find({}).sort([{ createdAt: 'DESC' }])

    // All done.
    return sails.inertia.render('logs/index', { logs })
  },
}
