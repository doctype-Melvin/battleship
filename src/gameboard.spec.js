import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  const testGame = Gameboard();
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
    testGame.placeShip(2, '', 0, 2);
    testGame.placeShip(3, 'V', 3, 4);
    expect(testGame.inGame).toHaveLength(2);
  });

  it('has a method of preventing overlapping placements', () => {
    expect(testGame.isOverlapping(testGame.inGame, [0, 2])).toEqual(true);
  });
});
