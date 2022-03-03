module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f92d38454e92bef95035b561a6a8811'),
  },
});
