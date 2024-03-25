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

    let customer
    let mostRecentApplication
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object
        customer = await stripe.customers.retrieve(event.data.object.customer)
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
          'Payment Successful',
          'email-payment-done',
          false
        )
        mostRecentApplication = await Application.findOne({
          where: { firstName: customer.metadata.firstName },
          sort: 'createdAt DESC', // Sort by createdAt in descending order to get the most recent record
        })

        if (mostRecentApplication) {
          await Application.updateOne({ id: mostRecentApplication.id }).set({
            status: 'accepted',
          })
        } else {
          // Handle case where no matching record is found
        }
        break
      case 'payment_intent.payment_failed':
        const paymentIntentFailed = event.data.object
        customer = await stripe.customers.retrieve(event.data.object.customer)
        await sails.helpers.sendEmail(
          customer.metadata.email,
          {
            amount: paymentIntentFailed.amount.toLocaleString('en-CA', {
              style: 'currency',
              currency: 'CAD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            date: formatDate(paymentIntentFailed.created * 1000),
            course: customer.metadata.course,
          },
          'Payment Failed',
          'email-payment-failed',
          false
        )
        mostRecentApplication = await Application.findOne({
          where: { firstName: customer.metadata.firstName },
          sort: 'createdAt DESC', // Sort by createdAt in descending order to get the most recent record
        })

        if (mostRecentApplication) {
          await Application.updateOne({ id: mostRecentApplication.id }).set({
            status: 'rejected',
          })
        } else {
          // Handle case where no matching record is found
        }
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    // All done.
    return ''
  },
}
