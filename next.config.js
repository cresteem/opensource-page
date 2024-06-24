const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath: "/opensource",
  output: "export",
  distDir: "opensource",
};

console.log(
  "\n###################################################\n",
  "Localhost: http://localhost:3000/opensource",
  "\n####################################################\n"
);
