module.exports = {

    'serverport': 3000,

    'styles': {
        'src' : 'app/styles/**/*.css',
        'dest': 'build/css'
    },

    'scripts': {
        'src' : 'app/js/**/*.js',
        'dest': 'build/js'
    },

    'images': {
        'src' : ['app/images/**/*'],
        'dest': 'build/images'
    },

    'fonts': {
        'src' : ['app/fonts/**/*'],
        'dest': 'build/fonts'
    },

    'views': {
        'watch': [
            'nancy/views/index.html'
        ],
        'src': 'app/views/**/*.html'
    },

    'dist': {
        'root'  : 'build'
    },

    'browserify': {
        'entries'   : ['./app/js/index.js'],
        'bundleName': 'index.js',
        'sourcemap' : true
    }
};