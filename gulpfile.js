const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

gulp.task('sass', () =>
	gulp
		.src([ './src/Resources/Sass/main.scss' ])
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload())
);

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./src/Resources/Sass/*.scss', gulp.series('sass'));
	gulp.watch('./src/Components/**/*.scss', gulp.series('sass'));
	gulp.watch('./src/Containers/**/*.scss', gulp.series('sass'));
});
