module.exports = {
  friendlyName: 'Get models',

  description: '',

  inputs: {},

  exits: {
    success: {
      outputFriendlyName: 'Models',
    },
  },

  fn: async function (inputs) {
    // Get models.
    var models
    var modelNames = []

    // TODO
    if (this.sails.config.globals.models) {
      models = await this.sails.models
    } else {
      models = ''
    }

    for (const key in models) {
      if (Object.hasOwnProperty.call(models, key)) {
        if (models[key].globalId === 'Archive') {
          continue
        } else {
          modelNames.push(models[key].globalId)
        }
      }
    }

    // Send back the result through the success exit.
    return modelNames
  },
}
