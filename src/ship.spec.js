import shipyard from './ship';

describe('shipyard factory function', () => {
  it('returns an object with a size value set to input', () => {
    expect(shipyard(4).ship.size).toEqual(4);
  });

  test('returned object has a "hit" method that increments hits', () => {
    expect(shipyard(4).ship.hit()).toBeGreaterThan(0);
  });

  test('returned object has a "isSunk" method that returns a boolean', () => {
    expect(typeof shipyard(4).ship.isSunk()).toEqual('boolean');
  });

  test('the isSunk method returns true for destroyed ship', () => {
    const tester = shipyard(2);
    tester.ship.hit();
    tester.ship.hit();
    expect(tester.ship.isSunk()).toEqual(true);
  });
});
