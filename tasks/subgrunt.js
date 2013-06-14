/*
 * grunt-subgrunt
 * https://github.com/shaneholder/grunt-subgrunt
 *
 * Copyright (c) 2013 Shane Holder
 * Licensed under the MIT license.
 */

'use strict';


function executeTaskOnModule(task, module, done) {
	grunt.log.ok('executing ' + task + ' for package ' + module);

	grunt.util.spawn({
		grunt: true,
		args: [options.task],
		opts: {cwd: module, stdio: [0,1,2]}
	}, function (error, result, code) {
		if (code === 0 || code === 6) {
			done();
		} else {
			done(false);
		}
	});
}

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('subgrunt', 'Execute Grunt on a list of folders.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      prefix: 'node_modules'
    }),
      done = this.async();

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(moduleDir) {
        // Warn on and remove invalid source files (if nonull was set).
        console.log(moduleDir);
        if (!grunt.file.isDir(moduleDir)) {
          return false;
        } else {
          return true;
        }
      }).map(function(moduleDir) {
        grunt.log.ok('executing ' + options.task + ' for package ' + moduleDir);

        // grunt.util.spawn({
        //   grunt: true,
        //   args: [options.task],
        //   opts: {cwd: moduleDir, stdio: [0,1,2]}
        // }, function (error, result, code) {
        //   if (code === 0 || code === 6) {
        //     done();
        //   } else {
        //     done(false);
        //   }
        // });       

      });

    });
  });

};
