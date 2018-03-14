module.exports = function(grunt, options) {
    return {
    	target: {
            files: [{
                expand: true,
                cwd: "<%= config.tmp %>/assets/styles",
                src: ["*.css", "!*.min.css"],
                dest: "<%= config.tmp %>/assets/styles",
                ext: ".min.css"
            }]
        }
    };
};