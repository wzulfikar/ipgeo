const requestIp = require("request-ip");
const geoip = require("geoip-lite");

module.exports = (req, res) => {
  const ip = requestIp.getClientIp(req);
  const geo = geoip.lookup(ip);

  res.send({ ip, geo });
};
