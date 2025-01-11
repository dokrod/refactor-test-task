const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const paths = {
  scss: './assets/scss/**/*.scss',
  css: './assets',
};

function styles() {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer()) 
    .pipe(cleanCSS()) 
    .pipe(gulp.dest(paths.css));
}

function watch() {
  gulp.watch(paths.scss, styles);
}

exports.default = gulp.series(styles, watch);
