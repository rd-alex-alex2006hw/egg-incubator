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
				map: true,

				processors: [

					require('cssnext')({
						browsers: 'last 2 versions',
						compress: true
					}),
					
				]
			},

			dist: {
				files: [{
					expand: true,
					flatten: true,
					src: ['src/**/*.css'],
					dest: 'dist/style/css/'
				}]
			}
		},



		copy: {
			main: {
				src: ['src/index.html'],
				expand: true,
				flatten: true,
				dest: 'dist/'
			}
		},

		watch: {
			css: {
				files: 'src/style/css/*.css',
				tasks: ['postcss']
			},

			scripts: {
				files: 'src/js/includes/*.js',
				tasks: 'concat'
			},

			other: {
				files: 'src/*.html',
				tasks: 'copy'
			}
		}

	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("dev", "watch");

	grunt.registerTask("default", ["postcss", "concat", "copy"]);

};
