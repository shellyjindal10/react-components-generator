'use strict'
let yeoman = require('yeoman-generator')
let chalk = require('chalk')
let yosay = require('yosay')
let mkdirp = require('mkdirp')


module.exports = yeoman.generators.Base.extend({
  prompting: function () {
  let done = this.async()

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the Fanatics UI component ' + chalk.red('generator-fanatics-components') + ' generator!'
  ));

  let prompts = [{
    name: 'componentName',
    message: 'What is your Component name ?'
  },
  {
    name: 'authorName',
    message: 'Enter author name ?'
  },
  {
    type: 'confirm',
    name: 'relayComponent',
    message: 'Is it a Relay component ?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.componentName = props.componentName
    this.authorName = props.authorName
    this.relayComponent = props.relayComponent
    done()
  }.bind(this))
  },

  scaffoldFolders: function() {
    let component = { 
      name: this.componentName,
      relayComponent: this.relayComponent
    };
    mkdirp(component.name)
    mkdirp(component.name + "/styles")
    mkdirp(component.name + "/test")
    mkdirp(component.name + "/test/dev")
    mkdirp(component.name + "/test/data")
  },

  copyMainFiles: function() {
    let component = {
      name: this.componentName,
      authorName: this.authorName,
      relayComponent: this.relayComponent,
      className: this.getClassName()
    };

    this.template("_main.js", component.name + "/" + component.name + ".js",component)
    this.template("_package-base.json", component.name + "/package.json",component)
    this.template("_test.js", component.name + "/test/" + component.name + "-test.js",component)
    this.template("_base.js", component.name + "/test/data/base.js",component)
    this.template("_server.js", component.name + "/test/dev/server.js",component)
    this.template("_main.scss", component.name + "/styles/" + component.name + ".scss",component)

    if(component.relayComponent == true) {
      this.template("_container.js", component.name + "/" + component.name + "-container.js",component)
      this.template("_root.js", component.name + "/" + component.name + "-root.js",component)
      this.template("_route.js", component.name + "/" + component.name + "-route.js",component)
      this.template("_client.js", component.name + "/" + component.name + "-client.js",component)
      this.template("_package-relay.json", component.name + "/package.json",component)
    }
  },

  getClassName: function() {
    let component = { 
      name: this.componentName 
    };

    let regex = /(\b[a-z](?!\s))/g
    let className = component.name.replace(regex, function(x){return x.toUpperCase();})
    className = className.replace(/[\-]/g, "")
    return className
  }

});
