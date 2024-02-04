module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {},

  fn: async function () {
    // @ts-ignore
    const models = await sails.helpers.getModels()
    return sails.inertia.render('index', {
      name: 'Rulerise | Admin',
      models,
      model_count: models.length - 1,
    })
  },
}
