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
            if (!req.session.models) {
              req.session.models = await sails.helpers.getModels()
              sails.inertia.share('models', req.session.models)
            } else {
              sails.inertia.share('models', req.session.models)
            }

            if (req.session.me) {
              sails.inertia.share('loggedInUser', req.session.me)
            }

            return proceed()
          },
        },
      },
    },
  }
}
