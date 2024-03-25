require('dotenv').config()

// @ts-ignore
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPEENDPOINTSECRET

function formatDate(timestamp) {
  // @ts-ignore
  const date = new Date(timestamp)

  const formattedDate = date.toLocaleString('en-US', {
    timeZone: 'UTC', // Set the time zone if needed
    weekday: 'long', // Full day of the week (e.g., "Monday")
    year: 'numeric', // Four-digit year (e.g., "2023")
    month: 'long', // Full month name (e.g., "March")
    day: 'numeric', // Day of the month (e.g., "15")
    hour: 'numeric', // Hour in 12-hour format (e.g., "3 PM")
    minute: 'numeric', // Minutes (e.g., "25")
    second: 'numeric', // Seconds (e.g., "30")
    hour12: true, // Use 12-hour format (true) or 24-hour format (false)
  })

  return formattedDate
}
module.exports = {
  friendlyName: 'Webhook',

  description: 'Webhook api.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const req = this.req
    const res = this.res

    // sails.log('headers', req.headers)
    // sails.log('body', req.body)
    const rawBody = req.body.toString()

    const sig = req.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret)
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    if (event.type === 'checkout.session.completed') {
    }

    let mostRecentApplication
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object
        stripe.customers
          .retrieve(paymentIntentSucceeded.customer)
          .then(async (customer) => {
            await sails.helpers.sendEmail(
              customer.metadata.email,
              {
                amount: (paymentIntentSucceeded.amount / 100).toLocaleString(
                  'en-CA',
                  {
                    style: 'currency',
                    currency: 'CAD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                ),
                date: formatDate(paymentIntentSucceeded.created * 1000),
                course: customer.metadata.course,
              },
              'Payment Successful',
              'email-payment-done',
              false
            )

            Application.find({
              where: { firstName: customer.metadata.firstName },
              sort: 'createdAt DESC',
            })
              .then(async (application) => {
                await Application.updateOne({ id: application[0].id }).set({
                  status: 'accepted',
                })
              })
              .catch((err) => sails.log(err))
          })
        break
      case 'payment_intent.payment_failed':
        const paymentIntentFailed = event.data.object
        stripe.customers
          .retrieve(paymentIntentFailed.customer)
          .then(async (customer) => {
            await sails.helpers.sendEmail(
              customer.metadata.email,
              {
                amount: paymentIntentSucceeded.amount.toLocaleString('en-CA', {
                  style: 'currency',
                  currency: 'CAD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                date: formatDate(paymentIntentSucceeded.created * 1000),
                course: customer.metadata.course,
              },
              'Payment Failed',
              'email-payment-failed',
              false
            )
            Application.find({
              where: { firstName: customer.metadata.firstName },
              sort: 'createdAt DESC',
            })
              .then(async (application) => {
                await Application.updateOne({ id: application[0].id }).set({
                  status: 'rejected',
                })
              })
              .catch((err) => sails.log(err))
          })
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    // All done.
    return ''
  },
}
