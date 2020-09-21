const jwt = require("jsonwebtoken");
var config = require("../config/main");
const SECRET_KEY = config.secret;

exports.checkJWT = async (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!!token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json("Token non valide");
      } else {
        req.decoded = decoded;

        const expiresIn = 7200;
        const newToken = jwt.sign(
          {
            user_email: decoded.user_email,
          },
          SECRET_KEY,
          {
            expiresIn: expiresIn,
          }
        );
        res.header("Authorization", "Bearer " + newToken);
        next();
      }
    });
  } else {
    return res.status(401).json("Problème d'autorisation");
  }
};
