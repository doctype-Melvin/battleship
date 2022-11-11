import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  const testGame = Gameboard();

  it('creates an array of length 100', () => {
    expect(Array.isArray(testGame.ocean)).toEqual(true);
    expect(testGame.ocean).toHaveLength(100);
  });

  it('has a function that creates ship objects', () => {
    expect(typeof testGame.makeShip()).toEqual('object');
  });

  it('has an array that stores the five ship types', () => {
    expect(Array.isArray(testGame.SHIPS)).toEqual(true);
    expect(testGame.SHIPS).toHaveLength(5);
  });

  it('checks if ship is placed inbounds', () => {
    expect(typeof testGame.isInbounds([0, 0], 'carrier')).toEqual('boolean');
    expect(testGame.isInbounds([7, 0], 'carrier')).toEqual(false);
  });

  it('changes ship rotation', () => {
    testGame.rotateShip('submarine');
    expect(testGame.getShipRotation('submarine')).toEqual('V');
    testGame.rotateShip('submarine');
    expect(testGame.getShipRotation('submarine')).toEqual('H');
  });
});
