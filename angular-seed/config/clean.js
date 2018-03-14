module.exports = function(grunt, options) {
    return {
    	clean: [
            "!<%= config.tmp %>/**/*.min.css",
            "<%= config.app %>/assets/less/**/*.css",
            "<%= config.app %>/assets/sass/**/*.css",
            "<%= config.tmp %>/**/*.css",
        ]
    };
};