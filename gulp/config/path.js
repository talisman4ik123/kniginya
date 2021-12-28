import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {

    build: {
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
        svgicons: `${buildFolder}/svgicons/`
    },

    src: {
        scss: `${srcFolder}/scss/style.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        html: `${srcFolder}/*.html`,
        js: `${srcFolder}/js/script.js`,
        fonts: `${srcFolder}/fonts/**/*`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },

    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        svg: `${srcFolder}/svgicons/*.svg`,
    },

    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
};