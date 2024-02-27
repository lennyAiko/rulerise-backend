module.exports = async function (req, res, proceed) {
  console.log(req.session)
  if (req.session.userId) {
    return proceed()
  }
  req.flash('message', 'Please login first')
  return res.redirect('/signin')
}
