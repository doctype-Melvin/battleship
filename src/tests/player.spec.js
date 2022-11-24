const player = require('../player');

describe('Player control', () => {
  const testPlayer = player('cpu');
  it('is an object', () => {
    expect(typeof testPlayer).toEqual('object');
  });

  it('has an empty gameboard', () => {
    expect(testPlayer.board.ocean).toHaveLength(100);
    expect(testPlayer.board.inGame).toHaveLength(0);
  });

  it('creates random coordinates', () => {
    expect(testPlayer.randomCoor()).toHaveLength(2);
  });

  it('randomly places ships', () => {
    testPlayer.randomShips();
    expect(testPlayer.board.inGame).toHaveLength(5);
  });
});
