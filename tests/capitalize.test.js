const capitalize = require('../capitalize.js');

test('capitalize the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
