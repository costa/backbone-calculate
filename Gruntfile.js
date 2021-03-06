module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  grunt.initConfig({
    jasmine: {
      src: 'backbone.calculate.js',
      options: {
        vendor: [
          'bower_components/jquery/jquery.js', 
          'bower_components/underscore/underscore.js',
          'bower_components/underscore-calculate/underscore.calculate.js',
          'bower_components/backbone/backbone.js'
        ],
        helpers: 'spec/helper.js',
        specs: 'spec/**/*.spec.js'
      },
    }
  });
    
  grunt.registerTask('test', ['jasmine']);
};
