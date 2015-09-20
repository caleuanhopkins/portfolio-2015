// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer= require('gulp-autoprefixer');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var del = require('del');
var minifycss = require('gulp-minify-css');
var iconify = require('gulp-iconify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var paths = {
    scss: './app/scss/base/*.scss'
};
var sass = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

var livereload = require('gulp-livereload');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    return gulp.src('app/scss/styles/*.scss')
        .pipe(sass(
            { 
                style: 'expanded',
                errLogToConsole: false,
                onError: function(err) {
                    return notify().write(err);
                },
                includePaths: ['./app/sccs/styles/'].concat(bourbon).concat(neat)
            }
        ))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('app/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss({ compatibility: 'ie8', noAdvanced: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(livereload())
        .pipe(notify({ message: 'Styles task complete' }));
});

// Concatenate & Minify JS
gulp.task('libscripts', function() {
    return gulp.src([
            'app/js/libs/react/react.js',
            'app/js/libs/jquery/dist/jquery.js',
            'app/js/libs/ladda/js/spin.js',
            'app/js/libs/ladda/js/ladda.js',
            'app/js/libs/bootstrap/dist/js/bootstrap.js',
            'app/js/libs/angular/angular.js',
            'app/js/libs/angular-animate/angular-animate.js',
            'app/js/libs/angular-bootstrap/ui-bootstrap.js',
            'app/js/libs/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'app/js/libs/angular-cookies/angular-cookies.js',
            'app/js/libs/angular-ladda/dist/angular-ladda.js',
            'app/js/libs/angular-resource/angular-resource.js',
            'app/js/libs/angular-route/angular-route.js',
            'app/js/libs/angular-sanitize/angular-sanitize.js',
            'app/js/libs/angular-touch/angular-touch.js',
            'app/js/libs/angular-ui-router/release/angular-ui-router.js',
            'app/js/libs/angular-ui-select/dist/select.js',
            'app/js/libs/angular-ui-utils/ui-utils.js',
            'app/js/libs/angular-ui-utils/ui-utils-ieshiv.js',
            'app/js/libs/angular-loading-bar/build/loading-bar.js',
            'app/js/libs/headroom.js/dist/headroom.min.js'
        ])
        .pipe(jshint())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('app/js/dist'))
        .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('app/js/dist'))
        .pipe(notify({ message: 'Library Scripts task complete' }));
});


gulp.task('libcss', function() {
    return gulp.src([
            'app/js/libs/bootstrap/dist/css/bootstrap.min.css',
            'app/js/libs/ladda/dist/ladda-themeless.min.css',
            'app/js/libs/angular-ui-select/dist/select.min.css',
            'app/js/libs/angular-loading-bar/build/loading-bar.css'
        ])
        .pipe(concat('_libs.min.css'))
        .pipe(gulp.dest('app/css/'))
});

gulp.task('scripts', function() {
    return gulp.src(
            'app/js/modules/**/**.js'
        )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('app/js/dist'))
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('app/js/dist'))
        .pipe(livereload())
        .pipe(notify({ message: 'Scripts task complete' }));
});


gulp.task('images', function() {
  return gulp.src('/app/imgs')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('/app/imgs'))
    .pipe(notify({ message: 'Images task complete' }));
});

/*gulp.task('svgs', function() {
    return iconify({
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        },
        src: 'app/imgs/svgs/*.svg',
        pngOutput: 'app/imgs/svgs-pngs',
        scssOutput: 'app/scss/svgs',
        cssOutput:  'app/css/svgs'
    })
});*/

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('app/js/modules/**', ['scripts']);
    gulp.watch('app/scss/styles/*.scss', ['sass']);
    gulp.watch('app/imgs/*', ['images']);
    gulp.watch('routes.json', ['routesjs']);
});

// Default Task
gulp.task('default', ['lint', 'libcss',  'sass', 'images','libscripts', 'scripts', 'watch']);