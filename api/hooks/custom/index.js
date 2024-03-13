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
      after: {
        'POST /api/applications': {
          skipAssets: true,
          fn: async function (req, res, proceed) {
            console.log(req.session)
            const application = req.session?.application
            await sails.helpers.sendEmail(
              {
                fullName: application.fullName,
                course: application.course,
              },
              'Application Received',
              'email-application-notification',
              false
            )
            proceed()
          },
        },
      },
      before: {
        'GET /*': {
          skipAssets: true,
          // @ts-ignore
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

              if (!req.url.includes('/logs')) {
                // @ts-ignore
                await Logs.create({
                  log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url}.`,
                })
              }
            }

            // @ts-ignore
            const logLength = await Logs.count()

            if (logLength > 200) {
              // @ts-ignore
              await Logs.destroy({
                createdAt: {
                  '<': new Date().getTime(),
                },
              })
            }

            return proceed()
          },
        },
        'POST /*': {
          skipAssets: true,
          // @ts-ignore
          fn: async function (req, res, proceed) {
            const timeStamp = await sails.helpers.getTimestamp()
            if (req.session.me) {
              const payload = JSON.stringify(req.body)

              if (!req.url.includes('/logs')) {
                // @ts-ignore
                await Logs.create({
                  log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to create ${payload}.`,
                })
                // @ts-ignore
              }
            }
            return proceed()
          },
        },
        'PATCH /*': {
          skipAssets: true,
          // @ts-ignore
          fn: async function (req, res, proceed) {
            const timeStamp = await sails.helpers.getTimestamp()
            if (req.session.me) {
              const payload = JSON.stringify(req.body)
              if (!req.url.includes('/logs')) {
                // @ts-ignore
                await Logs.create({
                  log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to update ${payload}.`,
                })
                // @ts-ignore
              }
            }
            return proceed()
          },
        },
        'DELETE /*': {
          skipAssets: true,
          // @ts-ignore
          fn: async function (req, res, proceed) {
            const timeStamp = await sails.helpers.getTimestamp()
            if (req.session.me) {
              const payload = JSON.stringify(req.params)
              if (!req.url.includes('/logs')) {
                // @ts-ignore
                await Logs.create({
                  log: `[${timeStamp}]: ${req.session.me.fullName} visited ${req.url} to delete ${payload}.`,
                })
                // @ts-ignore
              }
            }
            return proceed()
          },
        },
      },
    },
  }
}
