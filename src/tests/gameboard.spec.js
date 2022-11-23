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
    expect(typeof Gameboard().inbounds('carrier', [8, 0])).toEqual('boolean');
  });
});
