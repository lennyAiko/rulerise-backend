/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  'GET /': 'dashboard/index',

  // Category
  'POST /category/create': 'category/create',
  'GET /category/create': 'category/view-create',
  'GET /category': 'category/fetch',
  'PATCH /category/:id': 'category/update',
  'GET /category/:id': 'category/view-update',
  'DELETE /category/:id': 'category/delete',

  // Faqs
  'GET /faqs': 'faqs/fetch',
  'POST /faqs/create': 'faqs/create',
  'GET /faqs/create': 'faqs/view-create',
  'GET /faqs/:id': 'faqs/view-update',
  'PATCH /faqs/:id': 'faqs/update',
  'DELETE /faqs/:id': 'faqs/delete',

  // Facilitator
  'GET /facilitators': 'facilitators/fetch',
  'POST /facilitators/create': 'facilitators/create',
  'GET /facilitators/create': 'facilitators/view-create',
  'GET /facilitators/:id': 'facilitators/view-update',
  'PATCH /facilitators/:id': 'facilitators/update',
  'DELETE /facilitators/:id': 'facilitators/delete',

  // Courses
  'GET /courses': 'courses/fetch',
  'POST /courses/create': 'courses/create',
  'GET /courses/create': 'courses/view-create',

  // API
  'GET /api/category': 'category/api/fetch',
  'GET /api/faqs': 'faqs/api/fetch',
  'GET /api/facilitators': 'facilitators/api/fetch',
}
