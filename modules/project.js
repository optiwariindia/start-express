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
            dest:`app/${this.name}.js`
        },
    ],
    templates:[
        "server.js",
        "index.twig"
    ],
    create:function(){
        this.dirs.forEach(dir => {
            fs.mkdirSync(`${this.name}/${dir}`, { recursive: true });
        })
        package={
            name:this.name,
            version:"1.0.0",
            description:"",
            main:`app/${this.name}.js`,
            scripts:{
                devstart:`nodemon app/${this.name}.js`,
                start:`node app/${this.name}.js`,
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
        run(`npm install`,{cwd:this.name})
    }
}