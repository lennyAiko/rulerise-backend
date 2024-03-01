require('dotenv').config()

module.exports.mail = {
  default: 'smtp',
  mailers: {
    log: {
      transport: 'log',
    },
    smtp: {
      transport: 'smtp',
      host: process.env.MAIL_HOST,
      username: process.env.MAIL_USERNAME,
      password: process.env.MAIL_PASSWORD,
      port: process.env.MAIL_PORT,
      secure: true,
    },
  },
  from: {
    address: process.env.MAIL_USERNAME,
    name: 'Rulerise',
  },
}
