/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('famous generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('famous:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'README.md',
      'package.json',
      'bower.json',
      'Gruntfile.js',
      'app/index.html',
      'app/content/images/famous_symbol_transparent.png',
      'app/styles/app.css',
      'app/src/requireConfig.js',
      'app/src/main.js',
      '.editorconfig',
      '.bowerrc',
      '.eslintrc',
      '.jscsrc',
      '.gitignore'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
