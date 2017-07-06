/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    notify = require("gulp-notify");

// create a default  task
gulp.task('default', ['browser-sync', 'sass'], function() {

});



// browser-sync  task
gulp.task('browser-sync', function() {
    bs.init({
        server: { baseDir: './src/' },
        port: 8800
    });
});


gulp.task('sass', function() {
    return gulp.src('./src/assests/scsss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(bs.reload({ stream: true }));
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch("*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});