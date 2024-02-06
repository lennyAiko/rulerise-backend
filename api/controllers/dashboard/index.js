module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {},

  fn: async function () {
    // @ts-ignore
    const models = await sails.helpers.getModels()
    sails.inertia.share('models', models)
    return sails.inertia.render('index', {
      name: 'Admin',
    })
  },
}
