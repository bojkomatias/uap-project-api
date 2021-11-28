module.exports = {
  apps: [
    {
      name: 'uap-project-api',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        NODE_PORT: '1337'
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};
