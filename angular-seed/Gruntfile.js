"use strict";

module.exports = function(grunt) {
    var path = require("path");

    var appConfig = {
        app:"web",
        style:"styles",
        tmp:"tmp",
        test:"test",
        build:"build",
        config:"config"
    };

    require("load-grunt-config")(grunt,{
        configPath: path.join(process.cwd(), "config"),
        init: true,
        data: {
            config: appConfig
        }
    });

    //default task
    grunt.registerTask("default", "Running all default tasks", function() {
        grunt.log.write("angularSeed is running...").ok();
        grunt.task.run(["jshint", "karma","clean","sass","autoprefixer","connect:livereload","watch"]);
    });

    // Grunt Tasks
    grunt.registerTask("run", [
        "clean",
        "sass",
        "autoprefixer",
        "connect:livereload",
        "watch"
    ]);
};