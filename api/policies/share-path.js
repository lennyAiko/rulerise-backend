module.exports = async function (req, res, proceed) {
  sails.inertia.share('pathName', req.url)
  sails.log(req.url)
  return proceed()
}
