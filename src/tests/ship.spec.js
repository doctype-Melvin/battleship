const shipFac = require('../ship');

describe('Ship Factory Function', () => {
  const testShip = shipFac('Tester', 2);
  it('returns an object', () => {
    expect(typeof testShip).toEqual('object');
  });

  test('can rotate ship', () => {
    testShip.rotate();
    expect(testShip.rotation).toEqual('V');
    testShip.rotate();
    expect(testShip.rotation).toEqual('H');
  });

  it('increases damage count when hit', () => {
    testShip.isHit();
    expect(testShip.damage).toEqual(1);
  });

  it('reports destroyed ship', () => {
    testShip.isHit();
    expect(testShip.damage).toEqual(2);
    expect(testShip.isSunk()).toBeTruthy();
  });
});
