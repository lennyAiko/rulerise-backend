module.exports = async function (req, res, proceed) {
  if (!req.session.userId) {
    return res.redirect('/signin')
  }
  proceed()
}
