# jqljs
[![npm version](https://badge.fury.io/js/jqljs.svg)](https://badge.fury.io/js/jqljs)
[![Travis Status](https://travis-ci.org/zapkub/JQLjs.svg?branch=master)](https://travis-ci.org/zapkub/JQLjs)
[![Coverage Status](https://coveralls.io/repos/github/earthchie/JQL.js/badge.svg?branch=master)](https://coveralls.io/github/earthchie/JQL.js?branch=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Query json structure in SQL-like manners
# Usage 
**with npm/commonjs/webpack**
```
$ npm install jqljs --save
```
```js
const JQL = require('jqljs');
const collection = new JQL([/** your data */]);
// create query
const query = collection.select('*').where('name').match('^jo', 'i');
// result here
const result = query.fetch();
```


**or with legacy script tag**
```HTML
<script src="dist/jql.min.js" type="text/javascript"></script>
```
```HTML
<script type="text/javascript">
var data = [{
  name: 'John',
  room: 101
},{
  name: 'Jane',
  room: 201
},{
  name: 'Joe',
  room: 102
},{
  name: 'June',
  room: 202
}];

var data = new JQL(data); // accept either json string or object literal

console.log(data.select('*').where('name').match('^jo','i').orderBy('room desc').fetch());

console.log(data.select('*').where('room').lessThan(200).orderBy('name').fetch());

</script>
```
# Limitation
- ``or`` conditions are not support yet

## TODO
- [ ] refactor legacy code
- [ ] coverage 80%++


## Development
> NOTE: commitizen welcome please read [Commitizen](https://github.com/commitizen/cz-cli)
```
$ npm install
$ npm test -- --watch // for TDD development
$ npm run build // bundle
$ npm run commit // commit change in commitizen
$ npm run release // bump version and changelog
```
Note: NPM support added by [zapkub](https://github.com/earthchie/JQL.js/pull/1), Thanks!

# License
WTFPL 2.0 http://www.wtfpl.net/
