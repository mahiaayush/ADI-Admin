const del = require('del');
const gulp = require('gulp');
const path = require('path');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const tsProject = ts.createProject('tsconfig.json');
const distFolder = 'build';
const srcFolder = 'src';
const rootFolder = __dirname;
// build the source code
gulp.task('build:src', () => {
  const tsResult = tsProject
    .src()
    .pipe(sourcemaps.init({ identityMap: true, loadMaps: true }))
    .pipe(tsProject())
     /**
      * Enable this to ignore typescript compilation errors
    .on('error', (err) => {
      console.log("Error in gulp build :: ",err)
    });
      **/

  return tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest(distFolder));
});

// copy static assets from src
gulp.task('build:copy', () => {
  return gulp
    .src(path.join(rootFolder, `**/*.{json,html,csv,yaml,xml.txt}`))
    .pipe(gulp.dest(`${distFolder}/`));
});


// copy node_modules
gulp.task('build:copy:nodeModules', () => {
  return gulp
    .src(path.join(rootFolder, 'node_modules/**/*.*'))
    .pipe(gulp.dest(`${distFolder}/node_modules`))
})

// clean the build folder
gulp.task('build:clean', () => {
  return del([distFolder]);
});

// trigger build task
gulp.task('build', gulp.series('build:clean', gulp.parallel('build:src', 'build:copy','build:copy:nodeModules')));
gulp.task('build:server', gulp.series('build:clean', gulp.parallel('build:src', 'build:copy')));
