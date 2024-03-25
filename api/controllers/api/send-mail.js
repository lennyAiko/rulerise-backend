module.exports = {
  friendlyName: 'Send mail',

  description: '',

  inputs: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    priceId: {
      type: 'string',
      required: true,
    },
  },

  exits: {},

  fn: async function ({ firstName, lastName, priceId }) {
    const course = await Courses.findOne({ priceId })
    await sails.helpers.sendEmail(
      'bolafunmi@gmail.com',
      {
        fullName: `${firstName} ${lastName}`,
        course: course.title,
      },
      'Application Received',
      'email-application-notification',
      false
    )

    // All done.
    return {
      status: 200,
      message: 'Email sent',
    }
  },
}
