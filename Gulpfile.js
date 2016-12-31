var gulp = require('gulp');
var uglify = require("gulp-uglify");
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-js', function () {
    gulp.src('js/*.js') 
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('styles/*.scss',['styles']);
});
