// @ts-check
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
/**@type {any} */
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');


// config helpers:
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || [];
const when = (condition, config, negativeConfig) =>
  condition ? ensureArray(config) : ensureArray(negativeConfig);

// primary config:
const title = 'Aurelia Navigation Skeleton';
//const outDir = path.resolve(__dirname, project.platform.output);
const outDir = path.resolve(__dirname, 'dist');
// const srcDir = path.resolve(__dirname, 'src');
// const nodeModulesDir = path.resolve(__dirname, 'node_modules');
// const baseUrl = '/';

const cssRules = [
  { loader: 'css-loader' }
  // ,
  // {
  //   loader: 'postcss-loader',
  //   options: { plugins: () => [
  //     require('autoprefixer')(),
  //     require('cssnano')()
  //   ] }
  // }
];

const sassRules = [
  {
    loader: "sass-loader",
    options: {
      sassOptions: {
        includePaths: ['node_modules']
      }
    }
  }
];
/**
 * @returns {import('webpack').Configuration}
 */
module.exports = function({ production = '' } = {} ) {
  return {
    mode: production === 'production' ? 'production' : 'development',
    output: {
      path: outDir,
      filename: production ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js',
      sourceMapFilename: production ? '[name].[chunkhash].bundle.map' : '[name].[hash].bundle.map',
      chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[hash].chunk.js'
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
      ],
      alias: {
        'src': path.resolve(__dirname, 'src'),
        // alias all aurelia packages to parent node_modules,
        // so packages & core modules will use the same version of core modules
        ...([
          'polyfills',
          'dependency-injection',
          'loader',
          'pal',
          'pal-browser',
          'metadata',
          'logging',
          'binding',
          'path',
          'framework',
          'history',
          'history-browser',
          'event-aggregator',
          'router',
          'route-recognizer',
          'templating',
          'templating-binding',
          'templating-resources',
          'templating-router',
          'task-queue',
        ].reduce(
          /**
           * @param {Record<string, string>} map
           */
          (map, packageName) => {
            const aureliaName = `aurelia-${packageName}`;
            map[aureliaName] = path.resolve(__dirname, `../node_modules/${aureliaName}`);
            return map;
          },
          {}
        )),
        // alias all packages to src code
        ...([
          'base',
          'buttons'          
        ].reduce((map, packageName) => {
          const mappedPackagedName = `@aurelia-ej2-bridge/${packageName}`;
          map[mappedPackagedName] = path.resolve(__dirname, `../packages/${packageName}/src`);
          return map;
        }, {}))
      },

    },
    entry: {
      app: './src/main.ts'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        // CSS required in JS/TS files should use the style-loader that auto-injects it into the website
      // only when the issuer is a .js/.ts file, so the loaders are not applied inside html templates
      {
        test: /\.css$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: ['style-loader', 'css-loader']        
      },
      {
        test: /\.css$/i,
        issuer: [{ test: /\.html$/i }],
        // CSS required in templates cannot be extracted safely
        // because Aurelia would try to require it again in runtime
        use: cssRules
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, ...cssRules, ...sassRules
        ],
        issuer: /\.[tj]s$/i
      },
      {
        test: /\.scss$/,
        use: [...cssRules, ...sassRules],
        issuer: /\.html?$/i
      },
          // embed small images and fonts as Data Urls and larger ones as files:
        { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
        // load these fonts normally, as files:
        { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
      ]
    },
    plugins: [
      new AureliaWebpackPlugin.AureliaPlugin({
        aureliaApp: undefined,
        entry: undefined,
        dist: 'es2015',
      }),
      // note that following config is for webpack aliasing to source code
      // it won't be necessary for real app
      new AureliaWebpackPlugin.ModuleDependenciesPlugin({
        '@aurelia-ej2-bridge/buttons': [
          './index.ts'
        ]
      }),
      new MonacoWebpackPlugin(),
      new HtmlWebpackPlugin({

        template: './index.ejs'
      })
    ]
  }
}
