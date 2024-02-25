module.exports = async function (req, res, proceed) {
  sails.inertia.share('pathName', req.url)
  return proceed()
}
