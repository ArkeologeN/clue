/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   4/3/15
 */
;
(function () {
  'use strict';

  var klass = require('klass');

  var Clue = klass(function(path) {
    this.__path = [].concat(path);
    this.__config = {};
    this.__notation = {};
    
    if (arguments.length > 1) {
      this.__path = arguments;
    }
    
    this.__load();
  })
      .methods({
        setPath: function(path) {
          this.__path = [].concat(this.__path, path);
          this.__load();
        },
        getPath: function() {
          return this.__path;
        },
        get: function(path, alternate) {
          return this.__notation[path] || alternate;
        },
        getNotations: function() {
          return this.__notation;
        },
        __load: function() {
          if (!this.__path) throw new Error('[path] is invalid or missing for clue.setPath');

          try {
            
            for (var k = 0; k < this.__path.length; k++) {
              var p = this.__path[k];
              this.__greedy(p);
            }
            
          } catch (e) {
            console.log(e);
            throw e;
          }
        },
        __greedy: function (path) {
          this.__config = require(path);
          this.__dig(this.__config);
        },
        __dig: function(obj, current) {
          for (var key in obj) {
            var value = obj[key],
                notation = current ? current + "." + key : key;

            if (value instanceof Object) {
              this.__dig(value, notation);
            }

            this.__notation[notation] = value;
          }
        },
        reset: function() {
          this.__path = [];
          this.__config = [];
        }
      });

  module.exports = Clue;


})();