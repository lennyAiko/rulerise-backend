module.exports = async function (req, res, proceed) {
  const user = await User.findOne({ id: req.session.userId })
  if (user.status === true) {
    return proceed()
  }
  req.flash('error', 'This account is not yet approved')
  return res.redirect('/signin')
}
