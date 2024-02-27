module.exports = async function (req, res, proceed) {
  if (!req.session.me.status) {
    req.flash('error', 'Account not approved')
    return res.redirect('/signin')
  }
  proceed()
}
