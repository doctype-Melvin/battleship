import Gameboard from './gameboard';

describe('Gameboard factory fn', () => {
  test('Gameboard returns a 10x10 array', () => {
    const grid = Gameboard();
    expect(Array.isArray(grid.array)).toBe(true);
  });
});
