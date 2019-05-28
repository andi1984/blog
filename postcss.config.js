const path = require("path");
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("tailwind.config.js"),
    require("postcss-mixins")({
      mixinsDir: path.join(__dirname, "src/css/mixins")
    }),
    require("postcss-functions")({
      glob: path.join(__dirname, "src/css/functions", "*.js")
    }),
    require("postcss-nested"),
    require("postcss-custom-properties")({
      preserve: false
    }),
    require("postcss-custom-media")({
      importFrom: [path.join(__dirname, "src/css/_viewport.media.css")]
    }),
    require("postcss-hexrgba"),
    require("postcss-extend-rule"),
    require("autoprefixer")
  ]
};
