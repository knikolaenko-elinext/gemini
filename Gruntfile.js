module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-available-tasks');
	grunt.loadNpmTasks('grunt-angular-gettext');

	// Project configuration.
	grunt.initConfig({
		availabletasks : {
			tasks : {}
		},
		nggettext_extract : {
			pot : {
				files : {
					'po/template.pot' : [ 'app/index.html',
							'app/components/**/*.html' ]
				}
			},
		},
		nggettext_compile : {
			all : {
				options: {
			        module: 'geminiApp'
			    },
				files : {
					'app/gen/translations.js' : [ 'po/*.po' ]
				}
			},
		},
	});
	// Default task(s).
	grunt.registerTask('default', [ 'availabletasks' ]);

};