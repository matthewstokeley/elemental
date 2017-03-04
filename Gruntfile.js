module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/add-class-to-elements.js',
                    'src/add-class.js',
                    'src/create-element.js',
                    'src/does-element-have-class.js',
                    'src/each-class-element.js',
                    'src/hide.js',
                    'src/remove-class-from-elements.js',
                    'src/remove-class-with-prefix.js',
                    'src/remove-class.js',
                    'src/remove-classes-with-prefix.js',
                    'src/remove-element.js',
                    'src/remove.js',
                    'src/show.js',
                    'src/string-to-node.js'
                ],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            options: {
              curly: true,
              eqeqeq: true, 
              eqnull: true,
              browser: true,
              reporter: 'jslint',
              reporterOutput: 'reports/jshint.xml',
              globals: {
                  jQuery: true
              },
            },
            all: ['src/**/*.js']
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['build-js'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build-js', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('build', ['build-js']);

};
