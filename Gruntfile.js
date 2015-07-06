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
					dest: 'src/js/main.js'
				}
			}


	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("watch", "concat");

};