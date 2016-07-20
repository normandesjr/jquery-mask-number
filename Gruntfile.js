module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      algaworks: {
        files: {
          'dist/jquery.masknumber.min.js': ['dist/jquery.masknumber.js']
        }
      }
    },

    copy: {
      'javascripts': {
        expand: true,
        cwd: "sources",
        src: ["jquery.masknumber.js"],
        dest: "dist/",
      },
    },
  });

  ["contrib-copy", "contrib-uglify"].forEach(function(plugin) {
    grunt.loadNpmTasks("grunt-" + plugin);
  });

  grunt.registerTask("default", ["copy", "uglify"]);
};
