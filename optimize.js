#!/usr/bin/env node

var requirejs = require('requirejs');

requirejs.optimize(

  // config
  {
    baseUrl: 'src'
  , name: 'main'
  , optimize: 'none'
  , out: 'dest/build.js'
  }

  // build response callback
, function (response) {
    console.log('requirejs build response callback');
    console.log(response);
  }

  // error callback
, function (err) {
    console.error('requirejs optimization error');
    console.error(err.message);
  }

);
