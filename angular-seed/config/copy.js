module.exports = function(grunt, options) {
    return {
    	main: {
            files: [{
                expand: true,
                src: "<%= config.tmp %>/assets/**/*.min.css",
                dest: "<%= config.app %>/assets/styles/",
                flatten: true,
                filter: "isFile"
            }]
        }
    };
};