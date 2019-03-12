//通过require()导入所需模块
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

//创建并发布任务
gulp.task('indexswiper',function(){
	gulp.src('./src/js/indexswiper.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})

gulp.task('es5',function(){
    gulp.src('./src/js/es6/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src/js/es6'))
});
gulp.task('js',function(){
	gulp.src('./src/js/es5/*.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})
gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})
gulp.task('default',()=>{
	gulp.watch(['./src/js/es6/*.js','./src/js/es5/*.js','./src/sass/*.scss'],['es5','js','sass']);
})