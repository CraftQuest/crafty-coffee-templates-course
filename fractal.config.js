'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
* Set the engines
*/
const twigAdapter = require('@frctl/twig')();
fractal.docs.engine(twigAdapter);
fractal.components.engine(twigAdapter);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Crafty Coffee');
fractal.set('project.author', 'Ryan Irelan');
fractal.set('project.version', '0.1');


/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('ext', '.twig');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('ext', '.twig');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'build'));

/*
* Tell Fractal where to save the build export of static files
*/
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));