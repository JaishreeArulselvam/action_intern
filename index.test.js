const { add, greet } = require('./index');

// Test 1: does add() work correctly?
test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(0, 0)).toBe(0);
  expect(add(-1, 1)).toBe(0);
});

// Test 2: does greet() return the right message?
test('greets a person by name', () => {
  expect(greet('Jaishree')).toBe('Hello, Jaishree!');
  expect(greet('Anna')).toBe('Hello, Anna!');
});