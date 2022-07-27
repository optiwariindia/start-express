#!/usr/bin/env node
const yargs = require("yargs")(process.argv);
const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);
const chalk =require("chalk");
let project = require("./modules/project.js");

(()=>{
    const read = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    })

    if(yargs.argv.project){
        console.info("Creating project "+yargs.argv.project+"...\n");
        project.name = yargs.argv.project;
        project.create();
        read.close();
        return;
    }  
    projects=yargs.argv._.slice(2);
    if(projects.length!=0){
        projects.forEach(p=>{
            read.write("Creating project "+p+"...\n");
            project.name = p;
            project.create();
        })
        read.close();
        return;
    }

    read.question("Enter the project name: ", (answer) => {
        project.name = answer;
        read.close();
        project.create();
    })
    
})()