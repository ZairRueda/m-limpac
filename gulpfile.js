const { series, src, dest, watch, parallel } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var webp = require('gulp-cwebp');
var notify = require('gulp-notify');

function css() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(dest('public/assets/css'))
}

function versionWebp() {
    return src('src/pre-img/**')
        .pipe( webp() )
        .pipe( dest('public/assets/img'))
        .pipe( notify({message: 'Versión webP lista'}));
}

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // * = la carpeta actual
    watch('src/pre-img/**', versionWebp);
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.watchArchivos = watchArchivos;