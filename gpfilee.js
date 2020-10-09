"use strict";

const webpack = require('webpack-stream');
const { src, dest, series, parallel, watch } = require('gulp');
const { reload, init, stream } = require('browser-sync');

const dist = './dist/';

const copyHtml = () => {
  return src('./src/index.html')
          .pipe(dest(dist))
          .pipe(stream());
}

const buildJs = () => {
  return (
    src('./src/js/index.js')
      .pipe(webpack({
        mode: 'development',
        output: {
          filename: 'main.js'
        },
        watch: false,
        devtool: 'source-map'
      }))
      .pipe(dest(dist))
      .on('end', reload)
  )
}

const buildProdJs = () => {
  return (
    src('./src/js/index.js')
      .pipe(webpack({
        mode: 'production',
        output: {
          filename: 'main.js'
        },
        watch: false,
        devtool: 'source-map'
      }))
      .pipe(dest(dist))
  )
}

const copyAssets = () => {
  return src('./src/assets/**/*.*')
    .pipe(dest(dist + 'assets'))
}

const watchChanges = () => {
  init({
    server: './dist/',
    port: 4000,
    notify: true
  });

  watch('./src/index.html', copyHtml);
  watch('./src/assets/**/*.*', copyAssets);
  watch('./src/js/**/*.js', buildJs);
}

const build = async () => {
  return await parallel(copyHtml, copyAssets, buildJs)();
}

exports.build = build;
exports.prodbuild = buildProdJs;
exports.default = series(build, watchChanges);