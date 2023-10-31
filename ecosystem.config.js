module.exports = {
  apps: [
    {
      name: "Ozove",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
