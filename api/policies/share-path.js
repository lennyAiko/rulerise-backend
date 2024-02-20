module.exports = async function (req, res, proceed) {
  sails.log(req.url)
  sails.inertia.share('pathName', req.url)
  return proceed()
}
