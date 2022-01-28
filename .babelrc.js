module.exports = {
  presets: [["next/babel", { "preset-react": { runtime: "automatic" } }]],
  plugins: [
    "babel-plugin-macros",
    ["babel-plugin-styled-components", { ssr: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }]
  ],
};
