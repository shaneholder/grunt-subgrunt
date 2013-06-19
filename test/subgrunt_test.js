'use strict';

var grunt = require('grunt'),
  path = require('path'),
  subGrunt = grunt.loadTasks('tasks');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.subgrunt = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  successfulTask: function(test) {
    test.expect(1);
    var actual = grunt.file.read(path.join(process.cwd(), 'tmp/successfile'));
    test.equal(actual, 'success', 'should be able to read the file');

    test.done();
  }
};
