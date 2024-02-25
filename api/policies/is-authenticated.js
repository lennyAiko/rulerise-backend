module.exports = async function (req, res, proceed) {
  console.log(req.session.userId)
  console.log(req.session)
  console.log(res.props)
  if (req.session.userId) {
    return proceed()
  }
  // req.flash('message', 'Please login first')
  // return res.redirect('/signin')
  return proceed()
}
