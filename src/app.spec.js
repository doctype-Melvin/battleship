const ship = require('./app');

describe('Ship factory fn', () => {
  test('Ship\'s hit() increases hits property by 1 ', () => {
    const cruiser = ship(2, 0, false);
    cruiser.hit();
    expect(cruiser.hits).toEqual(1);
  });

  test('When ship hits equals its length set sunk to true', () => {
    const cruiser = ship(2, 1, false);
    cruiser.hit();
    expect(cruiser.isSunk()).toEqual(true);
  });
});
