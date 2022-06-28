import expressJwt from "express-jwt";

export const requireAuth = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["H256"],
});
