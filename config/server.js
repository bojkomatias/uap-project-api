module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  settings: {
    cors: {
      enabled: true,
      origin: ['*']
    },
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '15747947f88a7a778e6387aed06a0991'),
    },
  },
});
