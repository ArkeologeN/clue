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
        var clue = new Clue(path);
        expect(clue).to.be.an.instanceOf(Clue);
      });

      it('initialize with `path` in constructor', function() {
        expect(clue).to.be.an.instanceOf(Clue);
        expect(clue.__path).to.deep.equals([path]);
      });
      
      it('initialize with multiple `path` in constructor', function() {
         var clue = new Clue(__dirname + '/sample1.json', __dirname + '/sample2.json');
         expect(clue.get('hello')).to.equals('world');
         expect(clue.get('foo')).to.equals(('bar'));
      });
      
      it('`setPath` and set path successfully', function() {
        clue.reset();
        expect(clue.setPath).to.be.an.instanceOf(Function);
        clue.setPath(path);
        expect(clue.__path).to.deep.equals([path]);
      });

      it('`getPath` and get path successfully', function() {
        expect(clue.getPath).to.be.an.instanceOf(Function);
        expect(clue.getPath()).to.deep.equals([path]);
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

      it('`getNotations` and return all parsed notations', function() {
        expect(clue.getNotations()).to.be.an.instanceOf(Object);
      });

    });
  });


})();