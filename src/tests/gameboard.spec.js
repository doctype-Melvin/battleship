const gameboard = require('../gameboard');

describe('Gameboard Factory Function', () => {
  const testBoard = gameboard();
  it('returns and object', () => {
    expect(typeof testBoard).toEqual('object');
  });

  it('has a method of creating an array of length 100', () => {
    expect(testBoard.ocean).toHaveLength(100);
    expect(Array.isArray(testBoard.ocean)).toEqual(true);
  });

  it('has an array that stores the 5 ship types', () => {
    expect(testBoard.harbor).toHaveLength(5);
  });

  it('has a number of arrays to track ship placement and attacked cells', () => {
    expect(Array.isArray(testBoard.inGame)).toEqual(true);
    expect(Array.isArray(testBoard.occupied)).toEqual(true);
    expect(Array.isArray(testBoard.bombed)).toEqual(true);
    expect(Array.isArray(testBoard.success)).toEqual(true);
  });

  it('has a method of looking up ships from the harbor array', () => {
    expect(typeof testBoard.getShip('battleship')).toEqual('object');
  });

  it('has a method of checking inbounds placement', () => {
    testBoard.getShip('carrier').rotate();
    expect(testBoard.isInbounds('battleship', [0, 0])).toEqual(true);
    expect(testBoard.isInbounds('carrier', [0, 2])).toEqual(false);
  });

  it('has a method of creating a ship\'s path', () => {
    const testPath = testBoard.makePath(testBoard.getShip('cruiser'), [2, 2]);
    testPath.forEach((pos) => testBoard.occupied.push(pos));
    expect(testPath).toHaveLength(3);
  });

  it('has a method of checking overlapping paths', () => {
    const vertShip = testBoard.getShip('submarine');
    vertShip.rotate();
    const vertPos = testBoard.makePath(vertShip, [3, 3]);
    expect(testBoard.isOverlay(vertPos)).toEqual(true);
    vertPos.forEach((pos) => testBoard.occupied.push(pos));
    expect(testBoard.occupied).toHaveLength(6);
  });

  it.todo('handles illegal placements');

  it('places ships by populating the ship\'s position array and the occupied array', () => {
    const testPlacement = testBoard.placeShip('destroyer', [0, 0]);
    expect(testPlacement).toBeDefined();
    expect(testBoard.occupied).toHaveLength(8);
    const secondPlacement = testBoard.placeShip('carrier', [0, 0]);
    expect(typeof secondPlacement).toEqual('string');
    // expect(secondPlacement).toEqual('path is blocked by another ship');
    expect(testBoard.occupied).toHaveLength(8);
    expect(testBoard.inGame).toHaveLength(1);
  });

  it('places ships randomly', () => {
    const testBoard2 = gameboard();
    const random = testBoard2.randomShips();
    expect(random).toBeDefined();
    expect(testBoard2.inGame).toHaveLength(5);
    expect(testBoard2.occupied).toHaveLength(17);
    expect(testBoard2.inGame.some((item) => item.rotation === 'V')).toEqual(true);
  });

  it('places and tracks attacks', () => {
    expect(testBoard.placeAttack([1, 1])).toBeDefined();
    expect(testBoard.placeAttack([0, 0])).toHaveLength(2);
    expect(testBoard.bombed.length).toBeGreaterThan(1);
  });

  it('places random attacks and creates queue for next attack after shot on target', () => {
    const testBoard2 = gameboard();
    const tester = testBoard2.placeShip('destroyer', [0, 5]);
    expect(testBoard.inGame).toHaveLength(1);
    testBoard2.placeAttack([1, 5]); // On target
    testBoard2.randomAttack(); // From queue
    testBoard2.randomAttack();
    expect(testBoard2.bombed).toHaveLength(3);
    expect(testBoard2.success).toHaveLength(2);
    expect(tester.hits).toEqual(1);
  });
});
