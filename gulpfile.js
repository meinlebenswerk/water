var gulp = require('gulp');
var fs   = require('fs');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var less  = require('gulp-less');

var connect = require('gulp-connect');

gulp.task('copy-css', function(){
  return gulp.src('source/style.css')
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('less', function () {
  return gulp.src('source/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('copy-images', function(){
  return gulp.src(['source/images/**/*.png','source/images/**/*.svg','source/images/**/*.jpg'])
    .pipe(gulp.dest('build/images/'))
    .pipe(connect.reload());
});

gulp.task('copy-images-jpg', function(){
  return gulp.src('source/images/**/*.jpg')
    .pipe(gulp.dest('build/images/'))
    .pipe(connect.reload());
});


gulp.task('copy-js', function(){
  return gulp.src('source/*.js')
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('hbs', function () {
    var templateData = JSON.parse(fs.readFileSync('source/io_mainpage.json'));
    var options = {
        ignorePartials: true,
        partials : {},
        batch : ['./source/partials'],
        helpers : {
            capitals : function(str){
                return str.toUpperCase();
            }
        }
    }

    return gulp.src('source/templates/*.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename(function (path) {
          path.extname = ".html";
        }))
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(["source/**/*.hbs","source/**/*.json"] ,gulp.series('hbs'));
  // gulp.watch("source/**/*.css",gulp.series('copy-css'));
  gulp.watch("source/**/*.less",gulp.series('less'));
  gulp.watch("source/**/*.png",gulp.series('copy-images'));
  gulp.watch("source/**/*.js",gulp.series('copy-js'));
});

gulp.task('default', gulp.series('less', 'copy-js', 'copy-images',gulp.parallel('watch','connect','hbs')));
