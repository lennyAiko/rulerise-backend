module.exports = {


  friendlyName: 'View signin',


  description: 'Display "Signin" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/auth/signin'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
