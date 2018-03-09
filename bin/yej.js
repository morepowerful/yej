#!/usr/bin/env node
'use strict';
var process = require('process')
var commander = require('commander')
var chalk = require('chalk')
var child_process = require('child_process')
var unzip = require('unzip')
var download = require('download')
var fs = require('fs')
var inquirer = require('inquirer')
var pkg = require('../package.json')

commander.version(pkg.version)
commander.on('--help', function() {
  console.log('******************   ' + chalk.yellow('API:') + '   ******************');
  console.log('');
  console.log(chalk.yellow('                  yej -h,yej --help：帮助信息'));
  console.log(chalk.yellow('                  yej -v,yej --version：显示yej脚手架版本'));
  console.log(chalk.yellow('                  yej init：初始化一个react+redux项目'));
  console.log(chalk.yellow('                  yej install：安装项目的依赖'));
  console.log(chalk.yellow('                  yej server：开启项目服务'));
  console.log(chalk.yellow('                  yej build：打包项目'));
})

commander.parse(process.argv);
if (!process.argv[2]) {
  var help = child_process.exec('yej --help', function(err, stdout, stdree) {
    if (err) {
      throw err;
    }
    process.stdout.write(stdout);
  })
  return;
}

switch (process.argv[2]) {
  case "init":
    initFunction();
    break;
  case "install":
    installFunction();
    break;
  case "server":
    serverFunction();
    break;
  case "build":
    buildFunction();
    break;
  default:
  console.log(chalk.yellow('  Can\'t find \'node index.js '+ process.argv[2] +'\',Please ensure the right commends'));
}

function initFunction() {
  if(process.argv[3]) {
    if(process.argv[3] == '-h' || process.argv[3] == '--help') {
      console.log(chalk.yellow("        帮你初始化一个react+redux+webpack项目"));
    } else{
      console.log(chalk.red('Please ensure the right commends'));
    }
  } else{
    try{
      download('https://github.com/morepowerful/yej-demo/archive/master.zip', process.cwd()).then(() => {
        var unzipFile = unzip.Extract({path:process.cwd()})
        fs.createReadStream('yej-demo-master.zip').pipe(unzipFile)
        unzipFile.on('close', function() {
          fs.unlinkSync('yej-demo-master.zip')
        })
      })
    } catch(err) {
      console.log(err);
    }
  }
}

function installFunction() {
  if(process.argv[3]) {
    if(process.argv[3] == '-h' || process.argv[3] == '--help') {
      console.log(chalk.yellow("        yej install  帮你安装项目所需的依赖包"));
    } else{
      console.log(chalk.red('Please ensure the right commends'));
    }
  } else{
    if(process.cwd().indexOf('yej-demo-master') > 0) {
      // inquirer.prompt({
      //   type: 'list',
      //   name: 'installPath',
      //   choices : ['npm','cnpm'],
      //   default: 'npm',
      //   message: '请选择你要用什么进行安装（Please choose the resource that you want to install）'
      // }).then(anwser => {
      //   try{
      //     var install
      //     if(anwser.installPath == 'cnpm') {
      //       install = child_process.execSync('cnpm install')
      //     } else {
      //       install = child_process.execSync('npm install')
      //     }
      //     process.stdout.write(install)
      //   } catch(err){
      //     console.log(err);
      //   }
      // })
      process.stdout.write(child_process.execSync('npm install'))
    } else {
      console.log(chalk.yellow('请进入'+process.cwd()+'/yej-demo-master文件里进行安装'));
    }
  }
}

function serverFunction() {
  if(process.argv[3]) {
    if(process.argv[3] == '-h' || process.argv[3] == '--help') {
      console.log(chalk.yellow("        yej server开启项目服务"));
    } else{
      console.log(chalk.red('Please ensure the right commends'));
    }
  } else{
    var server;
    try{
      server = child_process.spawn(
        process.platform === "win32" ? "npm.cmd" : "npm", ['start', '--color']
      );
      server.stdout.pipe(process.stdout);
    }catch(err) {
      console.log(err);
    }
  }
}

function buildFunction() {
  if(process.argv[3]) {
    if(process.argv[3] == '-h' || process.argv[3] == '--help') {
      console.log(chalk.yellow("        yej build命令来打包项目"));
    } else{
      console.log(chalk.red('Please ensure the right commends'));
    }
  } else {
    var build;
    try {
     build = child_process.execSync('npm run build',  { encoding: 'utf8' })
    }catch(err) {
      console.log(err);
    }
     process.stdout.write(build)
  }
}
