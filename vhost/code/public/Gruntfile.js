
module.exports = function(grunt) {

    var transport = require('grunt-cmd-transport');
    var style = transport.style.init(grunt);
    var text = transport.text.init(grunt);
    var script = transport.script.init(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        transport: {
            options:{
                idleading:'/script/',
                alias:'<%= pkg.spm.alias%>',
                parsers : {
                    '.js' : [script.jsParser],
                    '.css' : [style.css2jsParser],
                    '.html' : [text.html2jsParser]
                }
            },
            build: {
                files : [
                    {
                        expand:true,
                        cwd:'seajs',
                        src : ['**/*.js','**/*.css'],
                        dest : 'build'
                    }
                ]
            }
        },
        concat: {
            options:{
                include:'relative'
            },
            merge: {
                files: [
                    {
                        expand: true,
                        cwd: 'build',
                        src: ['**/*.js','!**/*-debug.js','!**/*-debug.css.js'],
                        dest: 'merge'
                    }
                ]
            }
        },
        uglify: {
            compress: {
                files: [
                    {
                        expand: true,
                        cwd: 'merge',
                        src: ['**/*.js','!public/*.js','!**/public/*.js'],
                        dest: 'script',
                        ext: '.js'
                    }
                ]
            }
        },
        clean : ['build','merge'],

        compass: {// compass
            dist: {// Target
                options: {// Target options
                    sassDir: 'scss',
                    cssDir: 'style',
                    environment: 'production',
                    debugInfo:false
                },
                files: [
                    {
                        expand: true,
                        cwd: 'scss',
                        src: ['**/*.scss', '!*/mod/**/*.scss'],
                        dest: 'style',
                        ext: '.css'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('js', function(){
        grunt.task.run('transport');
        grunt.task.run('concat');
        grunt.task.run('uglify');
        grunt.task.run('clean');
    });


    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('css', ['compass']);
};