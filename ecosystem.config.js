module.exports = {
  apps: [
    {
      name: 'uap-project-api',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        NODE_PORT: '1337'
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};
