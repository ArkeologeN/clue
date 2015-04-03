/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   4/3/15
 */
;
(function () {
  'use strict';

  var klass = require('klass');

  var Clue = klass(function(path) {
    this.__path = path;
    this.__config = {};
    this.__notation = {};
    if (path) {
      this._load();
    }
  })
      .methods({
        setPath: function(path) {
          this.__path = path;
          this._load();
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
        _load: function() {
          if (!this.__path) throw new Error('[path] is invalid or missing for clue.setPath');

          var self = this;
          try {
            this.__config = require(this.__path);
            this.__dig(this.__config);
          } catch (e) {
            console.log(e);
            throw e;
          }
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
        }
      });

  module.exports = Clue;


})();