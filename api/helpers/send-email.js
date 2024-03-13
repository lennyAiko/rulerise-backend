module.exports = {
  friendlyName: 'Send email',

  description: '',

  inputs: {
    templateData: {
      type: 'json',
    },
    // to: {
    //   type: 'ref',
    //   required: true,
    // },
    subject: {
      type: 'string',
      required: true,
    },
    template: {
      type: 'string',
      required: true,
    },
    layout: {
      type: 'boolean',
    },
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function (inputs) {
    // TODO

    const emails = [
      // 'adebayooluyemi4@gmail.com',
      // 'bolafunmi@yahoo.com',
      'lennyaiko17@gmail.com',
      // 'care@rulerise.com',
    ]

    try {
      await sails.helpers.mail.send.with({
        to: 'bolafunmi@gmail.com',
        subject: inputs.subject,
        template: inputs.template,
        templateData: inputs.templateData,
        layout: inputs.layout,
        cc: emails,
      })
    } catch (err) {
      sails.log(err)
    }

    return
  },
}
