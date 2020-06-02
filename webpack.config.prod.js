const path = require("path");
// const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  mode: env,

  entry: {
    main: "./app/js/app.js",
  },
  output: {
    filename: "[name]-bundle-[contenthash:6].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[contenthash:6].[ext]",
              // outputPath: "images",
              // publicPath: "images",
            },
          },
          // {
          // loader: "image-webpack-loader",
          // ,
          // options: {
          //   mozjpeg: {
          //     quality: 70,
          //     progressive: true
          //   }
          // }
          // },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage", corejs: "2.0.0" }],
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      title: "Dogs API",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      // favicon: "./app/images/favicon-32x32.png",
    }),
    // new CopyPlugin([
    // {
    // from: "app/images/projects",
    // to: "images/projects",
    // },
    // ]),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:6].css",
      chunkFilename: "[id].css",
    }),
  ],
};
