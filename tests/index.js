/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   4/3/15
 */
;
(function () {
  'use strict';

  var expect = require('chai').expect,
      Clue = require('../');

  describe('#clue', function() {

    describe('validates', function() {

      it('initialization and instance', function() {
        expect(Clue).to.be.an.instanceOf(Function);
      });
    });

    describe('executes', function() {

      var path = __dirname + '/../package.json';
      var clue;

      beforeEach(function() {
        clue = new Clue(path);
      });

      it('creating a new instance', function() {
        var clue = new Clue;
        expect(clue).to.be.an.instanceOf(Clue);
      });

      it('initialize with `path` in constructor', function() {
        expect(clue).to.be.an.instanceOf(Clue);
        expect(clue.__path).to.equals(path);
      });

      it('`setPath` and set path successfully', function() {
        expect(clue.setPath).to.be.an.instanceOf(Function);
        clue.setPath(path);
        expect(clue.__path).to.equals(path);
      });

      it('`getPath` and get path successfully', function() {
        expect(clue.getPath).to.be.an.instanceOf(Function);
        expect(clue.getPath()).to.equals(path);
      });

      describe('~`get` method', function() {

        it('and return value if found', function() {
          expect(clue.get).to.be.an.instanceOf(Function);
          expect(clue.get('name')).to.equals('clue');
        });

        it('and return default value if not found', function() {
          expect(clue.get('name2', 'boga')).to.equals('boga');
        });
      });

    });
  });


})();