var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

var styles = pickFiles('styles', { srcDir: '/', destDir: 'assets' });

var sourceTrees = [styles];

var siteCss = compileSass(sourceTrees, 'assets/global.scss', 'assets/global.css');

module.exports = siteCss;
