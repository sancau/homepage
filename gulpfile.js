var gulp = require('gulp'),

    typescript = require('gulp-typescript'),
    tsConfig = require('./tsconfig.json'),

    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence');


var devBuildLocation = 'builds/development/',
    prodBuildLocation = 'builds/production/',
    srcLocation = 'src/';


// TYPESCRIPT compilation
gulp.task('typescript', function() {
    return gulp.src(srcLocation + '**/*.ts')
    .pipe(
        plumber({
            handleError: function(err) {
                console.log(err);
                this.emit('end');
            }
        })
    )
    .pipe(typescript(tsConfig.compilerOptions))
    .pipe(gulp.dest(devBuildLocation + 'js'));
});


// Task groups
gulp.task('onTypescriptChange', function(){
    runSequence(
        'typescript'
    );
});

// Watchers
gulp.task('watch', function(){
    gulp.watch(srcLocation + '**/*.ts', ['onTypescriptChange']);
});


// Facade tasks
gulp.task('dev', function(){
    runSequence(
        'typescript',
        'watch'
    );
});

