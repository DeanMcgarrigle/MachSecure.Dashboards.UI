var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var plumber = require('gulp-plumber');

gulp.task('styles', function () {

    return gulp.src(config.styles.src)
        .pipe(plumber())
        .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
        .pipe(concatCss("styles.css"))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));
});