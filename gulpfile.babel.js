'use strict';


import run from 'run-sequence';
import rimraf from 'rimraf';
import proc from 'child_process';
import gulp from 'gulp';
import shell from 'gulp-shell';
import liveServer from 'gulp-live-server';
import babel from 'gulp-babel';


const paths = {
  server: {
    jsFiles: 'server/**/*.js',
  },  
  dest: 'dist'
};

let server = liveServer('server/index.js',{env: {NODE_ENV: 'development'}});

//Transform back-end ES6 to ES5
//only transform features not supported by node v5
gulp.task('babel', cb => {
  return gulp.src(paths.server.jsFiles)
  .pipe(babel({
    presets: ['es2015-node5']
  }))
  .pipe(gulp.dest(paths.dest));
});
/*
  Server
*/
gulp.task('start', () => {
  //server('server/index.js', {env: {NODE_ENV: 'development'}}, false|35729|{}).start();
  server.start();
});
/*
  Restart
*/
gulp.task('restart', (file) =>{
  server.notify.apply(server, [file]);
});
/*
  Watching for changes
*/
gulp.task('watch', cb => {
    gulp.watch([
      paths.server.jsFiles,
    ], function(file){
      console.log('\x1b[33m%s\x1b[0m', 'changed file: ' + file.path);
      server.start.bind(server)()
    });
});
/*
  Task thats run the application
*/
gulp.task('default', cb => {
  run('babel', 'start', 'watch', cb);
});

/*
  Clean
*/
gulp.task('clean', cb => {
  rimraf(paths.dest, cb);
});

/*
  Build application
*/
gulp.task('build', cb =>{
  run('clean', 'babel', cb);
});