# P5.js Typescript Parcel Template

This is a template for creating a p5js project utilizing typescript and the Parcel bundler. This allows for easy use of NPM packages with es6 style imports. Global mode works with this repo provided methods are registered to the global window with the following syntax:
```ts
window["setup"] = function setup() {}
```
static assets can be used via the static directory and will be bundled into the docs folder. To use npm packages simply do npm install and import them into your project. Tweakpane is included in this repo as an example. 

## how to use

Simply clone this repo and type npm start. A live server will then start and any changes you make will be automatically pushed to the browser. To easily publish your project type npm run build. This will create a deployment under the docs folder that should automatically be hosted by github once pushed. 

## Why did I make this? 

p5js is written for es5 style programming and doesn't always play well with es6 imports or external libraries. This was made to help others get modern tooling working with p5.
