const shipyard = require('./ship');

describe.skip('shipyard factory function', () => {
  const tester = shipyard(2);
  it('returns an object with a size value set to input', () => {
    expect(tester.ship.size).toEqual(2);
  });

  test('returned object has a "hit" method that increments hits', () => {
    expect(tester.ship.hit()).toBeGreaterThan(0);
  });

  test('returned object has a "isSunk" method that returns a boolean', () => {
    expect(typeof tester.ship.isSunk()).toEqual('boolean');
  });

  test('the isSunk method returns true for destroyed ship', () => {
    tester.ship.hit();
    expect(tester.ship.isSunk()).toEqual(true);
  });

  it('rotates the ship', () => {
    tester.ship.rotate();
    expect(tester.ship.rotation).toEqual('V');
    tester.ship.rotate();
    expect(tester.ship.rotation).toEqual('H');
  });
});
