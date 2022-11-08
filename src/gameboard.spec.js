import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  it('returns an array', () => {
    expect(Array.isArray(Gameboard().board)).toBe(true);
  });

  test('array has a length of 100', () => {
    expect(Gameboard().board).toHaveLength(100);
  });

  test('array items are objects', () => {
    expect(typeof Gameboard().board[1]).toBe('object');
  });
});
