import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  it('returns an array', () => {
    expect(Array.isArray(Gameboard().ocean)).toBe(true);
  });
});
