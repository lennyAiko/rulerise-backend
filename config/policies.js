/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/
  // '*': true,
  // Auth
  'auth/signin': true,
  'auth/signup': true,
  'auth/view-signin': true,
  'auth/view-signup': true,

  'applications/api/create': true,
  'category/api/fetch': true,
  'contact/api/create': true,
  'courses/api/fetch': true,
  'courses/api/view': true,
  'facilitators/api/fetch': true,
  'faqs/api/fetch': true,
  'talent/api/create': true,

  'dashboard/*': ['share-path'],
  'applications/*': ['share-path', 'is-authenticated', 'is-approved'],
  'category/*': ['share-path', 'is-authenticated', 'is-approved'],
  'contact/*': ['share-path', 'is-authenticated', 'is-approved'],
  'courses/*': ['share-path', 'is-authenticated', 'is-approved'],
  'emails/*': ['share-path', 'is-authenticated', 'is-approved'],
  'facilitators/*': ['share-path', 'is-authenticated', 'is-approved'],
  'faqs/*': ['share-path', 'is-authenticated', 'is-approved'],
  'talent/*': ['share-path', 'is-authenticated', 'is-approved'],
  'user/*': ['share-path', 'is-authenticated', 'is-approved'],
}
