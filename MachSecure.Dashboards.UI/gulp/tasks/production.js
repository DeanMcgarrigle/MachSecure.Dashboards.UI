var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

    cb = cb || function() {};

    global.isProd = true;

    runSequence(['images', 'fonts', 'styles', 'browserify'], cb);

});
