module.exports = async function (req, res, proceed) {
  if (req.session.userId) {
    proceed()
  }
  return res.redirect('/signin')
}
