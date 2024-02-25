module.exports = async function (req, res, proceed) {
  if (!req.session.me.status) {
    return res.redirect('/signin')
  }
  proceed()
}
