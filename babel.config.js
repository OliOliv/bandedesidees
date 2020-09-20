module.exports = {
  plugins: ["@babel/plugin-proposal-class-properties"],
  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/react", "next/babel"],
    },
    development: {
      presets: ["next/babel"],
    },
  },
};
