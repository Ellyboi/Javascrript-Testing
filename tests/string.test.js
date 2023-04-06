const stringLength = require('../string');

describe('stringLength', () => {
  test('It should return the length of a valid string', () => {
    expect(stringLength('Hello')).toBe(4);
  });

  test('It should throw an error if the string has no characters', () => {
    expect(() => {
      stringLength('Hello');
    }).toThrow('String must be between 1 and 10 characters');
  });

  test('It should throw an error if the string is longer than 10 characters', () => {
    expect(() => {
      stringLength('Hello world!');
    }).toThrow('String must be between 1 and 10 characters');
  });
});
