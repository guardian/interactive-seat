module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({

        visuals: { },

        watch: {
            interactive: {
                files: ['src/js/main.js', 'src/components/**/*.{js,html}', 'src/js/lib/**/*.js', 'src/js/modules/**/*.js'],
                tasks: ['shell:interactive']
            },
            boot: {
                files: ['src/js/boot.js'],
                tasks: ['shell:boot']
            },
            bandwidth: {
                files: ['src/js/lib/bandwidth.js'],
                tasks: ['shell:bandwidth']
            },
            embed: {
                files: ['src/js/embed.js'],
                tasks: ['shell:embed']
            },
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass', 'postcss:autoprefixer']
            },
            partials: {
                files: 'src/assets/img/partials/**/*.svg',
                tasks: ['svgmin']
            },
            icons: {
                files: 'src/assets/img/icons/**/*.svg',
                tasks: ['svgstore']
            },
            assets: {
                files: ['src/assets/**/*'],
                tasks: ['copy:assets']
            },
            harness: {
                files: ['harness/**/*'],
                tasks: ['copy:harness']
            },
            templates: {
                files: ['src/js/boot.js.tpl'],
                tasks: ['template:boot']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['build/**/*']
            }
        },

        clean: {
            build: ['build'],
            tmp: ['tmp']
        },

        stripDebug: {
            interactive: {
                files: {
                    'build/main.js': 'build/main.js'
                }
            },
            embed: {
                files: {
                    'build/embed.js': 'build/embed.js'
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            interactive: {
                files: {
                    'tmp/main.css': 'src/css/main.scss'
                }
            },
            embed: {
                files: {
                    'tmp/embed.css': 'src/css/embed.scss'
                }
            }
        },

        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: 'build/'
                }
            },
            autoprefixer: {
                options: {
                    processors: [
                        require('autoprefixer')()
                    ]
                },
                files: [
                    {
                        expand: true,
                        cwd: 'tmp/',
                        src: '*.css',
                        dest: 'build/'
                    }
                ]
            },
            minify: {
                options: {
                    processors: [
                        require('cssnano')()
                    ]
                },
                files: [
                    {
                        expand: true,
                        cwd: 'build/',
                        src: '*.css',
                        dest: 'build/'
                    }
                ]
            }
        },

        shell: {
            interactive: {
                command: './node_modules/.bin/jspm build <%= visuals.jspmFlags %> src/js/main.js build/main.js --format amd --skip-source-maps',
                options: {
                    execOptions: {
                        cwd: '.'
                    }
                }
            },
            bandwidth: {
                command: './node_modules/.bin/jspm build <%= visuals.jspmFlags %> src/js/lib/bandwidth.js build/bandwidth.js --format amd --skip-source-maps',
                options: {
                    execOptions: {
                        cwd: '.'
                    }
                }
            },
            boot: {
                command: './node_modules/.bin/jspm build <%= visuals.jspmFlags %> src/js/boot.js build/boot.js --format amd --skip-source-maps',
                options: {
                    execOptions: {
                        cwd: '.'
                    }
                }
            },
            embed: {
                command: './node_modules/.bin/jspm build <%= visuals.jspmFlags %> src/js/embed.js build/embed.js --skip-source-maps',
                options: {
                    execOptions: {
                        cwd: '.'
                    }
                }
            }
        },

        uglify: {
            boot: {
                files: {
                    'build/boot.js': 'build/boot.js'
                }
            }
        },

        svgmin: {
            options: {
                plugins: [
                    { cleanupIDs: false },
                    { removeDimensions: true },
                    { removeStyleElement: true },
                    { removeViewBox: false }
                ]
            },
            assets: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets/img/partials/',
                        src: '*.svg',
                        dest: 'src/partials/'
                    }
                ]
            }
        },

        svgstore: {
            options: {
                prefix : 'icon-',
                cleanup: ['fill', 'stroke'],
                cleanupdefs: true,
                inheritviewbox: true,
                svg: {
                    class: 'c-icons',
                    version: '1.1',
                    viewBox: '0 0 100 100',
                    xmlns: 'http://www.w3.org/2000/svg',
                    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
                }
            },
            icons: {
                files: {
                    'src/assets/img/partials/icons.svg': ['src/assets/img/icons/**/*.svg']
                }
            }
        },

        template: {
            options: {
                data: {
                    assetPath: '<%= visuals.assetPath %>'
                }
            },
            boot: {
                files: {
                    'src/js/boot.js': ['src/js/boot.js.tpl']
                }
            },
            embed: {
                files: {
                    'build/embed.html': ['src/embed.html']
                }
            }
        },

        copy: {
            harness: {
                files: [
                    {
                        expand: true,
                        cwd: 'harness/',
                        src: [
                            'curl.js',
                            'index.html',
                            'immersive.html',
                            'interactive.html'
                        ],
                        dest: 'build'
                    }
                ]
            },
            assets: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: [
                            'assets/**/*',
                            '!assets/img/icons',
                            '!assets/img/icons/**/*',
                            '!assets/img/partials',
                            '!assets/img/partials/**/*'
                        ],
                        dest: 'build'
                    }
                ]
            },
            deploy: {
                files: [
                    { // BOOT and EMBED
                        expand: true, cwd: 'build/',
                        src: ['boot.js', 'embed.html'],
                        dest: 'deploy/<%= visuals.timestamp %>'
                    },
                    { // ASSETS
                        expand: true, cwd: 'build/',
                        src: ['main.js', 'main.css', 'main.js.map', 'main.css.map',
                            'embed.js', 'embed.css', 'embed.js.map', 'embed.css.map',
                            'assets/**/*'],
                        dest: 'deploy/<%= visuals.timestamp %>/<%= visuals.timestamp %>'
                    }
                ]
            }
        },
        prompt: {
            visuals: {
                options: {
                    questions: [
                        {
                            config: 'visuals.s3.stage',
                            type: 'list',
                            message: 'Deploy to TEST or PRODUCTION URL?',
                            choices: [{
                                name: 'TEST: <%= visuals.s3.domain %>testing/<%= visuals.s3.path %>',
                                value: 'TEST'
                            },{
                                name: 'PROD: <%= visuals.s3.domain %><%= visuals.s3.path %>',
                                value: 'PROD'
                            }]
                        },
                        {
                            config: 'visuals.confirmDeploy',
                            type: 'confirm',
                            message: 'Deploying to PRODUCTION. Are you sure?',
                            default: false,
                            when: function(answers) {
                                return answers['visuals.s3.stage'] === 'PROD';
                            }
                        }
                    ],
                    then: function(answers) {
                        if (grunt.config('visuals.s3.stage') !== 'PROD') { // first Q
                            var prodPath = grunt.config('visuals.s3.path');
                            var testPath = 'testing/' + prodPath;
                            grunt.config('visuals.s3.path', testPath);
                        } else if (answers['visuals.confirmDeploy'] !== true) { // second Q
                            grunt.fail.warn('Please confirm to deploy to production.');
                        }
                    }
                }
            }
        },

        aws_s3: {
            options: {
                region: 'us-east-1',
                debug: grunt.option('dry'),
                bucket: '<%= visuals.s3.bucket %>',
                uploadConcurrency: 10, // 5 simultaneous uploads
                downloadConcurrency: 10 // 5 simultaneous downloads
            },
            production: {
                options: {
                },
                files: [
                    { // ASSETS
                        expand: true,
                        cwd: 'deploy/<%= visuals.timestamp %>',
                        src: ['<%= visuals.timestamp %>/**/*'],
                        dest: '<%= visuals.s3.path %>',
                        params: { CacheControl: 'max-age=2678400' }
                    },
                    { // BOOT
                        expand: true,
                        cwd: 'deploy/<%= visuals.timestamp %>',
                        src: ['boot.js'],
                        dest: '<%= visuals.s3.path %>',
                        params: { CacheControl: 'max-age=60' }
                    },
                    { // EMBED
                        expand: true,
                        cwd: 'deploy/<%= visuals.timestamp %>',
                        src: ['embed.html'],
                        dest: '<%= visuals.s3.path %>/embed',
                        params: { CacheControl: 'max-age=60' }
                    }
                ]
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 8000,
                    base: 'build',
                    middleware: function (connect, options, middlewares) {
                        // inject a custom middleware http://stackoverflow.com/a/24508523

                        middlewares.unshift(
                            require('connect-livereload')(),
                            function (req, res, next) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                                res.setHeader('Access-Control-Allow-Methods', '*');
                                return next();
                            }
                        );

                        return middlewares;
                    }
                }
            }
        }
    });

    grunt.registerTask('loadDeployConfig', function() {
        grunt.config('visuals', {
            s3: grunt.file.readJSON('./cfg/s3.json'),
            timestamp: Date.now(),
            jspmFlags: '--minify --skip-source-maps',
            assetPath: '<%= visuals.s3.domain %><%= visuals.s3.path %>/<%= visuals.timestamp %>'
        });
    });

    grunt.registerTask('boot_url', function() {
        grunt.log.write('\nBOOT URL: '['green'].bold);
        grunt.log.writeln(grunt.template.process('<%= visuals.s3.domain %><%= visuals.s3.path %>/boot.js'));

        grunt.log.write('\nEMBED URL: '['green'].bold);
        grunt.log.writeln(grunt.template.process('<%= visuals.s3.domain %><%= visuals.s3.path %>/embed/embed.html'));
    });

    grunt.registerTask('embed', ['shell:embed', 'template:embed', 'sass:embed']);
    grunt.registerTask('interactive', ['svgstore', 'svgmin', 'template:boot', 'shell:interactive', 'shell:boot', 'shell:bandwidth', 'sass:interactive']);
    grunt.registerTask('all', ['interactive', 'embed', 'postcss:autoprefixer', 'copy:assets'])
    grunt.registerTask('default', ['clean', 'copy:harness', 'all', 'connect', 'watch']);
    grunt.registerTask('build', ['clean', 'all', 'stripDebug', 'postcss:minify']);
    grunt.registerTask('deploy', ['loadDeployConfig', 'prompt:visuals', 'build', 'copy:deploy', 'aws_s3', 'boot_url']);

    grunt.loadNpmTasks('grunt-aws');

}
