//通过require()导入所需模块
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

//创建并发布任务
gulp.task('indexsass',function(){
	gulp.src('./src/sass/index.scss')
	.pipe(sass())
	//.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})
gulp.task('default',()=>{
	gulp.watch(['./src/sass/index.scss'],['indexsass']);
})
gulp.task('indexswiper',function(){
	gulp.src('./src/js/indexswiper.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})
gulp.task('default',()=>{
	gulp.watch(['./src/js/indexswiper.js'],['indexsass','indexswiper']);
})
gulp.task('indexjs',function(){
	gulp.src('./src/js/index.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})