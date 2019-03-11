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
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})
gulp.task('indexswiper',function(){
	gulp.src('./src/js/indexswiper.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})

gulp.task('default',function(){
    gulp.src('./src/js/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src'))
});
gulp.task('indexjs',function(){
	gulp.src('./src/index.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})
gulp.task('loginsass',function(){
	gulp.src('./src/sass/login.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})

gulp.task('default',function(){
    gulp.src('./src/js/login.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src'))
});
gulp.task('loginjs',function(){
	gulp.src('./src/login.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})
gulp.task('default',()=>{
	gulp.watch(['./src/sass/index.scss','./src/js/indexswiper.js','./src/index.js','./src/sass/login.scss','./src/login.js'],['indexsass','indexswiper','indexjs','loginsass','loginjs']);
})