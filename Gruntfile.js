module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-pngmin');

  grunt.initConfig({

    cssmin: {
      main: {
        files: [{
          expand: true,
          src: ['*.css'],
          cwd: 'src/css',
          dest: 'css/',
          ext: '.min.css'
        }]
      },
      views: {
        files: [{
          expand: true,
          src: ['*.css'],
          cwd: 'src/views/css',
          dest: 'views/css/',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      main: {
        files: {
          'js/perfmatters.min.js': ['src/js/perfmatters.js']
        }
      },
      views: {
        files: {
          'views/js/main.min.js': ['src/views/js/main.js']
        }
      }
    },

     responsive_images: {
       pizzaImage: {
         options: {
           engine: 'im',
           sizes: [{
             name: 'small',
             width: 100,
             quality: 50
           },
           {
             name: 'large',
             width: 400,
             quality: 50
           }]
         },
         files: [{
           expand: true,
           src: ['pizzeria.jpg'],
           cwd: 'src/views/images/',
           dest: 'views/images/'
         }]
       },
       otherJPG: {
         options: {
           engine: 'im',
           sizes: [{
             name: 'optimised',
             width: 400,
             quality: 40
           }]
         },
         files: [{
           expand: true,
           src: ['*.jpg'],
           cwd: 'src/img/',
           dest: 'img/'
         }]
       }
     },

     pngmin: {
       options: {
         ext: '-optimised.png'
       },
       pngs: {
         src: 'src/img/2048.png',
         dest: 'img/'
       }
     }

  });

  grunt.registerTask('default', ['cssmin', 'uglify', 'responsive_images', 'pngmin']);

};
