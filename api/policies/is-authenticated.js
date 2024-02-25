module.exports = async function (req, res, proceed) {
  if (req.session.userId) {
    sails.log('user is authenticated')
    return proceed()
  }
  return res.redirect('/signin')
}
