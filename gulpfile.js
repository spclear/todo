const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const webpack = require('webpack-stream');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass');
const beautify = require('gulp-beautify');
const { src } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

const distFolder = './dist/';
const srcFolder = './src/';

function html() {
  return (
    gulp.src(srcFolder + 'index.html')
      .pipe(fileInclude())
      .pipe(beautify.html())
      .pipe(gulp.dest(distFolder))
      .pipe(browsersync.stream())
  )
}

function css() {
  return (
    gulp.src(srcFolder + 'scss/style.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulp.dest(distFolder + 'css'))
      .pipe(browsersync.stream())
  )
}

function js() {
  return (
    gulp.src(srcFolder + 'js/index.js')
      .pipe(webpack({
        mode: 'development',
        output: {
          filename: 'main.js'
        },
        watch: false,
        devtool: 'source-map'
      }))
      .pipe(gulp.dest(distFolder))
      .on('end', browsersync.reload)
  )
}

function copyAssets() {
  return (
    src(srcFolder + 'assets/**/*.*')
      .pipe(gulp.dest(distFolder + 'assets/'))
      .on('end', browsersync.reload)
  )
}

function watchChanges() {
  browsersync.init({
    server: distFolder,
    port: 3001,
    notify: false,
  })

  gulp.watch([srcFolder + '**/*.html'], html);
  gulp.watch([srcFolder + 'scss/**/*.scss'], css);
  gulp.watch([srcFolder + 'js/**/*.js'], js);
  gulp.watch('./src/assets/**/*.*', copyAssets);
}


function prodJs() {
  return (
    gulp.src(srcFolder + 'js/index.js')
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'main.js'
      },
      watch: false,
      devtool: 'source-map'
    }))
    .pipe(gulp.dest(distFolder))
    .on('end', browsersync.reload)
  )
}

function prodCss() {
  return (
    gulp.src(srcFolder + 'scss/style.scss')
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulp.dest(distFolder + 'css'))
      .pipe(browsersync.stream())
  )
}

exports.buildProd = gulp.series(html, prodCss, prodJs, copyAssets);
exports.default = gulp.series(css, html, js, copyAssets, watchChanges);