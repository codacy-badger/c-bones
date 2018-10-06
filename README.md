# c-bones

[![Project Status](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![travis](https://travis-ci.org/dirmeier/c-bones.svg?branch=master)](https://travis-ci.org/dirmeier/c-bones)
[![appveyor](https://ci.appveyor.com/api/projects/status/ugxd2285camqs6ud/branch/master?svg=true)](https://ci.appveyor.com/project/dirmeier/c-bones)
[![codecov](https://codecov.io/gh/dirmeier/c-bones/branch/master/graph/badge.svg)](https://codecov.io/gh/dirmeier/c-bones)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fc5f2b85be274404990b9282eeaa484d)](https://www.codacy.com/app/simon-dirmeier/c-bones?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dirmeier/c-bones&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/generator-c-bones.svg)](https://www.npmjs.com/package/generator-c-bones)
[![npm download](https://img.shields.io/npm/dt/generator-c-bones.svg)](https://www.npmjs.com/package/generator-c-bones)

A yeoman generator for `C++` projects using Meson.

## Introduction

`c-bones` is a `yeoman` generator for C++-projects that use Meson as build tool. `c-bones` creates a project that uses

* a prototype `meson.build` file that uses `Boost` as dependency,
* a custom `valgrindrc` and an oppinioated `clang-format`
* badges for the *project status*, *build status* using Travis CI and *code coverage*,
* a prototype `main.cpp` and test suite file,
* custom README.md, TODO.md and VERSIONS.md files,
* standard software development config and GitHib files like `travis.yml`, `codecov.yml`, `gitignore` and `gitattributes`,
* a GPL3 license.

The resulting folder-structure looks like this:

```sh
	.
    |____.clang-format
    |____.codecov.yml
    |____.gitattributes
    |____.gitignore
    |____.travis.yml
    |____.valgrindrc
    |____.yo-rc.json
    |____LICENSE
    |____README.md
    |____VERSIONS.md
    |____TODO.md
    |____meson.build
    |____src
    | |____clazz.hpp
    | |____clazz.cpp
    | |____main.cpp
    |____tests
    | |____test_clazz.cpp
    | |____test.cpp
```

## Installation

Yeoman comes with [```npm```](https://nodejs.org/en/download/current/), so install it first and then call:

```sh
  npm install -g yo
  npm install -g generator-c-bones
```

Once you have the package, you can create a scaffold using:

```sh
  yo c-bones
```

This builds the skeleton. Afterwards modify the sources and build your project.

## Author

* Simon Dirmeier <a href="mailto:simon.dirmeier@web.de">simon.dirmeier@web.de</a>
