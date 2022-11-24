const gameboard = require('../gameboard');

describe('Gameboard Factory Function', () => {
  const testBoard = gameboard();
  it('returns and object', () => {
    expect(typeof testBoard).toEqual('object');
  });

  it('has a method of creating an array of length 100', () => {
    const testOcean = testBoard.createOcean();
    expect(testOcean).toHaveLength(100);
    expect(Array.isArray(testOcean)).toEqual(true);
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

  it.todo('has a method of checking inbounds placement');

  it('has a method of creating a ship\'s path', () => {
    const testPath = testBoard.makePath('cruiser', [0, 0]);
    expect(testPath).toHaveLength(3);
  });

  it.todo('has a method of checking overlapping paths');

  it.todo('handles illegal placements');

  it.todo('places ships by population the ship\'s position array and the occupied array');
});
