# clue
JSON based configuration loader and parser.

# Install

To install, just run the following command:

```
$ npm install clue --save
```

It will be installed in your `node_modules/` directory and will added a dependency entry in `package.json`.

# Usage

The module would help to parse your custom JSON file and load the configuration successfully into the buffer. However, you could use alternative methods to get value by `dot notation` or it will return the default respectively.

```javascript

;(function() {
  var Clue = require('clue');

  var clue = new Clue('/path/to/json/file');
  var name = clue.get('name');  // Return `name` key from JSON file.
  var name = clue.get('name', 'ArkeologeN'); // If `name` key not found, it will return "ArkeologeN".
  var nested = clue.get('script.test'); // If will get the value of `test` key from the `script` object.
})();

```

# Author

Wrapper has been developed by [Hamza Waqas](http://twitter.com/HamzaWaqas)