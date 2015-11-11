/// <reference path="./index.ts" />
module AppmanagerGulp {
    gulp.task('gatherConfigs', function() {
        var stream = gulp.src('../index.ts')

            .pipe(gulp.dest("../../"));
        return stream;
    });

    gulp.task('default',['gatherConfigs'], function() {
        pr.beautylog.success('Typescript compiled');
    });

    export function init() {
        //lets tell gulp to start with the default task.
        pr.beautylog.log('Starting Gulp to compile TypeScript');
        gulp.start.apply(gulp, ['default']);
    }

}