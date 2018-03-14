module.exports = function(grunt, options) {
    return {
    	options: {
            sourceMap: false
        },
        dist: {
            files: {
                "<%= config.tmp %>/assets/styles/app.css": "<%= config.app %>/assets/sass/app.scss",
                "<%= config.tmp %>/assets/styles/animation.css": "<%= config.app %>/assets/sass/animation.scss",
                "<%= config.tmp %>/assets/styles/callout.css": "<%= config.app %>/assets/sass/components/callout.scss"
            }
        }
    };
};