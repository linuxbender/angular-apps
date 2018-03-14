module.exports = function(grunt, options) {
    return {
    	task: {
		    src: [
		      "<%= config.app %>/*.html"
		    ],
		    options: {
		    },
		    devDependencies: true
		}
    };
};