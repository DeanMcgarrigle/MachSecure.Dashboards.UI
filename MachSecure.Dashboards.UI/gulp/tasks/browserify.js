var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var handleErrors = require('../util/handleErrors');
var debowerify = require('debowerify');
var partialify = require('partialify');
var ngAnnotate = require('browserify-ngannotate');
var plumber = require('gulp-plumber');

function buildScript(file) {

    var bundler = browserify({
        entries: config.browserify.entries,
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }, watchify.args);

    if (!global.isProd) {
        bundler = watchify(bundler);
        bundler.on('update', function () {
            rebundle();
        });
    }

    var transforms = [
        babelify,
        debowerify,
        ngAnnotate,
        partialify,
        'brfs'
    ];

    transforms.forEach(function (transform) {
        bundler.transform(transform);
    });

    function rebundle() {
        var stream = bundler.bundle();
        var createSourcemap = global.isProd && config.browserify.sourcemap;

        gutil.log('Rebundle...');

        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulpif(!global.isProd, plumber()))
            .pipe(gulpif(createSourcemap, buffer()))
            .pipe(gulpif(createSourcemap, sourcemaps.init()))
            .pipe(gulpif(global.isProd, streamify(uglify({
                compress: {drop_console: true},
                mangle: false
            }))))
            .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
            .pipe(gulp.dest(config.scripts.dest))
    }

    return rebundle();

}

gulp.task('browserify', function () {

    return buildScript(config.browserify.bundleName);

});
