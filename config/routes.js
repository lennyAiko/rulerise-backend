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
  'GET /api/courses': 'courses/api/fetch',
  'GET /api/courses/:id': 'courses/api/view',
  'GET /api/categories': 'category/api/fetch',
  'GET /api/teams': 'team/api/fetch',
  'GET /api/testimonials': 'testimonial/api/fetch',
  'GET /api/careers': 'career/api/fetch',
  'GET /api/careers/:id': 'career/api/view',
  'GET /api/careers/filter': 'career/api/filter',
  'GET /api/faqs': 'faqs/api/fetch',
  'GET /api/facilitators': 'facilitators/api/fetch',
  'GET /api/articles': 'articles/api/fetch',
  'GET /api/articles/:id': 'articles/api/view',
  'POST /api/applications': 'applications/api/create',
  'POST /api/contacts': 'contact/api/create',
  'POST /api/talents': 'talent/api/create',
  'POST /api/stripe': 'stripe',
  'POST /api/emails': 'emails/api/create',
}
