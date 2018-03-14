module.exports = function(grunt, options) {
    return {
        bower: {
            files: ['bower.json']
        },
        js: {
            files: [
                "<%= config.app %>/app/{,*/}*.js",
                "<%= config.app %>/app/common/{,*/}*.js",
                "<%= config.app %>/app/reportBuilder/{,*/}*.js"
            ],
            options: {
                livereload: "<%= connect.options.livereload %>"
            }
        },
        gruntfile: {
            files: ["Gruntfile.js"]
        },
        livereload: {
            files: [
                "<%= config.app %>/{,*/}*.html",
                "<%= config.app %>/app/{,*/}*.html",
                "<%= config.app %>/app/reportBuilder/{,*/}*.html",
                "<%= config.app %>/assets/styles/{,*/}*.css",
                "<%= config.app %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
            ],
            options: {
                livereload: "<%= connect.options.livereload %>"
            }
        },
        sass: {
            files: ["<%= config.app %>/assets/sass/{,*/}*.scss", "<%= config.app %>/assets/sass/components/{,*/}*.scss"],
            tasks: ["sass","autoprefixer"],
            options: {
                livereload: "<%= connect.options.livereload %>"
            }
        }
    };
};