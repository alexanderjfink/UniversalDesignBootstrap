module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			dev: {
				options: {
					file: 'server/server.js',
					args: ['dev'],
					ignoredFiles: ['README.md', 'node_modules/**'],
					watchedExtensions: ['js'],
					watchedFolders: ['tests'],
					debug: false,
					delayTime: 1,
					env: {
						PORT: '1337'
					},
					cwd: __dirname
				}
			},
			exec: {
				options: {
					exec: 'sass'
				}
			}
		},
		requirejs: {
			mainJS: {
				options: {
					baseUrl: "public/javascripts/",
					paths: {
						"desktop": "app/config/Init"
					},
					wrap: true,
					name: "libs/almond/almond",
					preserveLicenseComments: false,
					optimize: "uglify",
					mainConfigFile: "public/javascripts/app/config/Init.js",
					include: ["desktop"],
					out: "public/javascripts/app/config/Init.min.js"
				}
			},
			mainCSS: {
				options: {
					optimizeCss: "standard",
					cssIn: "./public/stylesheets/app.css",
					out: "./public/stylesheets/app.min.css"
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'public/javascripts/app/**/*.js', '!public/javascripts/app/**/*min.js'],
			options: {
				globals: {
					jQuery: true,
					console: false,
					module: true,
					document: true
				}
			}
		}, 
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['server/tests/**/*.js']
			}
		},
		shell: {
			copyFoundationCSS: {
				command: 'cp ./public/javascripts/vendor/foundation/css/foundation.css ./public/stylesheets/foundation.css && cp ./public/javascripts/vendor/foundation/css/normalize.css ./public/stylesheets/normalize.css'
			},
			copyFontAwesomeCSS: {
				command: 'cp ./public/javascripts/vendor/font-awesome/css/font-awesome.css ./public/stylesheets/font-awesome.css && cp ./public/javascripts/vendor/font-awesome/css/font-awesome-ie7.css ./public/stylesheets/font-awesome-ie7.css'
			},
			copyFontAwesomeFonts: {
				command: 'cp -r ./public/javascripts/vendor/font-awesome/font/* ./public/font'
			}
		},
		/*
		less: {
			production: {
				options: {
					paths: ["public/stylesheets"]
				},
				files: {
					"public/stylesheets/includes/css/custom.css": "public/stylesheets/includes/less/custom.less"
				}
			}
		}
		*/

		// Custom compile Foundation's SCSS
		sass: {
			options: {
				includePaths: ['public/javascripts/vendor/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'public/stylesheets/includes/css/custom.css': 'public/stylesheets/includes/scss/custom.scss'
				}
			}
		},

		watch: {
			grunt: { files: ['Gruntfile.js'] },

			sass: {
				files: 'public/stylesheets/scss/**/*.scss',
				tasks: ['scss']
			}
		}
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('test', ['jshint', 'mochaTest' ]);
	grunt.registerTask('init', ['shell:copyFoundationCSS', 'shell:copyFontAwesomeCSS', 'shell:copyFontAwesomeFonts','sass', 'requirejs:mainJS', 'requirejs:mainCSS']);
	grunt.registerTask('build', ['sass', 'requirejs:mainJS', 'requirejs:mainCSS']);
	grunt.registerTask('server', ['sass','nodemon:dev']);
	grunt.registerTask('default', ['init', 'test', 'build']);

};
