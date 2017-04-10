# JQL.js
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Query json structure in SQL-like manners

# Usage 

```HTML

<script src="JQL.js" type="text/javascript"></script>
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


## Development
> NOTE: commitizen welcome please read [Commitizen](https://github.com/commitizen/cz-cli)
```
$ npm install
$ npm test -- --watch // for TDD development
$ npm run build // bundle
$ npm run commit // commit change in commitizen
$ npm run release // bump version and changelog
```

# License
WTFPL 2.0 http://www.wtfpl.net/
