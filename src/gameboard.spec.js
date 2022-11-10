import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  it('returns an array', () => {
    expect(Array.isArray(Gameboard().ocean)).toEqual(true);
  });

  it('has a method of placing ships', () => {
    expect(Gameboard().placeShip(2, 'V', 1, 2)).toBeDefined();
  });

  it('"placeShip" populates the ship object\'s position array', () => {
    expect(Gameboard().placeShip(2, '', 0, 0).position).toEqual([[0, 0], [1, 0]]);
    expect(Gameboard().placeShip(4, '', 0, 3).position).toHaveLength(4);
  });

  it('checks for inbounds placements', () => {
    expect(Gameboard().isInbounds(3, [7, 5])).toEqual(false);
    expect(Gameboard().isInbounds(4, [2, 9], 'V')).toEqual(true);
  });

  it('has a method to mark attacked cells', () => {

  });
});
