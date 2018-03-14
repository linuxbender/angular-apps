angularSeed
===========

Angularjs Seed Project with LiveReload Grunt Setup

## ToDo Grunt Tasks
- jshint Task
- minify js, html,css,less or sass, svg...
- ES6
- service Mock in dev mode

## Run angularSeed
- npm install
- bower install

## Livereload Task 
Basic livereload Task is running, just run in the root project :

> grunt run

## Test Task

> grunt test

## Less or Sass
Sass is the default setup for angularSeed (app.css) but the less configuration is in place.

> grunt sass

or

> grunt less

## Autoprefixer
This will grab all css files in the less or sass folder  - prefix and move the file to the style folder.

> grunt autoprefixer

## Service Mock/Fake Example
Example to find under:
> http://localhost:9000/#/reportBuilder

## License

The MIT License (MIT)

Copyright (c) 2015 daniel glenn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.