const Gameboard = require('../gameboard');

describe('controller module', () => {
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
    expect(typeof Gameboard().overlaps([[1, 1], [2, 1], [3, 1]])).toEqual('boolean');
    expect(Gameboard().overlaps([[1, 1], [2, 1], [3, 1]])).toEqual(false);
  });

  it('places attacks', () => {
    const testGame = Gameboard();
    const testShip = testGame.placeShip('battleship', [0, 0]);
    expect(testGame.inGame).toHaveLength(1);
    expect(testShip.position).toHaveLength(4);
    expect(testGame.checkTries([0, 0])).toBeTruthy();
    expect(testGame.hitsShip([0, 0])).toBeTruthy();
    expect(testGame.placeAttack([0, 0])).toBeDefined();
    expect(testGame.tries).toHaveLength(1);
    expect(testGame.success).toHaveLength(1);
  });

  test('places multiple ships in sequence', () => {
    const testGame = Gameboard();
    testGame.placeShip('cruiser', [2, 2]);
    testGame.placeShip('carrier', [2, 3]);
    testGame.placeShip('submarine', [1, 4]);
    expect(testGame.inGame).toHaveLength(3);
    expect(testGame.occupied).toHaveLength(11);
  });
});
