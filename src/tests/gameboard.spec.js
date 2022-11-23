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
    expect(Array.isArray(Gameboard().occupied)).toBeTruthy();
    expect(Gameboard().placeShip('battleship', [0, 0])).toHaveLength(4);
  });

  it('checks for overlapping ships', () => {
    expect(typeof Gameboard().overlaps([[1, 1], [2, 1], [3, 1]])).toEqual('boolean');
    expect(Gameboard().overlaps([[1, 1], [2, 1], [3, 1]])).toEqual(false);
  });
});
