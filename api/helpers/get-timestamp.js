module.exports = {
  friendlyName: 'Get timestamp',

  description: '',

  inputs: {},

  exits: {
    success: {
      outputFriendlyName: 'Timestamp',
    },
  },

  fn: async function (inputs) {
    // Get timestamp.
    var timestamp

    // TODO
    let date = new Date()
    let options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }

    // @ts-ignore
    timestamp = date.toLocaleTimeString('en-us', options)

    // Send back the result through the success exit.
    // @ts-ignore
    return timestamp
  },
}
