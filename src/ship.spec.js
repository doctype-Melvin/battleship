import ship from './ship';

describe('Ship factory fn', () => {
  test('calling the ship fn should return an object', () => {
    const cruiser = ship(2, 0, false);
    expect(typeof cruiser).toEqual('object');
  });

  test('should return a given orientation', () => {
    expect(ship(2, 0, false, 'vertical').getOrientation()).toEqual('vertical');
  });

  test('Ship\'s hit() increases hits value by 1 ', () => {
    const cruiser = ship(2, 0, false);
    cruiser.hit();
    expect(cruiser.hits).toEqual(1);
  });

  test('When ship\'s hits equals its length, set sunk to true', () => {
    const cruiser = ship(2, 1, false);
    cruiser.hit();
    expect(cruiser.isSunk()).toEqual(true);
  });
});
