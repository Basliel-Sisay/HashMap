import {HashMap} from './HashMap.js';
function expectEqual(actual, expected, message) {
  if (actual === expected) {
    console.log('PASS: ' + message);
  } else {
    console.error('FAIL: ' + message);
    console.error('Expected: ' + expected + ', but got: ' + actual);
  }
}
function expectTrue(actual, message) {
  if (actual === true) {
    console.log('PASS: ' + message);
  } else {
    console.error('FAIL: ' + message);
    console.error('Expected: true, but got: ' + actual);
  }
}
function expectFalse(actual, message) {
  if (actual === false) {
    console.log('PASS: ' + message);
  } else {
    console.error('FAIL: ' + message);
    console.error('Expected: false, but got: ' + actual);
  }
}
function runTests() {
  console.log('Running HashMap Tests...\n');
  const map = new HashMap(10);
  map.set('apple', 1);
  expectEqual(map.get('apple'), 1, 'get after set');
  map.set('apple', 2);
  expectEqual(map.get('apple'), 2, 'overwrite value');
  map.remove('apple');
  expectEqual(map.get('apple'), null, 'remove key');
  expectFalse(map.remove('banana'), 'remove non-existent key');
  map.set('a', 1);
  map.set('b', 2);
  map.set('c', 3);
  expectEqual(map.length, 3, 'length tracking');
  const collisionMap = new HashMap(1); 
  collisionMap.set('x', 100);
  collisionMap.set('y', 200);
  expectEqual(collisionMap.get('x'), 100, 'collision x');
  expectEqual(collisionMap.get('y'), 200, 'collision y');
  console.log('\n Test suite complete.');
}
runTests();