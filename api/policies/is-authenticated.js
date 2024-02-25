module.exports = async function (req, res, proceed) {
  if (req.session.userId) {
    return proceed()
  }
  req.flash('message', 'Please login first')
  return res.redirect('/signin')
}
