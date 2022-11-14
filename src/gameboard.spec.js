import Gameboard from './gameboard';

describe('Gameboard factory function', () => {
  const testGame = Gameboard();
  const pos = [5, 5];
  const pos2 = [7, 2]; // out of bounds check
  const pos3 = [4, 5]; // overlapping check
  const name = 'battleship';
  const name2 = 'cruiser';

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

  test('"isInbounds" checks if ship is placed inbounds', () => {
    expect(typeof testGame.isInbounds(pos, name)).toEqual('boolean');
    expect(testGame.isInbounds(pos, name)).toEqual(true);
    testGame.rotateShip(name);
    expect(testGame.getShip(name).rotation).toEqual('V');
    expect(testGame.isInbounds(pos2, name)).toEqual(false);
  });

  test('"rotateShip" changes ship\'s rotation', () => {
    testGame.rotateShip('submarine');
    expect(testGame.getShip('submarine').rotation).toEqual('V');
    testGame.rotateShip('submarine');
    expect(testGame.getShip('submarine').rotation).toEqual('H');
  });

  test('"createPath" takes coordinates and sets the ship position', () => {
    expect(Array.isArray(testGame.createPath(pos, name))).toEqual(true);
    expect(testGame.createPath(pos, name)).toHaveLength(4);
  });

  it('has an array of all placed ships', () => {
    expect(Array.isArray(testGame.inGame)).toEqual(true);
    testGame.placeShip(pos, name);
    expect(testGame.inGame).toHaveLength(1);
  });
  it('checks if ships paths overlap', () => {
    testGame.placeShip(pos3, name2);
    expect(testGame.isOverlapping(testGame.inGame, name2)).toEqual(true);
    expect(testGame.inGame).toHaveLength(1);
  });
  it('has a method of evaluating attack success', () => {
    expect(testGame.inGame).toHaveLength(1);
    expect(testGame.placeAttack([5, 3])).toReturn();
    // Take a coordinate and compare it to each ship's position array
    // If it matches call the ship's hit method and check if it's destroyed
  });
  it.todo('tracks placed attacks');
});
