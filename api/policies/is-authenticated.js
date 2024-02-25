module.exports = async function (req, res, proceed) {
  if (req.session.userId) {
    console.log('user is authenticated')
    return proceed()
  }
  return res.redirect('/signin')
}
