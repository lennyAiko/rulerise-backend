require('dotenv').config()
module.exports = {
  friendlyName: 'Create',

  description: 'Create api.',

  simulateLatency: 5000,

  inputs: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
    },
    email: {
      type: 'string',
      isEmail: true,
    },
    // location: {
    //   type: 'string',
    // },
    // experience: {
    //   type: 'string',
    // },
    // educationalBackground: {
    //   type: 'string',
    // },
    // reference: {
    //   type: 'string',
    // },
    priceId: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      description: 'Successfully created application.',
    },
    error: {
      responseType: 'badRequest',
      description: 'Failed to create application.',
    },
  },

  fn: async function (
    {
      firstName,
      lastName,
      phoneNumber,
      email,
      // location,
      // experience,
      // educationalBackground,
      // reference,
      priceId,
    },
    exits
  ) {
    // @ts-ignore
    const application = await Application.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      // location,
      // experience,
      // educationalBackground,
      // reference,
    }).fetch()

    if (!application) {
      return exits.error({
        status: 400,
        message: 'Failed to create an application.',
      })
    }

    // @ts-ignore
    const course = await Courses.findOne({
      priceId,
    })

    if (!course) {
      return exits.error({
        status: 400,
        message: 'Course not found.',
      })
    }

    // @ts-ignore
    // await sails.helpers.sendEmail(
    //   {
    //     fullName: `${firstName} ${lastName}`,
    //     course: course.title,
    //   },
    //   'Application Received',
    //   'email-application-notification',
    //   false
    // )

    // this.req.session.application = {
    //   fullName: `${firstName} ${lastName}`,
    //   course: course.title,
    // }

    // let url
    // if (priceId.length > 0) {
    //   // @ts-ignore
    //   url = await sails.helpers.paymentUrl(course.priceId)
    // }

    const payload = {
      status: 200,
      message: 'Successfully created an application.',
      // url: url,
    }

    // All done.
    return exits.success(payload)
  },
}
