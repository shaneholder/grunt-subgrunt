module.exports = function (grunt) {
	grunt.registerTask('failingTask', function () {
		grunt.fatal('I failed', 3);
	});
};
