const gameboard = require('../gameboard');

describe('Gameboard Factory Function', () => {
  const testBoard = gameboard();
  it('returns an object', () => {
    expect(typeof testBoard).toEqual('object');
  });

  it('returns an ocean of length 100', () => {
    expect(testBoard.ocean).toHaveLength(100);
  });

  it('checks inbounds placement of ships', () => {
    expect(testBoard.isInbounds([10, 10])).toEqual(false);
    expect(testBoard.isInbounds([4, 4])).toEqual(true);
  });

  it('checks overlapping ships', () => {
    const overlapTest = gameboard();
    overlapTest.occupied.push([4, 5], [5, 5], [6, 5], [0, 1], [0, 2], [0, 3]);
    expect(overlapTest.occupied).toHaveLength(6);
    expect(overlapTest.isOverlap([[2, 2], [2, 1]])).toEqual(false);
    expect(overlapTest.isOverlap([[0, 3], [0, 2], [0, 1]])).toEqual(true);
  });

  it('checks duplicate placement', () => {
    const duplicateTest = gameboard();
    duplicateTest.inGame.push(duplicateTest.harbor[0]); // Destroyer
    expect(duplicateTest.inGame).toHaveLength(1);
    expect(duplicateTest.isPlaced(duplicateTest.harbor[2])).toEqual(false); // Cruiser
    expect(duplicateTest.isPlaced(duplicateTest.harbor[0])).toEqual(true); // Destroyer
  });

  it('tests validity of ship placement', () => {
    testBoard.inGame.push(testBoard.harbor[4]);
    expect(testBoard.isValPos(testBoard.harbor[0], [9, 5])).toEqual(false);
    expect(testBoard.isValPos(testBoard.harbor[4], [3, 3])).toEqual(false);
    expect(testBoard.isValPos(testBoard.harbor[1], [3, 7])).toEqual(true);
  });

  it('places ships after validity test', () => {
    const placeTest = gameboard();
    expect(typeof placeTest.placeShip(placeTest.harbor[4], [1, 2])).toEqual('object');
  });

  it('places attacks', () => {
    const attackTest = gameboard();
    attackTest.placeShip(attackTest.harbor[2], [3, 5]);
    expect(attackTest.occupied).toHaveLength(3);
    expect(attackTest.fire([5, 5]).length).toBeGreaterThan(0);
    expect(attackTest.inGame[0].type.damage).toEqual(1);
    expect(attackTest.destroyed).toHaveLength(0);
    attackTest.fire([4, 5]);
    attackTest.fire([3, 5]);
    expect(attackTest.destroyed).toHaveLength(1);
    expect(attackTest.bombed).toHaveLength(3);
    attackTest.fire([1, 2]);
    expect(attackTest.bombed).toHaveLength(4);
  });

  it('creates an attack queue for the cpu', () => {
    const qTest = gameboard();
    expect(qTest.Q).toHaveLength(0);
    qTest.placeShip(qTest.harbor[0], [0, 0]);
    qTest.placeShip(qTest.harbor[1], [0, 1]);
    qTest.placeShip(qTest.harbor[2], [0, 2]);
    expect(qTest.inGame).toHaveLength(3);
    qTest.fire([1, 0]);
    expect(qTest.Q).toHaveLength(3);
  });
});
