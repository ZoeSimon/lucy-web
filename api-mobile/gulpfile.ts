import del from 'del';
import gulp from 'gulp';
import ts from 'gulp-typescript';

// Clean (delete) the dist folder
gulp.task('clean', () => {
  return del(['./dist']);
});

// Compile the api and create the dist folder
const tsProject = ts.createProject('tsconfig.json');
gulp.task('ts-server', () => {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

// Default `gulp` command
// Clean the dist folder, and run the api
gulp.task('default', gulp.series('clean', 'ts-server'));

// Clean the dist folder, and run the api in watch mode
gulp.task('watch', () => {
  gulp.watch(['./**/*.ts'], gulp.series('clean', 'ts-server'));
});
