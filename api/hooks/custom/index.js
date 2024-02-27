/**
 * custom hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineCustomHook(sails) {
  return {
    /**
     * Runs when this Sails app loads/lifts.
     */
    initialize: async function () {
      sails.log.info('Initializing custom hook (`custom`)')
    },

    routes: {
      before: {
        'GET /*': {
          skipAssets: true,
          fn: async function (req, res, proceed) {
            const timeStamp = await sails.helpers.getTimestamp()
            if (!req.session.models) {
              req.session.models = await sails.helpers.getModels()
              sails.inertia.share('models', req.session.models)
            } else {
              sails.inertia.share('models', req.session.models)
            }

            if (req.session.me) {
              sails.inertia.share('loggedInUser', req.session.me)
              sails.log(
                `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url}.`
              )
              await Logs.create({
                log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url}.`,
              })
            }

            return proceed()
          },
        },
        'POST /*': {
          skipAssets: true,
          fn: async function (req, res, proceed) {
            const timeStamp = await sails.helpers.getTimestamp()
            if (req.session.me) {
              const payload = JSON.stringify(req.body)
              sails.log(
                `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to create ${payload}.`
              )
              await Logs.create({
                log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to create ${payload}.`,
              })
            }
            return proceed()
          },
        },
        'PATCH /*': {
          skipAssets: true,
          fn: async function (req, res, proceed) {
            const timeStamp = await sails.helpers.getTimestamp()
            if (req.session.me) {
              const payload = JSON.stringify(req.body)
              sails.log(
                `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to update ${payload}.`
              )
              await Logs.create({
                log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to update ${payload}.`,
              })
            }
            return proceed()
          },
        },
        'DELETE /*': {
          skipAssets: true,
          fn: async function (req, res, proceed) {
            const timeStamp = await sails.helpers.getTimestamp()
            if (req.session.me) {
              const payload = JSON.stringify(req.params)
              sails.log()
              await Logs.create({
                log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to delete ${payload}.`,
              })
            }
            return proceed()
          },
        },
      },
    },
  }
}
