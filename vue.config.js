const path = require("path");
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 存放less变量文件的路径
        path.resolve(__dirname, "./src/assets/less/parameter.less"),
      ],
    },
  },
  lintOnSave: false,
  transpileDependencies: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],
  parallel: false,
  configureWebpack: {
    plugins: [
      new CKEditorWebpackPlugin({
        language: "en",
        // translationsOutputFile: /app/,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts|\.tsx$/,
          exclude: /node_modules/,
          use: [
            "babel-loader",

            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.exclude.add(path.join(__dirname, "node_modules", "@ckeditor"));
    config.module
      .rule("cke-svg")
      .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
      .use("raw-loader")
      .loader("raw-loader");
    config.module
      .rule("cke-css")
      .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
      .use("postcss-loader")
      .loader("postcss-loader")
      .tap(() => {
        return {
          postcssOptions: styles.getPostCssConfig({
            themeImporter: {
              themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
            },
            minify: true,
          }),
        };
      });
  },
};
