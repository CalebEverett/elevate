var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat');
    path = require('path');

var env,
    jsSources,
    sassSources,
    htmlSources,
    outputDir,
    sassStyle;

env = 'production';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}

jsFooterSources = [
  'components/scripts/jqloader.js',
  'components/scripts/TweenMax.min.js',
  'components/scripts/jquery.scrollmagic.min.js',
  'components/scripts/footerscript.js',
  'components/scripts/charts.js',
];

jsHeaderSources = [
  'components/scripts/headerscript.js',
];

sassSources = ['components/sass/style.scss'];
htmlSources = [outputDir + '*.html'];

gulp.task('jsFooter', function() {
  gulp.src(jsFooterSources)
    .pipe(concat('footerscript.js'))
    .pipe(browserify())
    .on('error', gutil.log)
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload())
});

gulp.task('jsHeader', function() {
  gulp.src(jsHeaderSources)
    .pipe(concat('headerscript.js'))
    .pipe(browserify())
    .on('error', gutil.log)
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      css: outputDir + 'css',
      image: outputDir + 'images',
      style: sassStyle,
      require: ['susy', 'breakpoint']
    })
    .on('error', gutil.log))
//    .pipe(gulp.dest( outputDir + 'css'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsFooterSources, ['jsFooter']);
  gulp.watch(['components/sass/*.scss', 'components/sass/*/*.scss'], ['compass']);
  gulp.watch('builds/development/*.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload())
});

// Copy images to production
gulp.task('move', function() {
  gulp.src('builds/development/images/**/*.*')
  .pipe(gulpif(env === 'production', gulp.dest(outputDir+'images')))
});

gulp.task('default', ['watch', 'html', 'jsFooter', 'jsHeader','compass', 'move', 'connect']);
