/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    notify = require("gulp-notify"),
    autoprefixer = require('gulp-autoprefixer'),
    sassdoc = require('sassdoc'),
    sourcemaps = require('gulp-sourcemaps');


// input values
var sassInput = './src/assests/sass/*.scss',
    cssOutput = './src/assests/css';

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var sassdocOptions = {
    dest: './docs/sassDocs'
};


// default task
gulp.task('default', ['browser-sync', 'watch', 'sass']);

// browser-sync task
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './src/'
        },
        port: 8800
    });
});

// Reload all browsers

gulp.task('bs-reload', function () {
    browserSync.reload();
});

//   sass task

gulp.task('sass', function () {
    return gulp
        .src(sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', notify.onError({
            title: 'SASS Failed',
            message: `Error(s) occurred during compile! :`
        }))

        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cssOutput))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify({
            message: 'Styles task complete'
        }));

});

// generate sassDocs

gulp.task('sassdoc', function () {
    return gulp
        .src(sassInput)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});

// gulp watch task

gulp.task('watch', function () {

    gulp.watch('./src/assets/css/*.min.css', function (file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch(['./src/*.html', './src/app/**/**/*.html'], ['bs-reload']);
    gulp.watch(['./src/app/*.js', '.`/src/app/**/**/*.js'], ['bs-reload']);
    gulp.watch(['./src/assets/css/*.css', './src/assets/css/**/*.css'], ['bs-reload']);
    gulp.watch(sassInput, ['sass']);
});



// copy npm components to lib folder


gulp.task('copy:bower', function () {
    gulp.src(['./src/bower-components/bootstrap/dist/jquery.min.js',
            './src/bower-components/bootstrap/dist/css/bootstrap.min.css',
            './src/bower-components/components-font-awesome/css/font-awesome.min.css',
            './src/bower-components/angular/angular.min.js',
            './src/bower-components/angular-animate/angular-animate.min.js'
        ])
        .pipe(gulp.dest('./src/assests/lib/'));
});





// production 

gulp.task('prod', ['sassdoc'], function () {
    return gulp
        .src(sassdocOptions)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(cssOutput));
});