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
  '*': ['share-path', 'is-authenticated'],

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
}
