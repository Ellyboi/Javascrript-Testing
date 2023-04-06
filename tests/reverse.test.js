const reverseString = require('../reverse');

test('reverseString reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('')).toBe('');
});
