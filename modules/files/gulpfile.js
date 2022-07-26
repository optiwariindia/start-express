const gulp = require('gulp');
const debug = require('gulp-debug');
const process = {
    concat: require('gulp-concat'),
    css: {
        compile: require('gulp-sass')(require('sass')),
        minify: require('gulp-clean-css'),
    },
    js: require('gulp-uglify'),
    webp: require('gulp-webp'),
    srcmap: require("gulp-sourcemaps")
}
const project = {
    src: {
        sass: "src/sass/**/*.scss",
        css: "src/css/**/*.css",
        js: "src/js/**/*.js",
        img: "src/img/**/*.+(png|jpg)",
        fonts: "src/fonts/**/*.+(eot|svg|ttf|woff|woff2)"
    },
    build: {
        css: "public/css",
        js: "public/js",
        img: "public/img",
        fonts: "public/fonts",
        webp: "public/img/webp"
    }
}
gulp.task('sass', () => {
    return gulp.src(project.src.sass)
        .pipe(process.srcmap.init())
        .pipe(process.css.compile())
        .pipe(process.concat("99-style.css"))
        .pipe(process.css.minify())
        .pipe(process.srcmap.write())
        .pipe(gulp.dest("src/css"));
});
gulp.task('css', () => {
    return gulp.src(project.src.css)
        .pipe(process.srcmap.init())
        .pipe(process.css.minify())
        .pipe(process.concat("style.css"))
        .pipe(process.srcmap.write())
        .pipe(gulp.dest(project.build.css));
});
gulp.task("js", () => {
    return gulp.src(project.src.js)
        .pipe(process.srcmap.init())
        .pipe(process.js())
        .pipe(process.concat("script.js"))
        .pipe(process.srcmap.write())
        .pipe(gulp.dest(project.build.js));
});
gulp.task("img", () => {
    return gulp.src(project.src.img)
        .pipe(process.webp())
        .pipe(gulp.dest(project.build.img));
});
gulp.task("fonts", () => {
    return gulp.src(project.src.fonts)
        .pipe(gulp.dest(project.build.fonts));
});
gulp.task("img-fallback",()=>{
    return gulp.src(project.src.img)
        .pipe(gulp.dest(project.build.img));
});
gulp.task("build-css", gulp.series("sass", "css"));
gulp.task("build", gulp.parallel("build-css", "js", "img", "fonts", "img-fallback"));
gulp.task("watch", () => {
    gulp.watch(project.src.sass, gulp.series("build-css"));
    gulp.watch(project.src.js, gulp.series("js"));
    gulp.watch(project.src.img, gulp.series("img"));
    gulp.watch(project.src.fonts, gulp.series("fonts"));
})
