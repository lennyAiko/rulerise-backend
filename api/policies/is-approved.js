module.exports = async function (req, res, proceed) {
  const user = await User.findOne({ id: req.session.userId })
  if (user.status === true) {
    sails.log('user is approved')
    return proceed()
  }
  return res.redirect('/signin')
}
