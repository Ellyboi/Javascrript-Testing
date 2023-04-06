const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('should add a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(3, 2)).toBe(1);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-3, -2)).toBe(-1);
    });

    test('should subtract a positive and a negative number', () => {
      expect(calculator.subtract(3, -2)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('should multiply a positive and a negative number', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-6, -2)).toBe(3);
    });

    test('should divide a positive and a negative number', () => {
      expect(calculator.divide(6, -2)).toBe(-3);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(6, 0);
      }).toThrow('Cannot divide by zero');
    });
  });
});
