var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {
    
    cb = cb || function() {};

    global.isProd = false;

    runSequence(['images', 'fonts', 'styles', 'browserify'], 'watch', cb);

});