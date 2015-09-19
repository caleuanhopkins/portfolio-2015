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
    scss: './_assets/scss/base/*.scss'
};
var sass = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

var livereload = require('gulp-livereload');

var gfi = require('gulp-file-insert');

gulp.task('nunjucks', function () {
    nunjucksRender.nunjucks.configure(['_assets/templates/']);
    return gulp.src('_assets/templates/*.html')
        .pipe(nunjucksRender())
        .pipe(gulp.dest(''))
        .pipe(livereload())
        .pipe(notify({ message: 'Template task complete' }));
});

gulp.task('routesjs', function () {
    return gulp.src('_assets/js/libs/routes.js')
        .pipe(gfi({
            "{% routes.json %}": "routes.json"
        }))
        .pipe(gulp.dest('_assets/js/modules'))
        .pipe(notify({ message: 'Routes task complete' }));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('_assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    return gulp.src('_assets/scss/styles/*.scss')
        .pipe(sass(
            { 
                style: 'expanded',
                errLogToConsole: false,
                onError: function(err) {
                    return notify().write(err);
                },
                includePaths: ['./_assets/sccs/styles/'].concat(bourbon).concat(neat)
            }
        ))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('_assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss({ compatibility: 'ie8', noAdvanced: true }))
        .pipe(gulp.dest('_assets/css'))
        .pipe(livereload())
        .pipe(notify({ message: 'Styles task complete' }));
});

// Concatenate & Minify JS
gulp.task('libscripts', function() {
    return gulp.src([
        ])
        .pipe(jshint())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('_assets/js/dist'))
        .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('_assets/js/dist'))
        .pipe(notify({ message: 'Library Scripts task complete' }));
});


gulp.task('libcss', function() {
    return gulp.src([
        ])
        .pipe(concat('_libs.min.css'))
        .pipe(gulp.dest('_assets/css/'))
});

gulp.task('scripts', function() {
    return gulp.src(
            '_assets/js/modules/**/**.js'
        )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('_assets/js/dist'))
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('_assets/js/dist'))
        .pipe(livereload())
        .pipe(notify({ message: 'Scripts task complete' }));
});


gulp.task('images', function() {
  return gulp.src('/_assets/imgs')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('/_assets/imgs'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('svgs', function() {
    return iconify({
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        },
        src: '_assets/imgs/svgs/*.svg',
        pngOutput: '_assets/imgs/svgs-pngs',
        scssOutput: '_assets/scss/svgs',
        cssOutput:  '_assets/css/svgs'
    })
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('_assets/js/modules/**', ['scripts']);
    gulp.watch('_assets/scss/styles/*.scss', ['sass']);
    gulp.watch('_assets/imgs/svgs/*.svg', ['svgs']);
    gulp.watch('_assets/imgs/*', ['images']);
    gulp.watch('_assets/templates/*.html', ['nunjucks']);
    gulp.watch('routes.json', ['routesjs']);
});

// Default Task
gulp.task('default', ['lint', 'nunjucks', 'libcss',  'sass', 'images', 'routesjs', 'scripts', 'watch']);