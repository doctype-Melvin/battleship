const ship = require('../ship');

describe('Ship factory function', () => {
  it('returns a ship object', () => {
    expect(typeof ship()).toEqual('object');
  });

  it('tracks number of hits', () => {
    expect(ship().hit()).toEqual(1);
  });

  it('rotates the ship', () => {
    expect(ship().rotate()).toEqual('V');
  });

  it('returns if ship has sunk', () => {
    expect(ship().isSunk()).toEqual(false);
  });
});
