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

`c-bones` is a `yeoman` generator for C++-projects that use Meson as build tool. c-bones` creates a project that uses

* a GPL3 license,
* static code analysis and reports using `pmd` and `checkstyle` ,
* a unit-test suite using `JUnit` and logging using `log4j/slf4j`,
* badges for the *project status*, *build status* using Travis CI and *code coverage* using Jacoco,
* custom README.md, TODO.md and VERSIONS.md files and
* a prototype `Main.c` + `TestSuite.c`.

The resulting folder-structure looks like this:

```sh
	|____.codecov.yml
	|____.gitattributes
	|____.gitignore
	|____.travis.yml
	|____.yo-rc.json
	|____build.sh
	|____checkstyle.xml
	|____emptyproject4j
	|____LICENSE
	|____pom.xml
	|____README.md
	|____ruleset.xml
	|____src
	| |____main
	| | |____c
	| | | |____net
	| | | | |____groupID
	| | | | | |____emptyproject4j
	| | | | | | |____Main.c
	| |____test
	| | |____c
	| | | |____net
	| | | | |____groupID
	| | | | | |____tests
	| | | | | | |____emptyproject4j
	| | | | | | | |____TestSuite.c
	|____TODO.md
	|____VERSIONS.md
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

This builds the skeleton. Afterwards modify the sources and build the package with:

```sh
  ./${artifactID}
```

where `${artifactID}` will be the name of your package.

## Author

* Simon Dirmeier <a href="mailto:mail@simon-dirmeier.net">mail@simon-dirmeier.net</a>
