'use strict'

const gulp = require ('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const del = require('del');
const prettify = require('gulp-jsbeautifier');
const bulkSass = require('gulp-sass-bulk-import');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const newer = require('gulp-newer');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

gulp.task('img', () =>
    gulp.src('src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('sass', function(){
    return gulp.src("src/scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(bulkSass())
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 10'] }))
        .pipe(cssnano({ zIndex: false }))
        .pipe(sourcemaps.write('.'))
        //.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/css"))
});

gulp.task('clean', function() {
  return del('build')
});

gulp.task('html', function() {
  return gulp.src(['src/*.html'], {since: gulp.lastRun('html')})
      .pipe(newer('dist/'))
      .pipe(gulp.dest('dist/'))
});

gulp.task('resources', function() {
  return gulp.src(['src/resources/**'], {since: gulp.lastRun('resources')})
      .pipe(newer('dist/'))
      .pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function() {
  return pipeline(
      gulp.src('src/scripts/*.js', {since: gulp.lastRun('scripts')}),
      // uglify(),
      gulp.dest('dist/scripts'))
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('sass'),
  gulp.parallel('img'),
  gulp.parallel('html'),
  gulp.parallel('scripts'),
  gulp.parallel('resources'))
);

gulp.task('watch', function() {
  gulp.watch('src/scss/', gulp.series('sass'))
  gulp.watch('src/images', gulp.series('img'))
  gulp.watch('src/resources/', gulp.series('resources'))
  gulp.watch('src/', gulp.series('html'))
  gulp.watch('src/scripts/', gulp.series('scripts'))
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist'
  });

  browserSync.watch('dist').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build',gulp.parallel('watch', 'serve')));
gulp.task('default', gulp.series('dev'));
