module.exports = function(grunt, options) {
    return {
        options: {
            port: 9000,
            hostname: "localhost",
            base: "<%= config.app %>/",
            livereload: 35729
        },
        livereload: {
            options: {
                open: true,
                middelware: function() {
                    return [
                        connect.static("<%= config.tmp %>"),
                        connect().use(
                            "<%= config.app %>/assets/libs",
                            connect.static("./vendor/libs")
                        ),
                        connect.static(appConfig.app)
                    ];
                }
            }
        }
    };
};