import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;
const src = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${src}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/*.svg`,
    scss: `${srcFolder}/css/*.scss`,
    html: `${src}/*.html`,
    files: `${srcFolder}/files/*.*`,
  },
  watch: {
    js: `${src}/js/*.js`,
    scss: `${srcFolder}/css/*.scss`,
    html: `${src}/*.html`,
    images: `${srcFolder}/img/*.{jpg,jpeg,png,gif,svg,webp}`,
    files: `${srcFolder}/files/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
};