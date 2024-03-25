const bodyParser = require('body-parser')

/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {
  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/

  middleware: {
    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/

    rawBodyParser: function (req, res, next) {
      if (req.url === '/api/webhook') {
        bodyParser.raw({ type: '*/*' })(req, res, next)
      } else {
        next()
      }
    },

    order: [
      'cookieParser',
      'session',
      'rawBodyParser',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon',
    ],
    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/
    bodyParser: (function _configureBodyParser() {
      var skipper = require('skipper')
      var middlewareFn = skipper({
        strict: true,
        includeRawBody: true,
        stream: true,
      })
      return middlewareFn
    })(),
  },
}
// return bodyParser.raw({ type: '*/*' })
