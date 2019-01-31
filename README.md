# yFiles Testing with Mocha+PhamtomJS

A small sample showing how to test the yFiles library with [Mocha](https://mochajs.org/) and [Phantomjs](http://phantomjs.org/)

## Installation

1. Download this repository and extract its contents into e.g. `demos/toolkit/phantomjs` in your yFiles for HTML package, so it ends up next to the other demo applications: 
   ```
   yFilesPackage
   +-- lib/
   +-- demos/
       +-- toolkit
           +-- phantomjs
               +-- app
                   +-- index.html
               +-- test
                   +--- spec.js
               +-- package.json    
   ```
2. Run `yarn install` or `npm install` in the `phantomjs` folder 

## Running

1. `yarn run server` or `npm run server`
2. `yarn run test` or `npm run test`
