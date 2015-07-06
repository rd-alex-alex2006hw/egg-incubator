module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		concat: {
			options: {
				//separator: ';'
			},
			dist: {
				src: 'src/js/includes/*.js',
				dest: 'dist/js/includes/main.js'
			}
		},

		postcss: {
			options: {
				map: true, // inline sourcemaps

				processors: [
					require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
					require('cssnano')() // minify the result
				]
			},
			dist: {
				src: 'dist/style/css/*.css'
			}
		},

		cssnext: {
			options: {
				sourcemap: true
			},
			dist: {
				files: {
					"dist/style/css/nexified.css": "src/style/css/main.css"
				}
			}
		},

		copy: {
			main: {
				src: ['src/index.html'],
				dest: 'dist/'
			}
		}

	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("watch", [
		"concat",
		"cssnext",
		"postcss",
		"copy"
	]);

};