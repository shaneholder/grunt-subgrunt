var path = require('path');
module.exports = function (grunt) {
	grunt.registerTask('task1', function () {
		grunt.file.write('../../../tmp/successfile', 'success');
	});
};
