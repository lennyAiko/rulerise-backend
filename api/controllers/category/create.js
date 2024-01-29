// @ts-nocheck
require('dotenv').config()
const UPLOAD_URL = process.env.UPLOAD_URL

function randomStrings(length, chars) {
  var length = 16
  var result = ''
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
  for (var i = length; i > 0; --i) {
    result += chars[Math.round(Math.random() * (chars.length - 1))]
  }
  return result
}

module.exports = {
  friendlyName: 'Create',

  description: 'Create category.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({ name }) {
    // Create category.

    let randomName

    this.req.file('image').upload(
      {
        maxBytes: 2000000, //2mb,
        dirname: require('path').resolve(
          sails.config.appPath,
          '.tmp/public/images'
        ),
        saveAs: function (file, cb) {
          randomName = `${randomStrings()}_${file.filename}`
          cb(null, randomName)
        },
      },
      async function whenDone(err, uploadedFiles) {
        if (err) {
          return this.res.status(500).json({ message: 'Error uploading file' })
        }

        imgUrl = require('util').format(`${UPLOAD_URL}/images/${randomName}`)

        await Category.create({ name, image: imgUrl })
      }
    )

    // All done.
    return '/category'
  },
}
