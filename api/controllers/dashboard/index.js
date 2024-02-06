module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {},

  fn: async function () {
    // @ts-ignore
    return sails.inertia.render('index', {
      name: 'Admin',
    })
  },
}
