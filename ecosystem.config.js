module.exports = {
  apps: [
    {
      name: "aspect-web",
      script: ".next/standalone/Desktop/Aspect/aspect-hospitalar-web/server.js",
      args: "-p 3001",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
