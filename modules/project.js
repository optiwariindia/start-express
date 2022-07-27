const fs=require("fs")
const run=require("child_process").execSync;
const srcdir=__dirname;
module.exports={
    name:"",
    dirs:[
        "config",
        "app",
        "app/routes",
        "app/routes/api",
        "app/services",
        "app/models",
        "views",
        "views/macros",
        "views/comp",
        "public",
        "public/css",
        "public/js",
        "public/images",
        "public/fonts",
        "public/favicon.ico",
        "src",
        "src/js",
        "src/css",
        "src/images",
        "src/fonts",
        "src/sass"
    ],
    packages:[
        "express",
        "body-parser",
        "cors",
        "mongoose",
        "twig",
        "jsonwebtoken"
    ],
    devpackages:[
        "livereload",
        "connect-livereload",
        "nodemon",
        "gulp",
        "dotenv",
        "gulp-concat",
        "gulp-debug",
        "gulp-sass",
        "sass",
        "gulp-clean-css",
        "gulp-uglify",
        "gulp-webp",
        "gulp-sourcemaps",
    ],
    files:[
        {
            src:"files/nodemon.json",
            dest:"nodemon.json"
        },
        {
            src:"files/gulpfile.js",
            dest:"gulpfile.js"
        },
        {
            src:"files/git.ignore",
            dest:".gitignore"
        },
        {
            src:"files/README.md",
            dest:"README.md"
        },
        {
            src:"templates/index.twig",
            dest:"views/index.twig"
        },
        {
            src:"templates/server.js",
            dest:`app/server.js`
        },
    ],
    create:function(){
        this.dirs.forEach(dir => {
            fs.mkdirSync(`${this.name}/${dir}`, { recursive: true });
        })
        package={
            name:this.name,
            version:"1.0.0",
            description:"",
            main:`app/server.js`,
            scripts:{
                devstart:`nodemon app/server.js --dev`,
                start:`node app/server.js`,
                watch:`gulp watch`,
            },
            dependencies:{ },
            devDependencies:{}
        }
        this.packages.forEach(pkg => {
            package.dependencies[pkg]="*"
        }),
        this.devpackages.forEach(pkg => {
            package.devDependencies[pkg]="*"
        })
        fs.writeFileSync(`${this.name}/package.json`, JSON.stringify(package, null, 2))
        this.files.forEach(file=>{
            fs.copyFileSync(`${srcdir}/${file.src}`,`${this.name}/${file.dest}`)
        })
        console.info(`Project ${this.name} created!`)
        console.log("Installing dependencies...")
        run(`npm install`,{cwd:this.name})
        console.log("Express server is ready to use. use cd "+this.name+" to enter the project directory and npm run devstart to start the server. Go through the README.md file for more info.\n\n")
    }
}