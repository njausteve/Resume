# Developer Resume

(c) njausteve 2017<i class="icon-anchor"></i> 

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

This project is an online resume/ protifolio template as seen here [njausteve resume](https://njausteve.github.io). I built it from the ground up as a tool to showcase other my skills and projects done as well as tech articles i have written on [medium](https://medium.com/@njaustevedomino).

![](src/assests/images/readme_header.png)

## Installation

**Pre-requisite:** 
- [Node JS ](https://nodejs.org/en/);   We are using this to load our packages via `npm` and to run all automation with `Gulp`.
     
- [Bower ](https://bower.io/);  A package manager for the front end libraries. It is just similar as NPM but only concentrate on front-end libraries.

- [Gulp ](https://gulpjs.com/); Task automation tool.

>
>

> **Why NODE/NPM ?**
>  All required packages are written in file named `package.json`.  
>
> We can get all packages downloaded with single command `npm install`.
> 
> All packages will be saved in a specific folder named `node_modules`.
> 
<br>

## Development setup

1. Setup
```bash
npm install
```
- This will install both NPM and Bower dependecies (runs once).
- Node Packages will be downloaded in `node_modules` folder in root directory.
- Bower components will be downloaded in `src/bower_component` folder.

2. Copy bower-component files to assets/lib.
```bash
gulp copy:bower
```
 3. Watch files/ run application from development folder i.e. /src
```bash
gulp
```
## Production building
1. Build production version
```bash
gulp build
```

 2. Start webserver from build folder
```bash
gulp serve:build
```
<br>


----------------
## Features available with Gulp task
* SASS support including sourceMaps.
* Minimal CSS styling of the view.
* Gulp watch, build and local server tasks.
* Minified HTML, CSS and JS build files.
* Automatic file Reversion.
* Browser-sync support.
* File concatenation for prod.

<br>

###Tech Stack

##Production

--------
   * [Angular JS 1.X](https://angularjs.org/) 
` Version: 1.4 / 1.6 (latest)`
`License: The MIT License`

  * [Bootstrap](http://getbootstrap.com) 
`Version: 3.3.7`
`License: The MIT License`

 * [UI Bootstrap](https://github.com/angular-ui/bootstrap)
`Version: 2.5.0`
`License: The MIT License`

* [Angular UI-Router](https://ui-router.github.io) 
`Version: 1.0.0`
`License: The MIT License`

* [OcLazyLoad](https://github.com/ocombe/ocLazyLoad) 
`Version: 1.1.0`
`License: The MIT License`

##Developement
  * [Sass](sass-lang.com)
`Version: 3.4.23 `
`License: The MIT License`

 * [Gulp](http://gulpjs.com/)
`Version: 4`
`License: The MIT License`


## Meta

njausteve – [@Dominosteve](https://twitter.com/Dominosteve) 
<br>
 njaustevedomino@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/njausteve](https://github.com/njausteve/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
