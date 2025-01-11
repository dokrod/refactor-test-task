const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp.src('assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'));
}

function watch() {
  gulp.watch('assets/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watch;