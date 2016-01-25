#!/usr/bin/env node

/// <reference path="./index.ts" />
var AppmanagerGulp;
(function (AppmanagerGulp) {
    gulp.task('gatherConfigs', function () {
        var stream = gulp.src('../index.ts')
            .pipe(gulp.dest("../../"));
        return stream;
    });
    gulp.task('default', ['gatherConfigs'], function () {
        pr.beautylog.success('Typescript compiled');
    });
    function init() {
        //lets tell gulp to start with the default task.
        pr.beautylog.log('Starting Gulp to compile TypeScript');
        gulp.start.apply(gulp, ['default']);
    }
    AppmanagerGulp.init = init;
})(AppmanagerGulp || (AppmanagerGulp = {}));
/// <reference path="./index.ts" />
/// <reference path="typings/tsd.d.ts" />
/// <reference path="./appmanager.interfaces.ts" />
/// <reference path="./appmanager.gulp.ts" />
/// <reference path="./appmanager.nginx.ts" />
var gulp = require("gulp");
var path = require("path");
var pr = require("pushrocks");
var appmanager = {};
module.exports = appmanager;
