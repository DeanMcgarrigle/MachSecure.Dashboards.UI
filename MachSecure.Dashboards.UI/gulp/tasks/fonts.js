var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');

gulp.task('fonts', function() {

    return gulp.src(config.fonts.src)
        .pipe(changed(config.fonts.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.fonts.dest))
});
