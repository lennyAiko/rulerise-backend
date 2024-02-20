module.exports = function (req, res, proceed) {
  if (req.session.user.status === 'disapproved') {
    return res.redirect('/signin')
  }

  return proceed()
}
