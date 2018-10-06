'use strict';

var path    = require("path");
var assert  = require("yeoman-assert");
var helpers = require("yeoman-test");

beforeEach(function () {  
  return helpers.run(path.join(__dirname, "../app"))
});

describe("c-bones:app", function () {
  it("builds files", function () {
    assert.file([
      "LICENSE", 
      "README.md", 
      "TODO.md", 
      "VERSIONS.md", 
      ".gitignore", ".gitattributes", 
      ".travis.yml", ".codecov.yml",
      ".clang-format", ".valgrindrc",
      "meson.build",
      "src/clazz.hpp", "src/clazz.cpp", "src/main.cpp",
      "tests/test.cpp", "tests/test_clazz.cpp"
    ]);
  });
});
