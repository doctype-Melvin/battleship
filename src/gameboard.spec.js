import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  it('returns an array', () => {
    expect(Array.isArray(Gameboard().ocean)).toEqual(true);
  });

  it('has a method of placing ships', () => {
    expect(Gameboard().placeShip(2, 'V', 1, 2)).toBeDefined();
  });

  test('"placeShip" returns array', () => {
    expect(Array.isArray(Gameboard().placeShip(2, '', 0, 0))).toBeTruthy();
  });

  test('"isInbounds" returns true for legal placement of ship', () => {
    expect(Gameboard().isInbounds(3, [7, 5])).toEqual(false);
    expect(Gameboard().isInbounds(4, [2, 9], 'V')).toEqual(true);
  });

  test('"placeShip" tracks how many ships were placed', () => {
    const testGame = Gameboard();
    testGame.placeShip(2, '', 0, 2);
    testGame.placeShip(4, '', 4, 3);
    expect(testGame.inGame).toHaveLength(2);
  });

  it('has a method of preventing overlapping placements', () => {

  });
});
