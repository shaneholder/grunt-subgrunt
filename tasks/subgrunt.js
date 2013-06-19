/*
 * grunt-subgrunt
 * https://github.com/shaneholder/grunt-subgrunt
 *
 * Copyright (c) 2013 Shane Holder
 * Licensed under the MIT license.
 */

'use strict'; /* global grunt */


module.exports = function(grunt) {

	function executeTaskOnModule(task, module, done) {
		grunt.log.ok('executing ' + task + ' for package ' + module);

		grunt.util.spawn({
			grunt: true,
			args: [task],
			opts: {cwd: module, stdio: [0,1,2]}
		}, function (error, result, code) {
			if (code === 0 || code === 6) {
				done();
			} else {
				done(false);
			}
		});
	}

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('subgrunt', 'Execute Grunt on a list of folders.', function() {
		var options = this.options({
			}),
			done = this.async(),
			executeOnModule = function (module, done) {
				executeTaskOnModule(options.task, module, done);
			};

		this.files.forEach(function(f) {
			var modules = f.src.filter(function(moduleDir) {
					if (grunt.file.isDir(moduleDir) && grunt.file.exists(moduleDir, 'Gruntfile.js')) {
						return true;
					} else {
						return false;
					}
				});
			grunt.util.async.forEachSeries(modules, executeOnModule, done);			
		});
	});
};
