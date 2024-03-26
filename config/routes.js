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

  // Auth
  'GET /signup': 'auth/view-signup',
  'POST /signup': 'auth/signup',
  'GET /signin': 'auth/view-signin',
  'POST /signin': 'auth/signin',

  // Category
  'POST /category/create': 'category/create',
  'GET /category/create': 'category/view-create',
  'GET /category': 'category/fetch',
  'PATCH /category/:id': 'category/update',
  'GET /category/:id': 'category/view-update',
  'DELETE /category/:id': 'category/delete',

  // Addons
  'POST /addon/create': 'addon/create',
  'GET /addon/create': 'addon/view-create',
  'GET /addon': 'addon/fetch',
  'PATCH /addon/:id': 'addon/update',
  'GET /addon/:id': 'addon/view-update',
  'DELETE /addon/:id': 'addon/delete',

  // Teams
  'POST /teams/create': 'team/create',
  'GET /teams/create': 'team/view-create',
  'GET /teams': 'team/fetch',
  'PATCH /teams/:id': 'team/update',
  'GET /teams/:id': 'team/view-update',
  'DELETE /teams/:id': 'team/delete',

  // Testimonials
  'POST /testimonials/create': 'testimonial/create',
  'GET /testimonials/create': 'testimonial/view-create',
  'GET /testimonials': 'testimonial/fetch',
  'PATCH /testimonials/:id': 'testimonial/update',
  'GET /testimonials/:id': 'testimonial/view-update',
  'DELETE /testimonials/:id': 'testimonial/delete',

  // Career
  'POST /career/create': 'career/create',
  'GET /career/create': 'career/view-create',
  'GET /career': 'career/fetch',
  'PATCH /career/:id': 'career/update',
  'GET /career/:id': 'career/view-update',
  'DELETE /career/:id': 'career/delete',

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
  'GET /courses/:id': 'courses/view-update',
  'PATCH /courses/:id': 'courses/update',
  'DELETE /courses/:id': 'courses/delete',

  // Applications
  'GET /application': 'applications/fetch',
  'GET /application/:id': 'applications/view',
  'DELETE /application/:id': 'applications/delete',

  // Contact
  'GET /contact': 'contact/fetch',
  'GET /contact/:id': 'contact/view',
  'DELETE /contact/:id': 'contact/delete',

  // Talent
  'GET /talent': 'talent/fetch',
  'GET /talent/:id': 'talent/view',
  'DELETE /talent/:id': 'talent/delete',

  // User
  'GET /user': 'user/view',
  'GET /logout': 'user/logout',
  'PATCH /user/:id': 'user/update',

  // Emails
  'GET /emails': 'emails/view',
  'DELETE /emails/:id': 'emails/delete',

  // Logs
  'GET /logs': 'logs/fetch',

  // Blogs
  'GET /articles': 'articles/fetch',
  'POST /articles/create': 'articles/create',
  'GET /articles/create': 'articles/view-create',
  'GET /articles/:id': 'articles/view-update',
  'PATCH /articles/:id': 'articles/update',
  'DELETE /articles/:id': 'articles/delete',

  // API
  'GET /api/courses': 'api/fetch-courses',
  'GET /api/courses/:id': 'api/view-course',
  'GET /api/categories': 'api/fetch-categories',
  'GET /api/teams': 'api/fetch-teams',
  'GET /api/testimonials': 'api/fetch-testimonials',
  'GET /api/careers': 'api/fetch-careers',
  'GET /api/careers/:id': 'api/view-career',
  'GET /api/careers/filter': 'api/filter-careers',
  'GET /api/faqs': 'api/fetch-faqs',
  'GET /api/facilitators': 'api/fetch-facilitators',
  'GET /api/addons': 'api/fetch-addon',
  'GET /api/articles': 'api/fetch-articles',
  'GET /api/articles/:id': 'api/view-article',
  'POST /api/applications': 'api/create-application',
  'POST /api/contacts': 'api/create-contact',
  'POST /api/talents': 'api/create-talent',
  'POST /api/stripe': 'api/stripe',
  'POST /api/emails': 'api/create-emails',
  'POST /api/send-mail': 'api/send-mail',
  'POST /api/webhook': 'api/webhook',
}
