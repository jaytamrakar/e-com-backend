const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDE5MjI0Yjg5NWYzYWZjZGFmYTk5YyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0NjAyODM1fQ.om6OQilVO4g8Ge7Yf6RgR2tRK_RB2d1A1j4eYCQQlno";
  return token;
};
