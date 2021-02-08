const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.html"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        "node_modules",
        "src/node_modules/@fortawesome/fontawesome-free/"
      ]
    }
  })
}

module.exports = {
  resolve: {
    extensions: []
},
  module: {


    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              purgecss,
              require("autoprefixer"),
            ]
          },
        },
      },
    ],
  },
};
