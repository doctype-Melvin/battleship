const ship = require('../ship');

describe('Ship Factory Function', () => {
  const testShip = ship('destroyer', 3);
  it('returns an object', () => {
    expect(typeof testShip).toEqual('object');
  });

  it('stores hits and has a method of incrementing hit counts', () => {
    testShip.isHit();
    expect(testShip.hits).toEqual(1);
  });

  it('has a method of rotating the ship from horizontal to vertical and back', () => {
    testShip.rotate();
    expect(testShip.rotation).toEqual('V');
    testShip.rotate();
    expect(testShip.rotation).toEqual('H');
  });

  it('has a sunk property and a method of reporting sunk status', () => {
    testShip.isHit();
    expect(testShip.isSunk()).toEqual(false);
    testShip.isHit();
    expect(testShip.isSunk()).toEqual(true);
  });
});
