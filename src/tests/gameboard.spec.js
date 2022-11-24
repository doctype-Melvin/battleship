const Gameboard = require('../gameboard');

describe('controller module', () => {
  const testBoard = Gameboard();
  it('returns an array with length of 100', () => {
    expect(Gameboard().ocean).toHaveLength(100);
  });

  it('has an array that holds all the ships', () => {
    expect(Gameboard().SHIPS).toHaveLength(5);
  });

  it('looks up ships in the array', () => {
    expect(typeof Gameboard().getShip('destroyer')).toEqual('object');
  });

  it('checks for inbounds placement', () => {
    expect(Gameboard().inbounds('carrier', [0, 0])).toEqual(true);
  });

  it('places ships and tracks their position', () => {
    expect(Gameboard().makePath('carrier', [3, 3])).toHaveLength(5);
    expect(Array.isArray(Gameboard().occupied)).toBeTruthy();
    expect(typeof Gameboard().placeShip('battleship', [0, 0])).toEqual('object');
  });

  it('checks for overlapping ships', () => {
    testBoard.placeShip('destroyer', [1, 1]);
    const testPath = testBoard.makePath('submarine', [0, 1]);
    expect(typeof Gameboard().overlaps([[1, 1], [2, 1], [3, 1]])).toEqual('boolean');
    expect(testBoard.overlaps(testPath)).toEqual(true);
  });

  it('places attacks', () => {
    testBoard.placeShip('battleship', [0, 0]);
    expect(testBoard.inGame).toHaveLength(2);
    expect(testBoard.checkTries([0, 0])).toBeTruthy();
    expect(testBoard.hitsShip([0, 0])).toBeTruthy();
    expect(testBoard.placeAttack([0, 0])).toBeDefined();
    expect(testBoard.tries).toHaveLength(1);
    expect(testBoard.success).toHaveLength(1);
  });

  it('creates next attack for AI', () => {
    expect(testBoard.nextAttack.length).toBeGreaterThan(0);
  });
});
