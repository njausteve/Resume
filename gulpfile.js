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
    changed = require('gulp-changed'),
    bytediff = require('gulp-bytediff'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del'),
    runSequence = require('run-sequence'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    size = require('gulp-size'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    humans = require('gulp-humans'),
    saveLicense = require('uglify-save-license'),
    htmlReplace = require('gulp-html-replace'),
    ngAnnotate = require('gulp-ng-annotate'),
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




// browser-sync tasks
///////////////////////////////////////////////////////
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

// Start webserver
gulp.task('serve', function (done) {
    return browserSync({
        server: {
            baseDir: './src/'
        },
        port: 8989
    }, done);
});

// Start webserver from _build folder
gulp.task('serve:build', ['build'], function (done) {
    return browserSync({
        server: {
            baseDir: './_build/'
        },
        port: 3000
    }, done);
});

///////////////////////////////////////////////////////
// browser-sync tasks  END


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

//human.text configuration

gulp.task('humans', function () {
    return gulp.src('./src/index.html')
        .pipe(humans({
            team: [{
                "Designer, Developer, maintainer": "Stephen njau",
                Twitter: "@Dominosteve",
                emai: 'njaustevedomino@gmail.com'
            }],
            thanks: [
                'Node',
                'Gulp'
            ],
            site:
            {
                'Standards': 'HTML5, CSS3',
                'Components': 'Bootstrap.css, AngularJs, OclazyLoad ',
                'Softwares': 'Visual studio code, SublimeText3'
            },
            note: 'Built with love by Stephen njau .'
        }))
        .pipe(gulp.dest('./_build/'));

});

// gulp watch task

gulp.task('watch', function () {

    gulp.watch('./src/assets/css/*.min.css', function (file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch(['./src/*.html', './src/app/**/**/*.html'], ['bs-reload']);
    gulp.watch(['./src/app/*.js', '.`/src/app/**/**/*.controller.js'], ['bs-reload']);
    gulp.watch(['./src/assets/css/*.css', './src/assets/css/**/*.css'], ['bs-reload']);
    gulp.watch(sassInput, ['sass']);
});

// clean build folder

gulp.task('clean-build', function (cb) {

    del([
        './_build'
    ], cb);

    // if we don't want to clean any file we can use negate pattern
    //'!dist/mobile/deploy.json'
});








// copy bower components to lib folder

gulp.task('copy:bower', ['copy:externalModules'],  function () {
    gulp.src(['./src/bower-components/bootstrap/dist/jquery.min.js',
        './src/bower-components/angular-ui-router/release/angular-ui-router.min.js',
        './src/bower-components/bootstrap/dist/css/bootstrap.min.css',
        './src/bower-components/components-font-awesome/css/font-awesome.min.css',
        './src/bower-components/angular/angular.min.js',
        './src/bower-components/angular-loading-bar/build/loading-bar.min.js',
        './src/bower-components/angular-animate/angular-animate.min.js',
        './src/bower-components/ng-notify/dist/*.min.*',
        './src/bower-components/angular-sanitize/angular-sanitize.min.js',
        './src/bower-components/oclazyload/dist/ocLazyLoad.min.js'

    ])
        .pipe(gulp.dest('./src/assests/lib/'));
});

//copy bower components that are loaded when view loads (eg Ng-map in contacts state).

gulp.task('copy:externalModules', function () {
    gulp.src([ './src/bower-components/ngmap/build/scripts/ng-map.min.js'])
        .pipe(gulp.dest('./src/app/externalModules'));
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



// Optimize images

gulp.task('images', function () {

    return gulp.src(['./src/assests/images/*.*','./src/assests/images/*/*.*'])
        .pipe(changed('./_build/src/assests/images/'))
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('./_build/assests/images/'));

});


// html minification


gulp.task('minify-html', function () {

    gulp.src(['./src/**/**/**/*.html', '!./src/bower-components/**/*.html'])
        .pipe(bytediff.start())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest('./_build/'));


});

// copy fonts from a module outside of our project (like Bower)
// need to update !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
gulp.task('fonts', function () {
    gulp.src('./src/**/**/**/*.{ttf,woff,woff2,eof,eot}')
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest('./_build/assests/fonts'));
});





// minify index file 

gulp.task('minify-index-html', function () {
    gulp.src(['./_build/*.html'])
        .pipe(bytediff.start())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest('./_build/'));

});

// // minify css
// // minifyinf @src/assests/css/
// gulp.task('copy-css', function () {
//     gulp.src(['./src/assests/css/*.css',''])
//         .pipe(bytediff.start())
//         .pipe(autoprefixer(['last 2 versions']))
//         .pipe(cleanCSS())
//         .pipe(bytediff.stop(bytediffFormatter))
//         .pipe(gulp.dest('./_build/assests/css/'));

// });

// ngAnnotate and minify JS

gulp.task('minify-js', function () {
    gulp.src(['./src/app/**/*.js', '!./src/app/**/*.spec.js', '!./src/app/*.js'])
      .pipe(ngAnnotate({
            add: true,
            single_quotes: true
        }))  
        .pipe(bytediff.start())
        .pipe(uglify({
            compress: { 
                drop_console: true 
                  },
            output: {
                comments: saveLicense
            }
<<<<<<< HEAD
        })) 
=======
        }))
        .on('error', notify.onError({
            title: 'minify js Failed',
            message: `Error(s) occurred during compile! : <%= error.message %>`
        }))
<<<<<<< HEAD
>>>>>>> f0d8c6f... Remove console logs for prod : gulp
=======
>>>>>>> f0d8c6f... Remove console logs for prod : gulp
        .pipe(bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest('./_build/app'));
});


//index.html build
// script/css concatenation and versioning 

gulp.task('usemin', function () {

    return gulp.src('./src/index.html')
        //add template path

        .pipe(htmlReplace({
            'templates': '<script type="text/javascript" src= "js/templates.js" ></scripts>   '
        }))
        .pipe(usemin({
            css: [cleanCSS(), rev()],
            angularlibs: [rev()],
            appcomponents: [ngAnnotate({
                add: true,
                single_quotes: true
            }), uglify({

                output: {
                    comments: saveLicense
                }
            }), rev()]
        }))
        .pipe(gulp.dest('./_build/'));
});



//calculate build folder size 
gulp.task('build:size', function () {
    var s = size();


    return gulp.src('./_build/**/*.*')
        .pipe(s)
        .pipe(notify({
            onLast: true,
            message: function () {
                return 'Total build size' + s.prettySize;
            }
        }));
});


//copy All files at the root Level (app)

gulp.task('copy', function () {

    return gulp.src(
        ['./src/*',
            '!./src/*.html',
            '!./src/bower-components/',
            '!./src/*.js'
        ], {
            dot: true
        })
        .pipe(gulp.dest('./_build'));


});





//SUPPORTING FUNCTIONS
/////////////////////////////////////////////////////////

function bytediffFormatter(data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}

function formatPercent(num, precision) {
    return (num * 100).toFixed(precision);
}


//Default task to run with 'gulp' command.
//this task will run browsersync & use gulp watch to detect changes in the files.
//When a file is changed, Browsersync actuates the emmited event with the given file path.

// default task
gulp.task('default', ['browser-sync', 'watch', 'sass']);



/**
 * build task:
 * 1. clean /_build folder
 * 2. compile SASS files, minify and uncss compiled css
 * 3. copy and minimize images
 * 4. minify and copy all HTML files into $templateCache
 * 5. build index.html
 * 6. minify and copy all JS files
 * 7. copy fonts
 * 8. show build folder size
 * 9. copy files from root folders like favicon
 * 10. Generate Service Worker at build folder
 */
gulp.task('build', function (callback) {
    runSequence(
        'clean-build',
        'sass',
        'humans',
        'minify-js',
        'minify-html',
        'images',
        'fonts',
        'usemin',
        'minify-index-html',
        'build:size',
        'copy',

        callback);
});