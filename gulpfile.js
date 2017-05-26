var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('ng-build', function(done) {
    exec('ng build', {maxBuffer: 1024 * 1024 * 500}, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});

gulp.task('ng-build-prod', function(done) {
    exec('ng build --prod', {maxBuffer: 1024 * 1024 * 500}, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});
