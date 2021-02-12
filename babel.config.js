module.exports = {
  presets: 
  [
    "@babel/preset-env",
    // automatic runtime auto imports the functions that JSX transpiles to.
    ["@babel/preset-react", { runtime: "automatic"}]
  ],
}