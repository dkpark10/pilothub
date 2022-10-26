module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        modules: false,
        targets: { esmodules: true },
        polyfills: [],
      },
    ],
  ],
  plugins: ["syntax-dynamic-import"],
};
