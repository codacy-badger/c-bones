"use strict";

var Generator = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var superb = require("superb");
var mkdirp = require("mkdirp");
var validator = require("validator");

module.exports = class extends Generator {
    prompting() {

        this.log(yosay(
            "Welcome to " + superb() + " c-bones!\n " +
            "I'll walk you through the installation."
        ));

        return this.prompt([{
            type: "input",
            name: "user",
            message: "What\'s your name (e.g. John Smith)",
            default: "user"
        }, {
            type: "input",
            name: "email",
            message: "What\'s your email adress?",
            default: "user@noreply.com",
            validate: function (input) {
                return validator.isEmail(input);
            }
        }, {
            type: "input",
            name: "artifactID",
            message: "What\'s the name of the project?",
            default: "emptyproject"
        }, {
            type: "input",
            name: "desc",
            message: "How would you describe the project in a single sentence?",
            default: "description"
        }, {
            type: "input",
            name: "githubuser",
            message: "What\'s your github user name?",
            default: "githubuser"
        }]).then((answers) => {
            this.args = answers;
            this.config.set(this.args);
        });
    }

    writing() {
        var cpyt = [
            "README.md", "TODO.md", "VERSIONS.md",
            "LICENSE", "src/", "tests/", "meson.build"
        ];
        for (var i in cpyt) {
            this.fs.copyTpl(
                this.templatePath(cpyt[i]),
                this.destinationPath(cpyt[i]), {
                    githubuser: this.args.githubuser,
                    artifactID: this.args.artifactID,
                    desc: this.args.desc,
                    email: this.args.email,
                    user: this.args.user
                });
        }

        var bcpy = [
          "codecov.yml", "gitignore", "gitattributes",
          "travis.yml", "clang-format", "valgrindrc"
        ];

        for (var i in bcpy) {
            this.fs.copy(
                this.templatePath(bcpy[i]),
                this.destinationPath("." + bcpy[i]));
        }
    }

    end() {
        this.config.save();
    }
};
