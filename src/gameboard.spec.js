import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  const testGame = Gameboard();
  const pos = [5, 5];
  const pos2 = [7, 2];
  const name = 'battleship';

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

  it('"isInbounds" checks if ship is placed inbounds', () => {
    expect(typeof testGame.isInbounds(pos, name)).toEqual('boolean');
    expect(testGame.isInbounds(pos, name)).toEqual(true);
    testGame.rotateShip(name);
    expect(testGame.getShipRotation(name)).toEqual('V');
    expect(testGame.isInbounds(pos2, name)).toEqual(false);
  });

  it('"rotateShip" changes ship rotation', () => {
    testGame.rotateShip('submarine');
    expect(testGame.getShipRotation('submarine')).toEqual('V');
    testGame.rotateShip('submarine');
    expect(testGame.getShipRotation('submarine')).toEqual('H');
  });

  it('takes coordinates and creates the ship position', () => {
    expect(Array.isArray(testGame.createPath(pos, name))).toEqual(true);
    expect(testGame.createPath(pos, name)).toHaveLength(4);
    expect(testGame.getShip(name).position).toHaveLength(4);
  });

  it('has an array of all placed ships', () => {
    expect(Array.isArray(testGame.inGame)).toEqual(true);
    testGame.placeShip(pos, name);
    expect(testGame.inGame).toHaveLength(1);
  });
  it.todo('checks if ship\'s paths overlap');
  it.todo('has an array that stores all occupied cells');
});
