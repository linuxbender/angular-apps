module.exports = function (grunt, options) {
    return {
        options: {
            reporter: require("jshint-stylish")
        },
        all: [
            "<%= config.config %>/*.js",
            "<%= config.test %>/specs/*.js",
            "<%= config.app %>/app/**/*.js",
        ]
    };
};